import { arrayDiff } from "./array-diff";

describe("Array diff", () => {
  it("should pass", () => {
    expect(arrayDiff([14, 19, -20, 16, -1, -3, 2, -13, 6, -2], [-1, 6, 2, -2, -20, 16])).toEqual([
      14,
      19,
      -3,
      -13,
    ]);
    expect(arrayDiff([1, 2], [1])).toEqual([2]);
    expect(arrayDiff([1, 2, 2, 2, 3], [2])).toEqual([1, 3]);
    expect(arrayDiff([], [4, 5])).toEqual([]);
    expect(arrayDiff([3, 4], [3])).toEqual([4]);
    expect(arrayDiff([1, 8, 2], [])).toEqual([1, 8, 2]);
  });
});
