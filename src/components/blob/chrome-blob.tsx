import React, { useRef, useMemo } from "react";

import vertexShader from "./shaders/vertex-shader.glsl";
import fragmentShader from "./shaders/fragment-shader.glsl";
import { useFrame, useThree } from "@react-three/fiber";
import { useScroll } from "framer-motion";
import type { Mesh, ShaderMaterial } from "three";
import { MathUtils, Vector3 } from "three";

const BLOB_SIZE = 2;
const BLOB_INITIAL_SIZE: [
    radius: number,
    widthSegments: number,
    heightSegments: number
] = [BLOB_SIZE, 64, 64];
const BLOB_INITIAL_SCALE = new Vector3(0, 0, 0);
const BLOB_INITIAL_POSITION = new Vector3(0, 0, -10);

interface BlobMesh extends Mesh {
    material: {
        uniforms: {
            u_time: {
                value: number;
            };
            u_intensity: {
                value: number;
            };
        };
    } & ShaderMaterial;
}

const uniforms = {
    u_intensity: {
        value: 0.0,
    },
    u_time: {
        value: 0.0,
    },
};

const ChromeBlob: React.ComponentType = ({}) => {
    const mesh = useRef<BlobMesh>(null);
    const positionVector = useRef<Vector3>(new Vector3(0, 0, 0));
    const scaleVector = useRef<Vector3>(new Vector3());
    const { scrollYProgress } = useScroll();
    const { viewport } = useThree();

    const scale = useMemo(
        () =>
            viewport.width > viewport.height
                ? viewport.aspect * 0.825
                : viewport.aspect * 1.4,
        [viewport]
    );
    useFrame(({ clock }, delta) => {
        if (mesh.current) {
            const speed = delta * 2;
            const numberOfSpikes = Math.cos(1.25 * scrollYProgress.get());
            const spikeSize = Math.sin(scrollYProgress.get() * 2);
            scaleVector.current.setScalar(scale);

            mesh.current?.scale.lerp(scaleVector.current, speed);
            mesh.current?.position.lerp(
                positionVector.current.setScalar(0),
                speed
            );
            mesh.current.material.uniforms.u_time.value =
                0.2 * clock.getElapsedTime();
            mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
                mesh.current.material.uniforms.u_intensity.value,
                numberOfSpikes * spikeSize,
                0.02
            );
        }
    });
    return (
        <mesh
            ref={mesh}
            position={BLOB_INITIAL_POSITION}
            scale={BLOB_INITIAL_SCALE}
        >
            <icosahedronGeometry args={[2, 64]} />
            <shaderMaterial
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms}
            />
        </mesh>
    );
};

export default ChromeBlob;
