import { maxSubarraySum } from "./max-subarray-sum";

describe("Sliding window - Max subarray sum", () => {
  it("should pass", () => {
    expect(maxSubarraySum([100, 200, 300, 400], 2)).toBe(700);
    expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
    expect(maxSubarraySum([2, 3], 3)).toBe(null);
  });
});
