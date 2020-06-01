const maxSubarraySum = (array, number) => {
  if (array.length < number) return null;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < number; i++) {
    maxSum += array[i];
  }

  tempSum = maxSum;

  for (let i = number; i < array.length; i++) {
    tempSum = tempSum - array[i - number] + array[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
};

export { maxSubarraySum };
