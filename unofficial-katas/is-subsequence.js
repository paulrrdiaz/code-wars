const isSubsequence = (word, string) => {
  let index = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === word[index]) {
      index++;
    }

    if (index === word.length) return true;
  }

  return false;
};

export { isSubsequence };
