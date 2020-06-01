import { averagePair } from "./average-pair";

describe("Average pair", () => {
  it("should pass", () => {
    expect(averagePair([1, 2, 3], 2.5)).toBe(true);
    expect(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBe(true);
    expect(averagePair([], 4)).toBe(false);
  });
});
