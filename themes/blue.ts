
import type { Theme } from ".";

const theme: Theme = {
    background: "var(--brutal-blue)",
    backgroundContrast: "var(--brutal-white)",
    blobColor: [-0.5, -0.5, 1],
    colorBorder: "var(--brutal-black)",
    colorFont: "var(--brutal-black)",
    colorFontContrast: "var(--brutal-blue)",
    colorPrimary: "var(--brutal-orange)",
    colorSecondary: "var(--brutal-red)",
    foreground: "var(--brutal-white)"
};

export const blue: Pick<Theme, keyof typeof theme> = theme;
