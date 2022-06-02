
import type { Theme } from ".";

const theme: Theme = {
    background: "var(--brutal-green)",
    backgroundContrast: "var(--brutal-white)",
    blobColor: [-1, -0.3, 0.4],
    colorBorder: "var(--brutal-black)",
    colorFont: "var(--brutal-black)",
    colorFontContrast: "var(--brutal-green)",
    colorPrimary: "var(--brutal-orange)",
    colorSecondary: "var(--brutal-red)",
    foreground: "var(--brutal-white)"
};

export const green: Pick<Theme, keyof typeof theme> = theme;
