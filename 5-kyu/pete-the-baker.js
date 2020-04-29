const cakes = (recipe, available) => {
  const recipeKeys = Object.keys(recipe);
  const availableKeys = Object.keys(available);
  let minimalCakes = Infinity;

  if (recipeKeys.length > availableKeys.length) return 0;

  for (let i = 0; i < recipeKeys.length; i++) {
    const recipeIngredient = recipe[recipeKeys[i]];
    const availableIngredient = available[recipeKeys[i]];

    if (recipeIngredient > availableIngredient) return 0;
    minimalCakes = Math.min(minimalCakes, Math.floor(availableIngredient / recipeIngredient));
  }

  return minimalCakes;
};

export { cakes };
