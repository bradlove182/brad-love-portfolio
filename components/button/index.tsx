
import React from "react";

import style from "./index.module.scss";

export interface ButtonProps {
    text: string;
    variant?: "primary" | "secondary";
}

export const Button: React.ComponentType<ButtonProps> = ({
    text,
    variant = "primary"
}) => (
    <button
        className={ [
            style.button,
            variant
        ].filter(Boolean).join(" ") }
        type="button"
    >
        { text }
    </button>
);
