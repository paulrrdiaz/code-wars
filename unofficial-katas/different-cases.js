const differentCases = string => {
  const regex = /[^a-z]/i;

  return string
    .split(regex)
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
};

export { differentCases };
