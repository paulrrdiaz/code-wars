const sameFrequency = (a, b) => {
  const stringA = String(a);
  const stringB = String(b);
  const acc = {};

  for (let i = 0; i < stringA.length; i++) {
    acc[stringA[i]] = (acc[stringA[i]] || 0) + 1;
  }

  for (let i = 0; i < stringB.length; i++) {
    if (!acc[stringB[i]]) return false;
    acc[stringB[i]]--;
  }

  return true;
};

export { sameFrequency };
