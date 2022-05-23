import React from "react";
import { Canvas } from "@react-three/fiber";
import { Selection } from "@react-three/postprocessing";

import { Blob } from "./blob";
import { Effects } from "./effects";
import style from "./index.module.scss";

import type { Vector3 } from "@react-three/fiber";


const POINT_LIGHT: Vector3 = [0, 0, 100];
const DIRECTION_LIGHT: Vector3 = [1, 1, 1];

const BlobRender: React.ComponentType = () => (
    <div className={ style.canvas }>
        <Canvas>
            <pointLight color="#080808" intensity={ 1 } position={ POINT_LIGHT } />
            <ambientLight color="#080808" />
            <directionalLight color="white" position={ DIRECTION_LIGHT } />
            <Selection>
                <Blob />
                <Effects />
            </Selection>
        </Canvas>
    </div>
);

export default BlobRender;
