
import { yellow } from "./yellow";
import { green } from "./green";

export interface Theme{
    background: string;
    backgroundContrast: string;
    blobColor: [r: number, g: number, b: number];
    colorBorder: string;
    colorPrimary: string;
    colorSecondary: string;
    colorFont: string;
    colorFontContrast: string;
    foreground: string;
}

export const defaultTheme: Theme = yellow;

export const themes = {
    green,
    yellow
};

export type ThemeKey = keyof typeof themes;
