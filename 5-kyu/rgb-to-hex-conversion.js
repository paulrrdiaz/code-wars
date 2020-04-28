const toHex = number =>
  Number(number > 255 ? 255 : number < 0 ? 0 : number)
    .toString(16)
    .toUpperCase();

const rgb = (...args) =>
  args
    .map(arg => {
      const hex = toHex(arg);
      return hex.length > 1 ? hex : `0${hex}`;
    })
    .join("");

export { rgb };
