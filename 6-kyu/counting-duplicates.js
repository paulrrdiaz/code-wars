const duplicateCount = string => {
  const accumulator = {};
  let counter = 0;

  for (let i = 0; i < string.length; i++) {
    const item = string[i].toLowerCase();
    accumulator[item] = (accumulator[item] || 0) + 1;

    if (accumulator[item] === 2) counter++;
  }

  return counter;
};

export { duplicateCount };
