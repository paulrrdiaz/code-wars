import { dirReduc } from "./directions-reduction";

describe("Directions Reduction", () => {
  it("should pass", () => {
    expect(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])).toEqual([
      "WEST",
    ]);
    expect(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])).toEqual([
      "NORTH",
      "WEST",
      "SOUTH",
      "EAST",
    ]);
    expect(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])).toEqual([]);
  });
});
