import React, { useCallback } from "react";

import { themes } from "../../themes";

import type { ThemeKey } from "../../themes";

export interface ThemePickerProps{
    currentTheme: ThemeKey;
    onThemeChange: (key: ThemeKey) => void;
}

export const ThemePicker: React.ComponentType<ThemePickerProps> = ({
    currentTheme,
    onThemeChange
}) => {

    const changeTheme = useCallback((key: ThemeKey) => () => {
        onThemeChange(key);
    }, []);

    return (
        <div style={ {
            position: "relative",
            zIndex: 1000
        } }
        >
            {
                Object.keys(themes).map((key) => (
                    <div
                        key={ key } onClick={ changeTheme(key as ThemeKey) } style={ {
                            color: currentTheme === key ? "red" : "black"
                        } }
                    >
                        { key }
                    </div>
                ))
            }
        </div>
    );

};

