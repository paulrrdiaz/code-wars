const uniqueInOrderOld = iterable => {
  const acc = iterable[0] ? [iterable[0]] : [];

  for (let i = 1; i < iterable.length; i++) {
    const currernt = iterable[i];
    const prev = iterable[i - 1];

    if (currernt !== prev) acc.push(currernt);
  }

  return acc.length;
};

const uniqueInOrder = iterable => {
  if (iterable.length === 0) return 0;
  const acc = [...iterable];
  let pointerOne = 0;

  for (let pointerTwo = 1; pointerTwo < acc.length; pointerTwo++) {
    if (acc[pointerOne] !== acc[pointerTwo]) {
      pointerOne++;
      acc[pointerOne] = acc[pointerTwo];
    }
  }

  return acc.slice(0, pointerOne + 1);
};

export { uniqueInOrder };
