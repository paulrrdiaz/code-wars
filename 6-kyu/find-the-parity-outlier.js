const isEven = number => number % 2 === 0 || number === 0;

const findOutlier = array => {
  const evenNumbers = [];
  const oddNumbers = [];
  for (let i = 0; i < array.length; i++) {
    isEven(array[i]) ? evenNumbers.push(array[i]) : oddNumbers.push(array[i]);
    const canValidate = evenNumbers.length > 0 && oddNumbers.length > 0;

    if (canValidate && evenNumbers.length > oddNumbers.length) return oddNumbers[0];
    if (canValidate && oddNumbers.length > evenNumbers.length) return evenNumbers[0];
  }
};

export { findOutlier };
