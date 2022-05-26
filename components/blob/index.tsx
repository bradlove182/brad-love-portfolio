import React from "react";
import { Canvas } from "@react-three/fiber";
import { Selection } from "@react-three/postprocessing";


import { Blob } from "./blob";
import { Effects } from "./effects";
import { Lights } from "./lights";
import style from "./index.module.scss";

const BlobRender: React.ComponentType = () => (
    <div className={ style.canvas }>
        <Canvas>
            <Lights />
            <Selection>
                <Blob />
                <Effects />
            </Selection>
        </Canvas>
    </div>
);

export default BlobRender;
