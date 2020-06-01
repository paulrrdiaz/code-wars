import { areThereDuplicates } from "./are-there-duplicates";

describe("Are there duplicates", () => {
  it("should pass", () => {
    expect(areThereDuplicates(1, 2, 3)).toBe(false);
    expect(areThereDuplicates(1, 4, 2, 12, 12, 2, 3, 3)).toBe(true);
    expect(areThereDuplicates("a", "b", "c", "a")).toBe(true);
  });
});
