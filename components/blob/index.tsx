import React, { useContext } from "react";
import { Canvas } from "@react-three/fiber";
import { Selection } from "@react-three/postprocessing";

import { ThemeContext } from "../theme";

import { Blob } from "./blob";
import { Effects } from "./effects";
import { Lights } from "./lights";
import style from "./index.module.scss";

const BlobRender: React.ComponentType = () => {

    const theme = useContext(ThemeContext);

    return (
        <div className={ style.canvas }>
            <Canvas>
                <Lights />
                <Selection>
                    <Blob blobColor={ theme.blobColor } />
                    <Effects />
                </Selection>
            </Canvas>
        </div>
    );

};

export default BlobRender;
