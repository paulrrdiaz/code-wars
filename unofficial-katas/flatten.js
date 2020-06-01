const flatten = array => {
  const flattenHelper = array => {
    let acc = "";
    for (let i = 0; i < array.length; i++) {
      const element = typeof array[i] === "number" ? array[i] : flattenHelper(array[i]);
      acc += element;
    }
    return acc;
  };

  return Array.from(flattenHelper(array)).map(Number);
};

export { flatten };
