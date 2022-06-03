import React, {
    useContext,
    useEffect
} from "react";
import { Canvas } from "@react-three/fiber";
import { Selection } from "@react-three/postprocessing";

import { ThemeContext } from "../theme";

import { Blob } from "./blob";
import { Effects } from "./effects";
import { Lights } from "./lights";
import style from "./index.module.scss";

export interface BlobRenderProps{
    blobLoaded: (state: boolean) => void;
}

export const BlobRender: React.ComponentType<BlobRenderProps> = ({
    blobLoaded
}) => {

    const theme = useContext(ThemeContext);

    useEffect(() => {

        blobLoaded(true);

    }, [blobLoaded]);

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

