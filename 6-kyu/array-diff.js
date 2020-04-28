const arrayDiff = (array, diff) => {
  if (diff.length === 0) return array;

  return array.filter(number => !diff.some(n => n === number));
};

export { arrayDiff };
