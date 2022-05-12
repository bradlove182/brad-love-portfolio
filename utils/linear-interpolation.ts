
export const lerp = (
    value: number,
    startValueTo: number,
    endValueTo: number
): number => startValueTo + value * (endValueTo - startValueTo);

/* eslint-disable no-bitwise, @typescript-eslint/no-magic-numbers -- Faster lookup */
export const colourLerp = (
    value: number,
    startColour: string,
    endColour: string
): string => {

    const ah = Number.parseInt(startColour.replaceAll("#", ""), 16);
    const ar = ah >> 16;
    const ag = ah >> 8 & 0xFF;
    const ab = ah & 0xFF;
    const bh = Number.parseInt(endColour.replaceAll("#", ""), 16);
    const br = bh >> 16;
    const bg = bh >> 8 & 0xFF;
    const bb = bh & 0xFF;
    const rr = ar + value * (br - ar);
    const rg = ag + value * (bg - ag);
    const rb = ab + value * (bb - ab);

    return `#${ Math.trunc((1 << 24) + (rr << 16) + (rg << 8) + rb).toString(16).slice(1) }`;

};
/* eslint-enable no-bitwise, @typescript-eslint/no-magic-numbers */
