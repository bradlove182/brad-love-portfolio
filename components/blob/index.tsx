import React from "react";
import { Canvas } from "@react-three/fiber";
import { Selection } from "@react-three/postprocessing";
import {
    AdaptiveDpr,
    AdaptiveEvents,
    Preload
} from "@react-three/drei";
import dynamic from "next/dynamic";

import { useStore } from "../../store";

import style from "./index.module.scss";

const Effects = dynamic(() => import("./effects"), {
    ssr: false
});

const Lights = dynamic(() => import("./lights"), {
    ssr: false
});

const Blob = dynamic(() => import("./blob"), {
    ssr: false
});

export const BlobRender: React.ComponentType = () => {

    const theme = useStore((state) => state.theme);

    return (
        <div className={ style.canvas }>
            <Canvas>
                <Preload />
                <AdaptiveDpr />
                <AdaptiveEvents />
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
