const isAnagram = (word, acc) => {
  for (let i = 0; i < word.length; i++) {
    if (!acc[word[i]]) return false;
    else acc[word[i]]--;
  }

  return true;
};

const anagrams = (word, options) => {
  const acc = {};

  for (let i = 0; i < word.length; i++) {
    acc[word[i]] = (acc[word[i]] || 0) + 1;
  }

  const result = options.filter(option => {
    if (option.length !== word.length) return false;

    return isAnagram(option, { ...acc });
  });

  return result;
};

export { anagrams };
