import { isPalindrome } from "./is-palindrome";

describe("Is Palindrome", () => {
  it("should pass", () => {
    expect(isPalindrome("awesome")).toBe(false);
    expect(isPalindrome("foobar")).toBe(false);
    expect(isPalindrome("amanaplanacanalpanama")).toBe(true);
  });
});
