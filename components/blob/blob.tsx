/* eslint-disable @typescript-eslint/no-magic-numbers -- Bru */

import React, { useRef } from "react";
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

export interface BlobProps{
    blobState: BlobEvents;
}

export const Blob: React.ComponentType<BlobProps> = ({
    blobState = BlobEvents.CENTER
}) => {

    const blob = useRef<Mesh>(undefined!);
    const vector = useRef<Vector3>(new Vector3());
    const gradiantMap = useLoader(TextureLoader, "/fiveTone.jpeg");

    const { scrollYProgress } = useViewportScroll();

    useFrame(({
        clock
    }, delta) => {

        const speed = delta * 2;
        const time = clock.getElapsedTime() * 0.25;
        const numberOfSpikes = 1;

        switch(blobState){

            case BlobEvents.CENTER :
                blob.current.scale.lerp(vector.current.setScalar(1.2), speed);
                blob.current.position.lerp(vector.current.setScalar(0), speed);
                break;

            case BlobEvents.LEFT :
                blob.current.scale.lerp(vector.current.setScalar(1.4), speed);
                blob.current.position.lerp(vector.current.set(-5 * scrollYProgress.get(), 0, 0), speed);
                break;

            case BlobEvents.RIGHT :
                blob.current.scale.lerp(vector.current.setScalar(1.4), speed);
                blob.current.position.lerp(vector.current.set(3 * scrollYProgress.get(), 0, 0), speed);
                break;

            case BlobEvents.TOP :
                blob.current.scale.lerp(vector.current.setScalar(1.4), speed);
                blob.current.position.lerp(vector.current.set(0, 3 * scrollYProgress.get(), 0), speed);
                break;

            case BlobEvents.BOTTOM :
                blob.current.scale.lerp(vector.current.setScalar(1.4), speed);
                blob.current.position.lerp(vector.current.set(0, -3 * scrollYProgress.get(), 0), speed);
                break;

            default :
                break;

        }

        const position = blob.current.geometry.getAttribute("position");
        const positionArray = position.array;
        const normal = blob.current.geometry.getAttribute("normal");

        blob.current.rotation.y = scrollYProgress.get();

        // eslint-disable-next-line more/no-c-like-loops -- array is of type ArrayLike so this is easier
        for(let index = 0; index < positionArray.length; index++){

            vector.current.fromBufferAttribute(position, index);
            vector.current.normalize();
            vector.current.multiplyScalar(
                BLOB_SIZE + 0.2 * noise(
                    vector.current.x * numberOfSpikes + time,
                    vector.current.y * numberOfSpikes + time,
                    vector.current.z * numberOfSpikes + time
                )
            );
            position.setXYZ(index, vector.current.x, vector.current.y, vector.current.z);

        }

        blob.current.geometry.computeVertexNormals();
        position.needsUpdate = true;
        normal.needsUpdate = true;

        return undefined;

    });

    return (
        <mesh ref={ blob }>
            { /* eslint-disable-next-line react-perf/jsx-no-new-array-as-prop -- Easier */ }
            <sphereGeometry args={ [BLOB_SIZE, 128, 128] } />
            <meshToonMaterial color="#faff00" gradientMap={ gradiantMap } />
        </mesh>
    );
};

/* eslint-enable @typescript-eslint/no-magic-numbers -- Bru */
