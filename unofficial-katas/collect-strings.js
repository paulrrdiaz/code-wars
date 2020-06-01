const collectStrings = object => {
  const acc = [];

  const collectStringsHelper = object => {
    for (const key in object) {
      if (typeof object[key] === "string") acc.push(object[key]);
      else if (typeof object[key] === "object") collectStringsHelper(object[key]);
    }
  };

  collectStringsHelper(object);

  return acc;
};

export { collectStrings };
