
import React, {
    useMemo,
    useRef
} from "react";
import {
    useFrame,
    useThree
} from "@react-three/fiber";
import {
    Color,
    MeshPhysicalMaterial,
    Vector3
} from "three";
import { useViewportScroll } from "framer-motion";
import { makeNoise3D } from "fast-simplex-noise";
import { Select } from "@react-three/postprocessing";
import { meshBounds } from "@react-three/drei";

import type { Mesh } from "three";

const noise = makeNoise3D();

const BLOB_SIZE = 2;
const BLOB_INITIAL_SIZE: [
    radius: number,
    widthSegments: number,
    heightSegments: number
] = [BLOB_SIZE, 128, 128];
const BLOB_INITIAL_SCALE = new Vector3(0, 0, 0);
const BLOB_INITIAL_POSITION = new Vector3(0, 0, -10);

export interface BlobProps{
    blobColor: [r: number, g: number, b: number];
}

export const Blob: React.ComponentType<BlobProps> = ({
    blobColor
}) => {

    const blob = useRef<Mesh>(undefined!);
    const positionVector = useRef<Vector3>(new Vector3(0, 0, 0));
    const scaleVector = useRef<Vector3>(new Vector3());
    const color = useMemo<Color>(() => new Color(blobColor[0], blobColor[1], blobColor[2]), blobColor);
    const material = useRef<MeshPhysicalMaterial>(
        new MeshPhysicalMaterial({
            color
        })
    );
    const { scrollYProgress } = useViewportScroll();
    const { viewport } = useThree();

    const scale = useMemo(() => viewport.width > viewport.height ? viewport.aspect * 0.825 : viewport.aspect * 1.4, [viewport]);

    useFrame(({
        clock
    }, delta) => {

        const speed = delta * 2;
        const time = clock.getElapsedTime() * 0.025;
        const numberOfSpikes = Math.cos(1.25 * scrollYProgress.get());
        const spikeSize = Math.sin(scrollYProgress.get() * 2);

        scaleVector.current.setScalar(scale);

        blob.current.scale.lerp(scaleVector.current, speed);
        blob.current.position.lerp(positionVector.current.setScalar(0), speed);
        material.current.color.lerp(color, speed);

        const position = blob.current.geometry.getAttribute("position");
        const positionArray = position.array;
        const normal = blob.current.geometry.getAttribute("normal");

        // eslint-disable-next-line more/no-c-like-loops -- array is of type ArrayLike so this is easier
        for(let index = 0; index < positionArray.length; index++){

            positionVector.current.fromBufferAttribute(position, index);
            positionVector.current.normalize();
            positionVector.current.multiplyScalar(
                BLOB_SIZE + spikeSize * noise(
                    positionVector.current.x * numberOfSpikes + time,
                    positionVector.current.y * numberOfSpikes + time,
                    positionVector.current.z * numberOfSpikes + time
                )
            );
            position.setXYZ(index, positionVector.current.x, positionVector.current.y, positionVector.current.z);

        }

        blob.current.geometry.computeVertexNormals();
        position.needsUpdate = true;
        normal.needsUpdate = true;

        return undefined;

    });

    return (
        <Select enabled>
            <mesh material={ material.current } position={ BLOB_INITIAL_POSITION } raycast={ meshBounds } ref={ blob } scale={ BLOB_INITIAL_SCALE }>
                <sphereGeometry args={ BLOB_INITIAL_SIZE } />
            </mesh>
        </Select>
    );
};
