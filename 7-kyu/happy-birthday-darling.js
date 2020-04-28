const womensAge = number => {
  const fakeAge = number % 2 ? 21 : 20;
  const base = Math.floor(number / 2);

  return `${number}? That's just ${fakeAge}, in base ${base}!`;
};

export { womensAge };
