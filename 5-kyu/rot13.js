const transform = letter => {
  const code = letter.charCodeAt(0);
  const isUpperCase = code >= 97 && code <= 122;

  if (isUpperCase) {
    const newCode = code + 13;
    const diff = newCode - 122;
    return diff > 0 ? diff + 96 : newCode;
  }

  const newCode = code + 13;
  const diff = newCode - 90;
  return diff > 0 ? diff + 64 : newCode;
};

const rot13 = string => string.replace(/[a-z]/gi, letter => String.fromCharCode(transform(letter)));

export { rot13 };
