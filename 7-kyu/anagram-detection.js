const isAnagram = (test, original) => {
  const isValid = test.length === original.length;

  if (!isValid) return false;

  const lookup = {};

  for (let i = 0; i < test.length; i++) {
    const letter = test[i].toLowerCase();
    lookup[letter] = (lookup[letter] || 0) + 1;
  }

  for (let i = 0; i < original.length; i++) {
    const letter = original[i].toLowerCase();
    if (!lookup[letter]) return false;
    else lookup[letter]--;
  }

  return true;
};

export { isAnagram };
