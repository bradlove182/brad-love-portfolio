"use client";

import React, { useEffect, useMemo, useState } from "react";

import { paramCase } from "@utils/case";
import { useStore } from "@store/index";

import type { Theme } from "@themes/index";

interface ThemeView extends Theme {
    vh: string;
    vw: string;
}

export const ThemeController: React.ComponentType = () => {
    const [viewport, setViewport] = useState<Pick<ThemeView, "vh" | "vw">>({
        vh: "0px",
        vw: "0px",
    });

    const theme = useStore((state) => state.theme);

    const merged: Pick<ThemeView, keyof ThemeView> = useMemo(
        () => ({
            ...theme,
            ...viewport,
        }),
        [theme, viewport]
    );

    const variables = useMemo(
        () =>
            Object.keys(merged).map(
                (variable) =>
                    `--${paramCase(variable)}: ${String(
                        merged[variable as keyof ThemeView]
                    )}`
            ),
        [merged]
    );

    useEffect(() => {
        const handleResize = (): void => {
            setViewport({
                vh: `${window.innerHeight / 100}px`,
                vw: `${window.innerWidth / 100}px`,
            });
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <style>
            {`
                :root {
                    ${variables.join(";\n")}
                }
            `}
        </style>
    );
};
