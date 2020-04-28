const nearestPowTo = pow => (number, limit) => {
  let inverted = Math.round(Math.log(number) / Math.log(pow));
  let result = Math.pow(2, inverted);
  console.log(inverted, "inverted");
  console.log(result, "result");

  if (result > Math.round(number)) {
    console.log(Math.round(number), "test");

    inverted = inverted - 1;
    result = Math.pow(2, inverted);
  }

  return [result, inverted];
};
const nearestPowToTwo = nearestPowTo(2);

const whoIsNext = (array, position) => {
  console.log("------");
  const index = position - 1;
  if (position < 6) return array[index];

  const length = array.length;
  const [result, nearestPow] = nearestPowToTwo(index / length, position);
  console.log(index, "index");
  console.log(length, "length");
  console.log(nearestPow, "nearestPow");
  console.log(result, "result");

  // const nearestPowDown = nearestPow * 5 <= position ? nearestPow : nearestPow - 1;
  // console.log(nearestPowDown, "nearestPowDown");

  const passedIndex = (result - 1) * length;
  console.log(passedIndex, "passedIndex");
  const start = index - passedIndex;
  console.log(start, "start");
  console.log(Math.floor(start / nearestPow), "result");
  console.log(Math.floor(start / nearestPow) % length);

  return array[length - (Math.floor(start / nearestPow) % length)] || array[0];
};

export { whoIsNext };
