const TAGS = {
  "</div>": "<div>",
  "</p>": "<p>",
  "</b>": "<b>",
  "</i>": "<i>",
  "</em>": "<em>",
};

const htmlElements = string => {
  const regex = /<(\/)?.*?>/g;
  const matches = string.match(regex);
  const acc = [];

  for (let i = 0; i < matches.length; i++) {
    const element = matches[i];
    const isOpening =
      element === "<div>" ||
      element === "<p>" ||
      element === "<b>" ||
      element === "<i>" ||
      element === "<em>";
    const isClosing = TAGS[element] === acc[acc.length - 1];

    if (isOpening) {
      acc.push(element);
    } else if (isClosing) {
      acc.pop();
    }
  }

  return acc.length === 0 ? true : acc[0].replace(/^<|>$/g, "");
};

export { htmlElements };
