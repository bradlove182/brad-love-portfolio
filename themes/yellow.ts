
import type { Theme } from ".";

const theme: Theme = {
    background: "var(--brutal-yellow)",
    backgroundContrast: "var(--brutal-white)",
    blobColor: [0.5, -0.1, -0.5],
    colorBorder: "var(--brutal-black)",
    colorFont: "var(--brutal-black)",
    colorFontContrast: "var(--brutal-yellow)",
    colorPrimary: "var(--brutal-orange)",
    colorSecondary: "var(--brutal-red)",
    foreground: "var(--brutal-white)"
};

export const yellow: Pick<Theme, keyof typeof theme> = theme;
