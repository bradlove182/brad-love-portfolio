
import type { Theme } from ".";

const theme: Theme = {
    background: "var(--brutal-green)",
    backgroundContrast: "var(--brutal-white)",
    blobColor: [-0.5, -0.2, 0.2],
    colorBorder: "var(--brutal-black)",
    colorFont: "var(--brutal-black)",
    colorFontContrast: "var(--brutal-green)",
    colorPrimary: "var(--brutal-orange)",
    colorSecondary: "var(--brutal-red)",
    foreground: "var(--brutal-white)"
};

export const green: Pick<Theme, keyof typeof theme> = theme;
