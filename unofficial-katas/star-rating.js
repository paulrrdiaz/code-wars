const roundHalf = number => Math.round(number * 2) / 2;

const getRating = (num, min = 0, max = 5) => {
  const values = [];
  const number = num >= 0 ? Math.min(max, num) : Math.max(min, num);

  const fulls = Math.floor(number);
  values.push(...Array(fulls).fill("full"));

  const roumdedRest = roundHalf(number - fulls);
  roumdedRest && values.push(roumdedRest === 0.5 ? "half" : "full");

  const empty = max - values.length;
  values.push(...Array(empty).fill("empty"));

  return values.join(" ");
};

export { getRating };
