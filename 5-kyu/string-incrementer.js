const incrementString = string => {
  const number = string.match(/[0-9]+/g);
  if (!number) return `${string}1`;

  const length = number[0].length;
  const incremented = Number(number[0]) + 1;
  const word = string.slice(0, -length);

  return word + String(incremented).padStart(length, 0);
};

export { incrementString };
