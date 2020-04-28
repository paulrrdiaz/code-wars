const getIndex = letter => letter.toLowerCase().charCodeAt(0) - "a".charCodeAt(0);

const firstNonRepeatingLetterOnlyLetters = string => {
  const array = Array(26).fill(0);

  for (let i = 0; i < string.length; i++) {
    const index = getIndex(string[i]);
    array[index]++;
  }

  for (let i = 0; i < string.length; i++) {
    const index = getIndex(string[i]);
    if (array[index] === 1) return string[i];
  }

  return "";
};

const firstNonRepeatingLetter = string => {
  const accumulator = {};

  for (let i = 0; i < string.length; i++) {
    const letter = string[i].toLowerCase();
    accumulator[letter] = (accumulator[letter] || 0) + 1;
  }

  for (let i = 0; i < string.length; i++) {
    const letter = string[i].toLowerCase();
    if (accumulator[letter] === 1) return string[i];
  }

  return "";
};

export { firstNonRepeatingLetter };
