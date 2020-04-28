const compWithComplexity = (array1, array2) => {
  const isValid = array1 && array2 && array1.length === array2.length;
  if (!isValid) return false;

  for (let i = 0; i < array1.length; i++) {
    const index = array2.indexOf(array1[i] ** 2);
    if (index === -1) return false;
    array2.splice(index, 1);
  }

  return true;
};

const comp = (array1, array2) => {
  const isValid = array1 && array2 && array1.length === array2.length;
  if (!isValid) return false;

  const obj1 = {};
  const obj2 = {};

  for (let i = 0; i < array1.length; i++) {
    obj1[array1[i]] = (obj1[array1[i]] || 0) + 1;
    obj2[array2[i]] = (obj2[array2[i]] || 0) + 1;
  }

  for (let i = 0; i < array1.length; i++) {
    if (obj1[array1[i]] !== obj2[array1[i] ** 2]) return false;
  }

  return true;
};

export { comp };
