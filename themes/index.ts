
import { yellow } from "./yellow";

export interface Theme{
    background: string;
    backgroundContrast: string;
    blobColor: number[];
    colorBorder: string;
    colorPrimary: string;
    colorSecondary: string;
    colorFont: string;
    colorFontContrast: string;
    foreground: string;
}

export const defaultTheme: Theme = yellow;

export const themes = {
    yellow
};

export type ThemeKey = keyof typeof themes;
