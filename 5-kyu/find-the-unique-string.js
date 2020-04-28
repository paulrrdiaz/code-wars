const getValue = word => [...new Set(word.toLowerCase())].sort().join("");

const findUniq = array => {
  for (let j = 1; j < array.length - 1; j++) {
    if (getValue(array[j - 1]) !== getValue(array[j])) {
      if (getValue(array[j + 1]) !== getValue(array[j])) return array[j];
      return array[j - 1];
    }
  }

  return array[array.length - 1];
};

export { findUniq };
