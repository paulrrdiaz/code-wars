const wordSplit = (input, coincidences = 2) => {
  let string = input[0];
  const array = input[1].split(",");

  const collector = {};

  for (let i = 0; i < array.length; i++) {
    const element = array[i].trim();

    if (string.includes(element)) {
      const index = string.indexOf(element);
      collector[index] = element;
    }
  }

  const words = Object.values(collector);

  return words.length === coincidences ? words.join() : "not possible";
};

export { wordSplit };
