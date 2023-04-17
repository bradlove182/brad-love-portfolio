import { useFBO } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import type { Mesh } from "three";
import { Vector4, Vector2 } from "three";

import fragmentShader from "./shaders/refraction/fragment.glsl";
import vertexShader from "./shaders/refraction/vertex.glsl";

const Refraction: React.ComponentType = ({}) => {
    const mesh = useRef<Mesh>(null);
    const mainRenderTarget = useFBO();

    const uniforms = useMemo(
        () => ({
            uTime: {
                value: 0,
            },
            uSceneTex: {
                value: null,
            },
            uTransparent: {
                value: 0.5,
            },
            uRefractPower: {
                value: 0.3,
            },
            color: {
                value: new Vector4(),
            },
            winResolution: {
                value: new Vector2(
                    window.innerWidth,
                    window.innerHeight
                ).multiplyScalar(Math.min(window.devicePixelRatio, 2)),
            },
        }),
        []
    );

    useFrame(({ gl, scene, camera }) => {
        if (mesh.current) {
            mesh.current.material.uniforms.winResolution.value = new Vector2(
                window.innerWidth,
                window.innerHeight
            ).multiplyScalar(Math.min(window.devicePixelRatio, 2));
            gl.setRenderTarget(mainRenderTarget);
            gl.render(scene, camera);
            mesh.current.material.uniforms.uSceneTex.value =
                mainRenderTarget.texture;
            gl.setRenderTarget(null);
        }
    });

    return (
        <mesh ref={mesh} position={[0, 0, 0]}>
            <icosahedronGeometry args={[1, 40]} />
            <shaderMaterial
                uniforms={uniforms}
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
            />
        </mesh>
    );
};

export default Refraction;
