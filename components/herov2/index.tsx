
import React, {
    useRef,
    useCallback,
    useEffect
} from "react";
import {
    Engine,
    Composite,
    Bodies,
    Runner,
    Mouse,
    MouseConstraint
} from "matter-js";
import {
    BulgePinchFilter
} from "pixi-filters";
import {
    Container,
    Application,
    Text,
    TextStyle,
    ObservablePoint
} from "pixi.js";

import {
    lerp
} from "../../utils/linear-interpolation";

import type {
    Vector,
    Body
} from "matter-js";
import type { Filter } from "pixi.js";

interface Letter{
    text: Text;
    body: Body;
    maxX: number;
    maxY: number;
    minX: number;
    minY: number;
}


// eslint-disable-next-line max-lines-per-function -- No worries dude
const HeroTwo: React.ComponentType = () => {

    const sceneReference = useRef<HTMLDivElement | null>(null);
    const engine = useRef<Engine>(Engine.create());
    const runner = useRef<Runner>(Runner.create());
    const mouseConstraint = useRef<MouseConstraint>();
    const pixiApp = useRef<Application>();
    const letters = useRef<Letter[]>([]);
    const containerReference = useRef<Container>(new Container());
    const filters = useRef<Filter[]>([]);
    const currentPinchStrength = useRef<number>(0);
    const currentActiveColour = useRef<string>("#ffffff");
    const currentSelectedLetter = useRef<Text>();
    const words = useRef<string>("BRAD LOVE");
    const newWordsCount = useRef<number>(0);

    const generateLetters = useCallback(() => {

        newWordsCount.current += 1;

        const airFriction = 0.02;
        const boundsOffset = 20;
        const heightOffset = 60;
        const widthOffset = 30;
        let lineHeight = 0;
        const splitWords = words.current.split(" ");

        for(const word of splitWords){

            let letterOffset = 0;

            for(const letter of word){

                const textStyle = new TextStyle({
                    fill: "#000000",
                    fontFamily: "Inter",
                    fontSize: "20em",
                    fontWeight: "bold"
                });

                const text = new Text(letter, textStyle);
                text.resolution = 2;
                text.anchor.set(0.5);
                text.interactive = true;
                text.cursor = "Grab";
                text.filters = [new BulgePinchFilter({
                    strength: 0
                })];

                text.on("mouseover", () => {
                    currentActiveColour.current = "#ffffff";
                });

                text.on("mouseout", () => {
                    currentActiveColour.current = "#000000";
                });

                text.on("mousedown", () => {
                    currentPinchStrength.current = -0.2;
                    currentSelectedLetter.current = text;
                });

                text.on("mouseup", () => {
                    currentPinchStrength.current = 0;
                });

                containerReference.current.addChild(text);

                letterOffset += text.width;
                lineHeight = text.height * splitWords.indexOf(word);

                const body = Bodies.rectangle(
                    window.innerWidth / 2 - widthOffset + letterOffset,
                    lineHeight - text.height * 2,
                    text.width,
                    text.height - heightOffset,
                    {
                        frictionAir: airFriction * Math.random()
                    }
                );

                Composite.add(engine.current.world, body);

                const screenOffset = Math.hypot(text.width, text.height + boundsOffset);

                const newLetter: Letter = {
                    body,
                    maxX: window.innerWidth + screenOffset,
                    maxY: window.innerHeight + screenOffset,
                    minX: -screenOffset,
                    minY: -screenOffset,
                    text
                };

                letters.current.push(newLetter);

            }

        }

    }, []);

    const startWorld = useCallback(() => {

        pixiApp.current?.ticker.add(() => {

            if(currentSelectedLetter.current){

                const filter = currentSelectedLetter.current.filters![0] as BulgePinchFilter;
                filter.strength = lerp(0.1, filter.strength, currentPinchStrength.current);

            }

            for(const letter of letters.current){

                const position = letter.body.position;
                const angle = letter.body.angle;

                letter.text.position = new ObservablePoint<Vector>(
                    () => position,
                    position,
                    position.x,
                    position.y
                );
                letter.text.rotation = angle;

                if(position.x < letter.minX || position.x > letter.maxX || position.y > letter.maxY){
                    Composite.remove(engine.current.world, letter.body);
                    letter.text.destroy();
                    letters.current.splice(letters.current.indexOf(letter), 1);
                    currentSelectedLetter.current = undefined;
                }

                if(letters.current.length === 0){
                    const time = 500;
                    setTimeout(() => {
                        generateLetters();
                    }, time);
                }

            }

            switch(newWordsCount.current){

                case 1 :
                    words.current = "CREATIVE DEVELOPER";
                    break;
                case 2 :
                    words.current = "STOP";
                    break;
                case 3 :
                    words.current = "THROWING";
                    break;
                case 4 :
                    words.current = "ME";
                    break;
                case 5 :
                    words.current = "FINE...";
                    break;
                default :
                    newWordsCount.current = 0;
                    words.current = "CREATIVE DEVELOPER";
                    break;

            }

        });

        Runner.run(runner.current, engine.current);

    }, []);

    const createWorld = useCallback(() => {

        // Build Pixi app
        pixiApp.current = new Application({
            backgroundAlpha: 0,
            resizeTo: sceneReference.current ? sceneReference.current : window
        });

        // Append Pixi app to scene
        sceneReference.current?.appendChild(pixiApp.current.view);

        pixiApp.current.stage.addChild(containerReference.current);

        filters.current.push();

        containerReference.current.filters = filters.current;

        const platformHeight = 10;
        const multiplier = 10;

        const platform = Bodies.rectangle(
            window.innerWidth - window.innerWidth / 2,
            window.innerHeight / 3 + platformHeight * multiplier,
            window.innerWidth - window.innerWidth / 3,
            platformHeight,
            {
                collisionFilter: {
                    group: 1
                },
                isStatic: true
            }
        );

        mouseConstraint.current = MouseConstraint.create(engine.current, {
            mouse: Mouse.create(sceneReference.current!)
        });
        mouseConstraint.current.constraint.render.visible = false;
        mouseConstraint.current.constraint.stiffness = 0.2;

        Composite.add(engine.current.world, [
            platform,
            mouseConstraint.current
        ]);

    }, []);

    useEffect(() => {

        createWorld();
        generateLetters();
        startWorld();

    }, [
        createWorld,
        generateLetters,
        startWorld
    ]);

    return (
        <div
            ref={ sceneReference }
            style={ {
                height: "100vh",
                width: "100vw"
            } }
        />
    );

};

export default HeroTwo;

