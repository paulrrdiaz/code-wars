const scrambleOn2 = (mix, word) => {
  let temp = mix;

  for (let i = 0; i < word.length; i++) {
    const regex = new RegExp(word[i]);
    if (!regex.test(temp)) return false;
    temp = temp.replace(regex, ""); // this is a loop, so O(n^2^) :(
  }

  return true;
};

const scramble = (mix, word) => {
  const accumulator = {};

  for (let i = 0; i < mix.length; i++) {
    const letter = mix[i];
    accumulator[letter] = (accumulator[letter] || 0) + 1;
  }

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (!accumulator[letter]) return false;
    accumulator[letter]--;
  }

  return true;
}; // O(2n) => O(n) :D

export { scramble };
