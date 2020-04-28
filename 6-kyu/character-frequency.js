const letterFrequency = string => {
  const regex = /[a-z]/;
  const acc = {};
  const result = [];

  for (let i = 0; i < string.length; i++) {
    const word = string[i].toLowerCase();
    if (regex.test(word)) {
      acc[word] = (acc[word] || 0) + 1;
    }
  }

  for (const letter in acc) {
    const frequency = acc[letter];
    result.push([letter, frequency]);
  }

  const sorted = result.sort((a, b) => {
    if (b[1] === a[1]) {
      return a[0].charCodeAt(0) - b[0].charCodeAt(0);
    }
    return b[1] - a[1];
  });

  return sorted;
};

export { letterFrequency };
