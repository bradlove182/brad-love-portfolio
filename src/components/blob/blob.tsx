import React, { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Color, MeshPhysicalMaterial, Vector3 } from "three";
import { useScroll } from "framer-motion";
import { makeNoise3D } from "fast-simplex-noise";
import { Select } from "@react-three/postprocessing";
import { meshBounds } from "@react-three/drei";

import type { Mesh, BufferAttribute } from "three";

const noise = makeNoise3D();

const BLOB_SIZE = 2;
const BLOB_INITIAL_SIZE: [
    radius: number,
    widthSegments: number,
    heightSegments: number
] = [BLOB_SIZE, 64, 64];
const BLOB_INITIAL_SCALE = new Vector3(0, 0, 0);
const BLOB_INITIAL_POSITION = new Vector3(0, 0, -10);

export interface BlobProps {
    blobColor: [r: number, g: number, b: number];
}

export const Blob: React.ComponentType<BlobProps> = ({ blobColor }) => {
    const blob = useRef<Mesh>(null);
    const positionVector = useRef<Vector3>(new Vector3(0, 0, 0));
    const scaleVector = useRef<Vector3>(new Vector3());
    const color = useMemo<Color>(
        () => new Color(blobColor[0], blobColor[1], blobColor[2]),
        [blobColor]
    );
    const material = useRef<MeshPhysicalMaterial>(
        new MeshPhysicalMaterial({
            color,
        })
    );
    const { scrollYProgress } = useScroll();
    const { viewport, clock } = useThree();

    const scale = useMemo(
        () =>
            viewport.width > viewport.height
                ? viewport.aspect * 0.825
                : viewport.aspect * 1.4,
        [viewport]
    );

    useEffect(() => {
        const toggleClock = (): void => {
            if (clock.running) {
                clock.stop();
                return;
            }

            clock.start();
        };

        document.addEventListener("visibilitychange", toggleClock);

        return () => {
            document.removeEventListener("visibilitychange", toggleClock);
        };
    }, [clock]);

    useFrame((state, delta) => {
        const speed = delta * 2;
        const time = state.clock.getElapsedTime() * 0.025;
        const numberOfSpikes = Math.cos(1.25 * scrollYProgress.get());
        const spikeSize = Math.sin(scrollYProgress.get() * 2);

        scaleVector.current.setScalar(scale);

        blob.current?.scale.lerp(scaleVector.current, speed);
        blob.current?.position.lerp(positionVector.current.setScalar(0), speed);
        material.current.color.lerp(color, speed);

        const position = blob.current?.geometry.getAttribute(
            "position"
        ) as BufferAttribute;

        for (let index = 0; index < position.count; index++) {
            positionVector.current.fromBufferAttribute(position, index);
            positionVector.current.normalize();
            positionVector.current.multiplyScalar(
                BLOB_SIZE +
                    spikeSize *
                        noise(
                            positionVector.current.x * numberOfSpikes + time,
                            positionVector.current.y * numberOfSpikes + time,
                            positionVector.current.z * numberOfSpikes + time
                        )
            );
            position.setXYZ(
                index,
                positionVector.current.x,
                positionVector.current.y,
                positionVector.current.z
            );
        }

        blob.current?.geometry.computeVertexNormals();
        position.needsUpdate = true;
    });

    return (
        <Select enabled>
            <mesh
                material={material.current}
                position={BLOB_INITIAL_POSITION}
                raycast={meshBounds}
                ref={blob}
                scale={BLOB_INITIAL_SCALE}
            >
                <sphereGeometry args={BLOB_INITIAL_SIZE} />
            </mesh>
        </Select>
    );
};

export default Blob;
