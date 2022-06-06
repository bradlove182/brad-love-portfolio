
import React from "react";
import {
    DotScreen,
    EffectComposer,
    Outline
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

export const Effects: React.ComponentType = () => (
    <EffectComposer autoClear={ false }>
        <Outline blur edgeStrength={ 100 } visibleEdgeColor={ 0x0_00 } />
        <DotScreen angle={ Math.PI * 0.5 } blendFunction={ BlendFunction.NORMAL } scale={ 0.3 } />
    </EffectComposer>
);

