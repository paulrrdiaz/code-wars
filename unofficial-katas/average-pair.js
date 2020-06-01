const averagePair = (array, number) => {
  const sum = number * 2;
  const acc = {};

  for (let i = 0; i < array.length; i++) {
    acc[array[i]] = (acc[array[i]] || 0) + 1;
  }

  for (let i = 0; i < array.length; i++) {
    if (acc[sum - array[i]]) return true;
  }

  return false;
};

export { averagePair };
