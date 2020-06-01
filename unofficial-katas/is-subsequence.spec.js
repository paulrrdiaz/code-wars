import { isSubsequence } from "./is-subsequence";

describe("Is Subsequence", () => {
  it("should pass", () => {
    expect(isSubsequence("hello", "hello world")).toBe(true);
    expect(isSubsequence("sing", "sting")).toBe(true);
    expect(isSubsequence("abc", "abracadabra")).toBe(true);
    expect(isSubsequence("abc", "acb")).toBe(false);
  });
});
