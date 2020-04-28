const computed = function (value, cb) {
  if (!cb) return value;
  if (cb.split(/[+\-*\/]/g).length > 1) return Math.floor(eval(`${value}${cb}`));

  return `${value}${cb}`;
};

const zero = cb => computed("0", cb);
const one = cb => computed("1", cb);
const two = cb => computed("2", cb);
const three = cb => computed("3", cb);
const four = cb => computed("4", cb);
const five = cb => computed("5", cb);
const six = cb => computed("6", cb);
const seven = cb => computed("7", cb);
const eight = cb => computed("8", cb);
const nine = cb => computed("9", cb);

const plus = cb => computed("+", cb);
const minus = cb => computed("-", cb);
const times = cb => computed("*", cb);
const dividedBy = cb => computed("/", cb);

export {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  minus,
  times,
  dividedBy,
};
