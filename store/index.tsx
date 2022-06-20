
import create from "zustand";

import {
    defaultTheme,
    themes
} from "../themes";

import type {
    Theme,
    ThemeKey
} from "../themes";

export interface AppState{
    theme: Theme;
    themeKey: ThemeKey;
    setTheme: (theme: ThemeKey) => void;
}

export const useStore = create<AppState>()((set) => ({
    setTheme: (key: ThemeKey): void => {
        set(() => ({
            theme: themes[key],
            themeKey: key
        }));
    },
    theme: defaultTheme,
    themeKey: "yellow"
}));
