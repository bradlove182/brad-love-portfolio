
import { yellow } from "./yellow";
import { green } from "./green";
import { red } from "./red";
import { blue } from "./blue";
import { orange } from "./orange";
import { purple } from "./purple";

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
    yellow,
    orange,
    red,
    purple,
    blue,
    green
};

export type ThemeKey = keyof typeof themes;
