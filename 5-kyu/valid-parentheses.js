// too much complexity
const deleteByRegex = regex => string => string.replace(regex, "");
const validParenthesesWithComplexity = string => {
  const regex = new RegExp(/\(\)/, "g");
  const deleteByRegexParentheses = deleteByRegex(regex);
  let parsed = string;

  do {
    parsed = deleteByRegexParentheses(parsed);
  } while (parsed.length > 1);

  return parsed.length === 0;
};

const validParentheses = string => {
  let counter = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") counter++;
    if (string[i] === ")") counter--;
    if (counter < 0) return false;
  }

  return counter === 0;
};

const pair = { ")": "(" };

const validParenthesesFine = string => {
  const accumulator = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      accumulator.push("(");
    } else if (pair[string[i]] === accumulator[accumulator.length - 1]) {
      accumulator.pop();
    } else {
      return false;
    }
  }

  return accumulator.length === 0;
};

export { validParentheses };
