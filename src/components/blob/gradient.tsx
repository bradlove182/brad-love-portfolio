import { useFrame, extend, useThree } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import type { Mesh, PerspectiveCamera, ShaderMaterial } from "three";
import { Vector3 } from "three";
import { Color, MathUtils } from "three";
import type { Object3DNode } from "@react-three/fiber";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
extend({ TextGeometry });

declare module "@react-three/fiber" {
    interface ThreeElements {
        textGeometry: Object3DNode<TextGeometry, typeof TextGeometry>;
    }
}

import fragmentShader from "./shaders/gradient/fragment.glsl";
import vertexShader from "./shaders/gradient/vertex.glsl";
import { Text } from "@react-three/drei";
import { damp } from "three/src/math/MathUtils";

interface GradientMesh extends Mesh {
    material: {
        uniforms: {
            u_time: {
                value: number;
            };
            u_bg: {
                value: Color;
            };
            u_bgMain: {
                value: Color;
            };
            u_color1: {
                value: Color;
            };
            u_color2: {
                value: Color;
            };
        };
    } & ShaderMaterial;
}

const Gradient: React.ComponentType = ({}) => {
    const mesh = useRef<GradientMesh>(null);
    const text = useRef<Mesh>(null);
    const { viewport } = useThree();
    const uniforms = useMemo(
        () => ({
            u_time: {
                value: 0,
            },
            u_bg: {
                value: new Color("#ff80d4"),
            },
            u_bgMain: {
                value: new Color("#16161E"),
            },
            u_color1: {
                value: new Color("#8080ff"),
            },
            u_color2: {
                value: new Color("#16161E"),
            },
        }),
        []
    );

    const clamp = (num: number, min: number, max: number) =>
        num > max ? min : num;

    useFrame(({ clock, camera }, delta) => {
        if (mesh.current) {
            const fov = MathUtils.radToDeg((camera as PerspectiveCamera).far);
            const y = 2 * Math.tan(fov / 2) * 5;
            const x = y * (camera as PerspectiveCamera).aspect;
            mesh.current.scale.set(x, y, 1);
            mesh.current.material.uniforms.u_time.value =
                clock.getElapsedTime();
        }
        if (text.current) {
            text.current.position.setX(
                damp(
                    clamp(
                        text.current.position.x,
                        -viewport.width,
                        viewport.width
                    ),
                    text.current.position.x + 1,
                    1,
                    delta
                )
            );
        }
    });

    return (
        <>
            <mesh position={[-viewport.width, 0, -1]} ref={text}>
                <Text scale={1}>{"Creative"}</Text>
                <Text scale={1} position={[viewport.width * 1, 0, 0]}>
                    {"Creative"}
                </Text>
                <Text scale={1} position={[-viewport.width * 1, 0, 0]}>
                    {"Creative"}
                </Text>
                <Text scale={1} position={[-viewport.width * 2, 0, 0]}>
                    {"Creative"}
                </Text>
                <Text scale={1} position={[viewport.width * 2, 0, 0]}>
                    {"Creative"}
                </Text>
            </mesh>
            <mesh ref={mesh} position={[0, 0, -2]}>
                <planeGeometry args={[2, 2]} />
                <shaderMaterial
                    fragmentShader={fragmentShader}
                    vertexShader={vertexShader}
                    uniforms={uniforms}
                />
            </mesh>
        </>
    );
};

export default Gradient;
