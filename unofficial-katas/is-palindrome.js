const isPalindrome = string => {
  const length = Math.floor(string.length / 2);

  for (let i = 0; i <= length; i++) {
    if (string[i] !== string[string.length - (i + 1)]) return false;
  }

  return true;
};

export { isPalindrome };
