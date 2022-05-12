/* eslint-disable @typescript-eslint/no-magic-numbers -- Bru */

import React, { useRef } from "react";
import {
    useFrame,
    useLoader
} from "@react-three/fiber";
import { Vector3 } from "three";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { makeNoise3D } from "fast-simplex-noise";

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
    const gradiantMap = useLoader(TextureLoader, "/fiveTone.jpeg");

    useFrame(({
        camera,
        clock
    }) => {

        const animationSpeed = clock.getElapsedTime() * 0.05;
        const time = clock.getElapsedTime() * 0.25;
        const numberOfSpikes = 1;
        const vertex = new Vector3();

        switch(blobState){

            case BlobEvents.CENTER :
                camera.position.lerp(new Vector3(0, 0, 4), animationSpeed);
                blob.current.position.lerp(new Vector3(0, 0, 0), animationSpeed);
                camera.updateProjectionMatrix();
                break;

            case BlobEvents.LEFT :
                camera.position.lerp(new Vector3(0, 0, 3), animationSpeed);
                blob.current.position.lerp(new Vector3(-2, 0, 0), animationSpeed);
                camera.updateProjectionMatrix();
                break;

            case BlobEvents.RIGHT :
                camera.position.lerp(new Vector3(0, 0, 3), animationSpeed);
                blob.current.position.lerp(new Vector3(2, 0, 0), animationSpeed);
                camera.updateProjectionMatrix();
                break;

            case BlobEvents.TOP :
                camera.position.lerp(new Vector3(0, 0, 2), animationSpeed);
                blob.current.position.lerp(new Vector3(0, 3, 0), animationSpeed);
                camera.updateProjectionMatrix();
                break;

            case BlobEvents.BOTTOM :
                camera.position.lerp(new Vector3(0, 0, 2), animationSpeed);
                blob.current.position.lerp(new Vector3(0, -3, 0), animationSpeed);
                camera.updateProjectionMatrix();
                break;

            default :
                break;

        }

        const position = blob.current.geometry.getAttribute("position");
        const positionArray = position.array;
        const normal = blob.current.geometry.getAttribute("normal");

        // eslint-disable-next-line more/no-c-like-loops -- array is of type ArrayLike so this is easier
        for(let index = 0; index < positionArray.length; index++){

            vertex.fromBufferAttribute(position, index);
            vertex.normalize();
            vertex.multiplyScalar(BLOB_SIZE + 0.2 * noise(vertex.x * numberOfSpikes + time, vertex.y * numberOfSpikes + time, vertex.z * numberOfSpikes));
            position.setXYZ(index, vertex.x, vertex.y, vertex.z);

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
