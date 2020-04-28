const DIRECTIONS = {
  NORTH: "SOUTH",
  SOUTH: "NORTH",
  WEST: "EAST",
  EAST: "WEST",
};

const dirReduc = array => {
  const path = [];

  for (let i = 0; i < array.length; i++) {
    if (path[path.length - 1] === DIRECTIONS[array[i]]) {
      path.pop();
    } else {
      path.push(array[i]);
    }
  }

  return path;
};

export { dirReduc };
