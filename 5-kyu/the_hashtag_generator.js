const capitalize = string => `${string.slice(0, 1).toUpperCase()}${string.slice(1)}`;

const generateHashtagNormal = string => {
  if (string.trim() === 0) return false;

  const capitalized = string.replace(/(\w+)/g, str => capitalize(str));
  const trimmed = capitalized.replace(/\s/g, "");

  if (trimmed.length > 139) return false;

  return `#${trimmed}`;
};

const generateHashtag = string => {
  const isEmpty = string.trim() === "";
  if (isEmpty) return false;

  const capitalized = string.split(" ").map(capitalize).join("");
  const isMoreThan139 = capitalized.length > 139;

  return isMoreThan139 ? false : `#${capitalized}`;
};

export { generateHashtag };
