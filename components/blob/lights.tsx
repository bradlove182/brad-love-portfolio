
import React from "react";

import type { Vector3 } from "@react-three/fiber";

const POINT_LIGHT: Vector3 = [0, 0, 100];
const DIRECTION_LIGHT: Vector3 = [-1, 1, 1];

export const Lights: React.ComponentType = () => (
    <React.Fragment>
        <pointLight color="#080808" intensity={ 1 } position={ POINT_LIGHT } />
        <ambientLight color="#080808" />
        <directionalLight color="white" position={ DIRECTION_LIGHT } />
    </React.Fragment>
);
