const pigItOld = string =>
  string.replace(/[a-z]+/gi, word => word.slice(1, word.length) + word.slice(0, 1) + "ay");

const pigIt = string => string.replace(/(\w)(\w*)/g, "$2$1ay");

export { pigIt };
