const waveSort = array => {
  for (let i = 1; i < array.length; i++) {
    const prev = array[i - 1];
    const current = array[i];
    const validation = i % 2 ? prev <= current : prev >= current;

    if (validation) {
      array[i - 1] = current;
      array[i] = prev;
    }
  }

  return array;
};

export { waveSort };
