
import React from "react";

import style from "./index.module.scss";

export interface ComicBlockProps{
    clipPath: string;
    background: string;
    children: React.ReactNode;
}

export const ComicBlock: React.ComponentType<ComicBlockProps> = ({
    clipPath,
    background,
    children
}) => (
    <div
        className={ style.block }
    >
        <div
            className={ style.shadow }
            style={ {
                clipPath
            } }
        >
            <div
                className={ style.content }
                style={ {
                    background,
                    clipPath
                } }
            >
                { children }
            </div>
        </div>

    </div>
);

