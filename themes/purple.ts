
import type { Theme } from ".";

const theme: Theme = {
    background: "var(--brutal-purple)",
    backgroundContrast: "var(--brutal-white)",
    blobColor: [-0.6, -0.4, 0.6],
    colorBorder: "var(--brutal-black)",
    colorFont: "var(--brutal-black)",
    colorFontContrast: "var(--brutal-purple)",
    colorPrimary: "var(--brutal-orange)",
    colorSecondary: "var(--brutal-red)",
    foreground: "var(--brutal-white)"
};

export const purple: Pick<Theme, keyof typeof theme> = theme;
