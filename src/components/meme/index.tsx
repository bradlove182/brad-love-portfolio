"use client";

import React, { useCallback, useState } from "react";

import { useMousePosition } from "@hooks/use-mouse-position";

import style from "./index.module.css";

const offset = 20;
const width = 250;
const center = width / 2;

export interface MemeProps {
    meme: string;
    children: React.ReactNode;
}

export const Meme: React.ComponentType<MemeProps> = ({ meme, children }) => {
    const [x, y] = useMousePosition();
    const [showImage, setShowImage] = useState<boolean>(false);

    const mouseEnter = useCallback(() => {
        setShowImage(true);
    }, []);

    const mouseLeave = useCallback(() => {
        setShowImage(false);
    }, []);

    return (
        <span
            className={style.meme}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
        >
            {children}
            {
                // eslint-disable-next-line @next/next/no-img-element, max-len -- no
                showImage ? (
                    <img
                        alt={meme}
                        src={meme}
                        style={{
                            transform: `translate(${x - center}px, ${
                                y + offset
                            }px)`,
                        }}
                        width={width}
                    />
                ) : undefined
            }
        </span>
    );
};
