import React, {
    useCallback,
    useEffect,
    useState
} from "react";

import { themes } from "../../themes";

import style from "./index.module.scss";

import type { ThemeKey } from "../../themes";


export interface ThemePickerProps{
    currentTheme: ThemeKey;
    onThemeChange: (key: ThemeKey) => void;
}

export const ThemePicker: React.ComponentType<ThemePickerProps> = ({
    currentTheme,
    onThemeChange
}) => {

    const [auto, setAuto] = useState<boolean>(true);

    const handleChangeAuto = useCallback(() => {

        setAuto((previous) => !previous);

    }, []);

    const changeTheme = useCallback((key: ThemeKey) => () => {
        onThemeChange(key);
        setAuto(false);
    }, []);

    useEffect(() => {

        const themeKeys = Object.keys(themes) as ThemeKey[];
        const currentIndex = themeKeys.indexOf(currentTheme);
        const timer = setInterval(() => {

            if(auto){

                const nextIndex = currentIndex + 1;
                onThemeChange(nextIndex >= themeKeys.length ? themeKeys[0] : themeKeys[nextIndex]);

            }

        }, 10_000);

        return () => {
            clearInterval(timer);
        };

    }, [currentTheme, auto, onThemeChange]);

    return (
        <div className={ style.theme }>
            {
                Object.keys(themes).map((key) => (
                    <span
                        className={ [
                            currentTheme === key ? style.active : undefined,
                            style.blob
                        ].filter(Boolean).join(" ") }
                        key={ key }
                        onClick={ changeTheme(key as ThemeKey) } style={ {
                            backgroundColor: themes[key as ThemeKey].background
                        } }
                    />
                ))
            }
            <span
                className={ [
                    style.text,
                    auto ? style.auto : undefined
                ].filter(Boolean).join(" ") }
                onClick={ handleChangeAuto }
            >
                { "AUTO" }
            </span>
        </div>
    );

};

