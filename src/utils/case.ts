
// eslint-disable-next-line max-len -- Its fine
export const paramCase = (string: string): string => string.split(/(?=[A-Z])/gu).map((word) => `${ word.charAt(0).toLocaleLowerCase() }${ word.slice(1) }`).join("-");
