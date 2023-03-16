
import type { Theme } from ".";

const theme: Theme = {
    background: "var(--brutal-orange)",
    backgroundContrast: "var(--brutal-white)",
    blobColor: [0.2, -0.3, -0.5],
    colorBorder: "var(--brutal-black)",
    colorFont: "var(--brutal-black)",
    colorFontContrast: "var(--brutal-orange)",
    colorPrimary: "var(--brutal-orange)",
    colorSecondary: "var(--brutal-red)",
    foreground: "var(--brutal-white)"
};

export const orange: Pick<Theme, keyof typeof theme> = theme;
