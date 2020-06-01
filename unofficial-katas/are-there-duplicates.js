const areThereDuplicatesFrecuencyCounter = (...args) => {
  const acc = {};

  for (let i = 0; i < args.length; i++) {
    if (acc[args[i]]) return true;
    acc[args[i]] = true;
  }

  return false;
};

const areThereDuplicates = (...args) => {
  const sorted = Array.from(args).sort((a, b) => {
    const elem1 = typeof a === "number" ? a : a.charCodeAt(0);
    const elem2 = typeof b === "number" ? b : b.charCodeAt(0);

    return elem1 - elem2;
  });

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i - 1] === sorted[i]) return true;
  }

  return false;
};

export { areThereDuplicates };
