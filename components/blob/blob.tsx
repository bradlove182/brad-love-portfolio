/* eslint-disable @typescript-eslint/no-magic-numbers -- Bru */

import React, {
    useEffect,
    useRef
} from "react";
import {
    useFrame,
    useLoader
} from "@react-three/fiber";
import { Vector3 } from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { makeNoise3D } from "fast-simplex-noise";
import { useViewportScroll } from "framer-motion";

import { BlobEvents } from "./events";

import type { Mesh } from "three";

const noise = makeNoise3D();

const BLOB_SIZE = 2;
const BLOB_INITIAL_SCALE = new Vector3();

export interface BlobProps{
    blobState: BlobEvents;
}

export const Blob: React.ComponentType<BlobProps> = ({
    blobState = BlobEvents.CENTER
}) => {

    const blob = useRef<Mesh>(undefined!);
    const positionVector = useRef<Vector3>(new Vector3());
    const scaleVector = useRef<Vector3>(new Vector3());
    const mouseVector = useRef<Vector3>(new Vector3());
    const gradiantMap = useLoader(TextureLoader, "/fiveTone.jpeg");

    const { scrollYProgress } = useViewportScroll();

    useEffect(() => {

        const mouseHandler = (event: MouseEvent): void => {

            const mouseX = event.clientX / window.innerWidth * 2 - 1;
            const mouseY = event.clientY / window.innerHeight * 2 - 1;

            mouseVector.current.set(mouseX, -mouseY, 0);

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
        const time = clock.getElapsedTime() * 0.25;
        const numberOfSpikes = 1;

        switch(blobState){

            case BlobEvents.CENTER :
                scaleVector.current.setScalar(1.2);
                positionVector.current.setScalar(0);
                break;

            case BlobEvents.LEFT :
                scaleVector.current.setScalar(1.4);
                positionVector.current.set(-5, 0, 0);
                break;

            case BlobEvents.RIGHT :
                scaleVector.current.setScalar(1.4);
                positionVector.current.set(5, 0, 0);
                break;

            case BlobEvents.TOP :
                scaleVector.current.setScalar(1.4);
                positionVector.current.set(0, 3, 0);
                break;

            case BlobEvents.BOTTOM :
                scaleVector.current.setScalar(1.4);
                positionVector.current.set(0, -3, 0);
                break;

            default :
                break;

        }

        blob.current.scale.lerp(scaleVector.current, speed);
        blob.current.position.lerp(positionVector.current, speed);
        blob.current.position.lerp(mouseVector.current, speed);

        const position = blob.current.geometry.getAttribute("position");
        const positionArray = position.array;
        const normal = blob.current.geometry.getAttribute("normal");

        blob.current.rotation.y = scrollYProgress.get();

        // eslint-disable-next-line more/no-c-like-loops -- array is of type ArrayLike so this is easier
        for(let index = 0; index < positionArray.length; index++){

            positionVector.current.fromBufferAttribute(position, index);
            positionVector.current.normalize();
            positionVector.current.multiplyScalar(
                BLOB_SIZE + 0.2 * noise(
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
        <mesh ref={ blob } scale={ BLOB_INITIAL_SCALE }>
            { /* eslint-disable-next-line react-perf/jsx-no-new-array-as-prop -- Easier */ }
            <sphereGeometry args={ [BLOB_SIZE, 128, 128] } />
            <meshToonMaterial color="#faff00" gradientMap={ gradiantMap } />
        </mesh>
    );
};

/* eslint-enable @typescript-eslint/no-magic-numbers -- Bru */
