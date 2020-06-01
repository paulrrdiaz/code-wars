const nestedEvenSum = object => {
  let acc = 0;
  const nestedEvenSumHelper = object => {
    for (const key in object) {
      if (typeof object[key] === "number" && object[key] % 2 === 0) {
        acc += object[key];
      } else if (typeof object[key] === "object") {
        nestedEvenSumHelper(object[key]);
      }
    }
  };

  nestedEvenSumHelper(object);

  return acc;
};

export { nestedEvenSum };
