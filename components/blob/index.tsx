import React from "react";
import { Canvas } from "@react-three/fiber";

import { Blob } from "./blob";
import style from "./index.module.scss";

import type { BlobEvents } from "./events";
import type { Vector3 } from "@react-three/fiber";

// eslint-disable-next-line @typescript-eslint/no-magic-numbers -- settings
const LIGHT_POSITION: Vector3 = [0, 0, 3];

const BlobRender: React.ComponentType<BlobRenderProps> = ({
    blobState
}) => (
    <div className={ style.canvas }>
        <Canvas>
            <pointLight color="white" intensity={ 1 } position={ LIGHT_POSITION } />
            <Blob blobState={ blobState } />
        </Canvas>
    </div>
);

export interface BlobRenderProps{
    blobState: BlobEvents;
}

export default BlobRender;
