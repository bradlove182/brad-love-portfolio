"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, OrbitControls, Preload } from "@react-three/drei";
import dynamic from "next/dynamic";

import { useStore } from "../../store";

import style from "./index.module.css";

const Lights = dynamic(() => import("./lights"), {
    ssr: false,
});

const ChromeBlob = dynamic(() => import("./chrome-blob"), {
    ssr: false,
});

const Gradient = dynamic(() => import("./gradient"), {
    ssr: false,
});

const Refraction = dynamic(() => import("./refraction"), {
    ssr: false,
});

export const BlobRender: React.ComponentType = () => {
    return (
        <div className={style.canvas}>
            <Canvas
                dpr={window.devicePixelRatio}
                camera={{ position: [0, 0, 2.4] }}
            >
                <Preload />
                <AdaptiveDpr />
                <ambientLight intensity={1.0} />
                <directionalLight intensity={4} position={[1, 5, 4]} />
                <Gradient />
                <Refraction />
                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default BlobRender;
