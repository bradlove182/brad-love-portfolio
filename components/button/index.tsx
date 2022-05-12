
import React from "react";

import style from "./index.module.scss";

export interface ButtonProps {
    onClick: () => void;
    text: string;
    variant?: "primary" | "secondary";
}

export const Button: React.ComponentType<ButtonProps> = ({
    onClick,
    text,
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
        { text }
    </button>
);
