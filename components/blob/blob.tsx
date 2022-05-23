/* eslint-disable @typescript-eslint/no-magic-numbers -- Bru */

import React, {
    useEffect,
    useRef
} from "react";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import { useViewportScroll } from "framer-motion";
import { makeNoise3D } from "fast-simplex-noise";
import { Select } from "@react-three/postprocessing";

import type { Mesh } from "three";

const noise = makeNoise3D();

const BLOB_SIZE = 2;
const BLOB_INITIAL_SCALE = new Vector3(0, 0, 0);
const BLOB_INITIAL_POSITION = new Vector3(0, 0, -10);

export const Blob: React.ComponentType = () => {

    const blob = useRef<Mesh>(undefined!);
    const positionVector = useRef<Vector3>(new Vector3());
    const scaleVector = useRef<Vector3>(new Vector3());
    const mouseVector = useRef<Vector3>(new Vector3());
    const { scrollYProgress } = useViewportScroll();

    useEffect(() => {

        const mouseHandler = (event: MouseEvent): void => {

            const mouseX = event.clientX / window.innerWidth * 2 - 1;
            const mouseY = event.clientY / window.innerHeight * 2 - 1;

            mouseVector.current.set(mouseX, -mouseY, 0);
            // BlobMaterial.current.color.setRGB(mouseX, mouseY, mouseX - mouseY);

        };

        window.addEventListener("mousemove", mouseHandler);

        return () => {
            window.removeEventListener("mousemove", mouseHandler);
        };

    }, []);

    useFrame(({
        clock
    }, delta) => {

        const speed = delta * 2;
        const time = clock.getElapsedTime() * 0.025;
        const numberOfSpikes = Math.cos(1.25 * scrollYProgress.get());
        const spikeSize = Math.sin(scrollYProgress.get() * 2);

        scaleVector.current.setScalar(1.4);
        positionVector.current.setScalar(0);

        blob.current.scale.lerp(scaleVector.current, speed);
        blob.current.position.lerp(positionVector.current, speed);
        blob.current.position.lerp(mouseVector.current, speed);

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
            <mesh position={ BLOB_INITIAL_POSITION } ref={ blob } scale={ BLOB_INITIAL_SCALE }>
                { /* eslint-disable-next-line react-perf/jsx-no-new-array-as-prop -- Easier */ }
                <sphereGeometry args={ [BLOB_SIZE, 128, 128] } />
                { /* eslint-disable-next-line react-perf/jsx-no-new-array-as-prop -- Easier */ }
                <meshPhysicalMaterial color={ [0, -0.1, -1] } />

            </mesh>
        </Select>
    );
};

/* eslint-enable @typescript-eslint/no-magic-numbers -- Bru */
