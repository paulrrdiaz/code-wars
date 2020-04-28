import { duplicateCount } from "./counting-duplicates";

describe("Counting Duplicates", () => {
  it("should pass", () => {
    expect(duplicateCount("Indivisibilities")).toBe(2);
    expect(duplicateCount("aabBcde")).toBe(2);
    expect(duplicateCount("")).toBe(0);
    expect(duplicateCount("abcde")).toBe(0);
  });
});
