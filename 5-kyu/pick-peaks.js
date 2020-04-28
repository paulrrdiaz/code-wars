const pickPeaks = array => {
  const result = {
    pos: [],
    peaks: [],
  };

  for (let i = 0; i < array.length; i++) {
    const last = array[i - 1] || array[i] - 1;
    const current = array[i];
    const next = array[i + 1] || array[i] + 1;
    const notFirstOrLast = i !== 0 && i !== array.length - 1;
    const validations = current > next;

    if (options) {
      console.log("test");
      result.pos = [...result.pos, i];
      result.peaks = [...result.peaks, current];
    }
  }
  console.log(result);

  return result;
};

export { pickPeaks };
