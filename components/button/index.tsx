
import React from "react";

import style from "./index.module.scss";

export interface ButtonProps{
    onClick?: () => void;
    children: React.ReactNode;
    variant?: "primary" | "secondary";
}

export const Button: React.ComponentType<ButtonProps> = ({
    onClick,
    children,
    variant = "primary"
}) => (
    <button
        className={ [
            style.button,
            variant
        ].filter(Boolean).join(" ") }
        onClick={ onClick }
        type="button"
    >
        { children }
    </button>
);
