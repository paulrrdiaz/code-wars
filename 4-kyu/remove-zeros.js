const removeZerosFail = array => {
  const matches = array.join("-").match(/\b[0]|("0")\b/g).length;
  const filtered = array.filter(number => Number(number) !== 0);

  return [...filtered, ...Array(matches).fill(0)];
};

const isZero = number =>
  (typeof number === "number" || typeof number === "string") && Number(number) === 0;
const removeZeros = array => {
  const zeros = [];
  const nonZeros = [];

  for (let i = 0; i < array.length; i++) {
    isZero(array[i]) ? (zeros[zeros.length] = array[i]) : (nonZeros[nonZeros.length] = array[i]);
  }

  return [...nonZeros, ...zeros];
};

export { removeZeros };

/*

This also works for "Moving Zeros To The End" kata

*/
