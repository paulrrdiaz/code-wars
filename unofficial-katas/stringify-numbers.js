const stringifyNumbers = object => {
  const newObject = Object.assign({}, object);

  const stringifyNumbersHelper = object => {
    for (const key in object) {
      if (typeof object[key] === "number") object[key] = String(object[key]);
      else if (typeof object[key] === "object") stringifyNumbersHelper(object[key]);
    }
  };

  stringifyNumbersHelper(newObject);

  return newObject;
};

export { stringifyNumbers };
