import { findOutlier } from "./find-the-parity-outlier";

describe("Find The Parity Outlier", () => {
  it("should pass", () => {
    expect(findOutlier([2, 6, 8, 10, 3])).toBe(3);
    expect(findOutlier([0, 1, 2])).toBe(1);
    expect(findOutlier([1, 2, 3])).toBe(2);
  });
});
