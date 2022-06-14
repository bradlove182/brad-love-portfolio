
import React, {
    useEffect,
    useMemo,
    useState
} from "react";

import { themes } from "../../themes";

import { ThemeContext } from "./context";

import type {
    Theme,
    ThemeKey
} from "../../themes";

const paramCase = (string: string): string => string.split(/(?=[A-Z])/gu).map((word) => `${ word.charAt(0).toLocaleLowerCase() }${ word.slice(1) }`).join("-");

interface ThemeView extends Theme{
    vh: string;
    vw: string;
}

export interface ThemeProviderProps{
    theme: ThemeKey;
    children: React.ReactNode;
}

export const ThemeProvider: React.ComponentType<ThemeProviderProps> = ({
    theme,
    children
}) => {

    const [viewport, setViewport] = useState<Pick<ThemeView, "vh" | "vw">>({
        vh: "0px",
        vw: "0px"
    });

    const currentTheme = useMemo(() => themes[theme], [theme]);

    const merged: Pick<ThemeView, keyof ThemeView> = useMemo(() => ({
        ...currentTheme,
        ...viewport
    }), [
        currentTheme,
        viewport
    ]);

    const variables = useMemo(() => Object.keys(merged).map(
        (variable) => `--${ paramCase(variable) }: ${ String(merged[variable as keyof ThemeView]) }`
    ), [merged]);

    useEffect(() => {

        const handleResize = (): void => {

            setViewport({
                vh: `${ window.innerHeight / 100 }px`,
                vw: `${ window.innerWidth / 100 }px`
            });

        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };

    }, []);

    return (
        <React.Fragment>
            <style>
                {`
                    :root {
                        ${ variables.join(";\n") }
                    }
                `}
            </style>
            <ThemeContext.Provider value={ currentTheme }>
                { children }
            </ThemeContext.Provider>
        </React.Fragment>
    );

};

