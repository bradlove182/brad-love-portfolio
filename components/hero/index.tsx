
import React, {
    useRef,
    useEffect,
    useCallback
} from "react";
import {
    Engine,
    Render,
    Composite,
    Bodies,
    Runner,
    Mouse,
    MouseConstraint,
    Events
} from "matter-js";

import CreativeDeveloper from "./title";

import type { Body } from "matter-js";

interface Letter{
    body: Body;
    maxX: number;
    maxY: number;
    minX: number;
    minY: number;
}

export const Hero: React.ComponentType = () => {

    const titleSVG = useRef<SVGSVGElement | null>(null);
    const canvasReference = useRef<HTMLCanvasElement | null>(null);
    const mouse = useRef<Mouse>();
    const mouseConstraint = useRef<MouseConstraint>();
    const engine = useRef<Engine>(Engine.create());
    const runner = useRef<Runner>(Runner.create());
    const render = useRef<Render>();
    const letters = useRef<Letter[]>([]);

    const createRender = useCallback(() => {

        render.current = Render.create({
            canvas: canvasReference.current ? canvasReference.current : undefined,
            engine: engine.current,
            options: {
                background: "transparent",
                height: window.innerHeight,
                showAngleIndicator: false,
                showSleeping: false,
                width: window.innerWidth,
                wireframes: false
            }
        });

        Render.run(render.current);
        Runner.run(runner.current, engine.current);

    }, []);

    const addLetters = useCallback(() => {

        const privateLetters: Letter[] = [];

        const maxWidth = 900;
        const maxHeight = 325;
        const airFriction = 0.02;
        const offset = 20;

        const svg = titleSVG.current!.getBoundingClientRect();
        const paths = titleSVG.current!.querySelectorAll("path");
        const totalHeight = svg.top + svg.height;

        let scale = 1;
        scale = svg.width * (maxHeight / maxWidth) > svg.height ? svg.height / maxHeight : svg.width / maxWidth;

        for(const path of paths){

            const character = path.dataset.letter;
            const characterBounds = path.getBoundingClientRect();

            if(character){

                const body = Bodies.rectangle(
                    characterBounds.left + characterBounds.width / 2,
                    characterBounds.top + characterBounds.height / 2 - totalHeight,
                    characterBounds.width,
                    characterBounds.height + offset,
                    {
                        collisionFilter: {
                            category: 4
                        },
                        frictionAir: airFriction * Math.random(),
                        render: {
                            sprite: {
                                texture: `/letters/letter-${ character }.svg`,
                                xScale: scale,
                                yScale: scale
                            }
                        }
                    }
                );

                const characterOffset = Math.hypot(characterBounds.width, characterBounds.height + offset);

                const letter = {
                    body,
                    maxX: window.innerWidth + characterOffset,
                    maxY: window.innerWidth + characterOffset,
                    minX: -characterOffset,
                    minY: -characterOffset
                };

                privateLetters.push(letter);

            }

        }

        letters.current = privateLetters;
        Composite.add(engine.current.world, privateLetters.map((item) => item.body));

    }, []);

    const createWorld = useCallback(() => {

        const width = canvasReference.current ? canvasReference.current.width : window.innerWidth;
        const height = canvasReference.current ? canvasReference.current.height : window.innerHeight;
        const platformHeight = 20;

        // Add mouse constraint
        if(render.current){
            mouse.current = Mouse.create(render.current.canvas);
            mouseConstraint.current = MouseConstraint.create(engine.current, { mouse: mouse.current });
            mouseConstraint.current.constraint.render.visible = false;
            mouseConstraint.current.constraint.stiffness = 0.2;
            render.current.mouse = mouse.current;
            Composite.add(engine.current.world, mouseConstraint.current);
        }

        // Add Platform
        Composite.add(engine.current.world, [
            Bodies.rectangle(
                width / 2,
                height / 2,
                width,
                platformHeight,
                {
                    isStatic: true,
                    render: {
                        visible: false
                    }
                }
            )
        ]);

        Events.on(engine.current, "afterUpdate", () => {
            for(const letter of letters.current){
                const body = engine.current.world.bodies.find((item) => item.id === letter.body.id);
                const position = body!.position;

                if(position.x < letter.minX || position.x > letter.maxX || position.y > letter.maxY){
                    Composite.remove(engine.current.world, letter.body);
                    letters.current.splice(letters.current.indexOf(letter), 1);
                }

                if(letters.current.length === 0){
                    const time = 500;
                    setTimeout(() => {
                        addLetters();
                    }, time);
                }
            }
        });

    }, []);

    const handleResize = useCallback(() => {

        if(canvasReference.current){
            canvasReference.current.width = window.innerWidth;
            canvasReference.current.height = window.innerHeight / 2;
        }

        Composite.clear(engine.current.world, false);

        createWorld();
        addLetters();

    }, []);

    useEffect(() => {

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, [handleResize]);

    useEffect(() => {

        createRender();
        createWorld();
        addLetters();

        return () => {
            engine.current.enabled = false;
            runner.current.enabled = false;
        };

    }, [
        createRender,
        createWorld,
        addLetters
    ]);

    return (
        <div>
            <canvas ref={ canvasReference } />
            <CreativeDeveloper ref={ titleSVG } />
        </div>
    );

};
