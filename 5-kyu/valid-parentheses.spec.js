import { validParentheses } from "./valid-parentheses";

describe("", () => {
  it("should pass", () => {
    expect(validParentheses("()")).toBe(true);
    expect(validParentheses("()(")).toBe(false);
    expect(validParentheses("(")).toBe(false);
    expect(validParentheses("(())((()())())")).toBe(true);
  });
});
