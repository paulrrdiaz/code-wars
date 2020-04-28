const likes = array => {
  const length = array.length;
  const suffix = ` ${length > 1 ? "like" : "likes"} this`;
  let result = "";

  if (!length) return "no one" + suffix;

  for (let i = 0; i < length; i++) {
    const separator = i > 0 ? (i === length - 1 ? " and " : i === length - 2 ? ", " : "") : " ";

    if (length > 3) {
      result = `${array[0]}, ${array[1]} and ${length - 2} others`;
    } else {
      result = `${result}${separator}${array[i]}`;
    }
  }

  return result.trim() + suffix;
};

export { likes };
