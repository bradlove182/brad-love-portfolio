import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Selection } from "@react-three/postprocessing";
import {
    AdaptiveDpr,
    AdaptiveEvents,
    Preload
} from "@react-three/drei";

import { useStore } from "../../store";

import { Blob } from "./blob";
import { Effects } from "./effects";
import { Lights } from "./lights";
import style from "./index.module.scss";

export const BlobRender: React.ComponentType = () => {

    const theme = useStore((state) => state.theme);

    return (
        <div className={ style.canvas }>
            <Canvas>
                <Suspense>
                    <Preload />
                    <AdaptiveDpr />
                    <AdaptiveEvents />
                    <Lights />
                    <Selection>
                        <Blob blobColor={ theme.blobColor } />
                        <Effects />
                    </Selection>
                </Suspense>
            </Canvas>
        </div>
    );

};

export default BlobRender;
