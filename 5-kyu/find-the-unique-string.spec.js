import { findUniq } from "./find-the-unique-string";

describe("Find the unique string", () => {
  it("should pass", () => {
    expect(findUniq(["a", "b", "b", "b"])).toBe("a");
    expect(findUniq(["b", "a", "b", "b"])).toBe("a");
    expect(findUniq(["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"])).toBe("BbBb");
    expect(findUniq(["abc", "acb", "bac", "foo", "bca", "cab", "cba"])).toBe("foo");
    expect(findUniq(["Tom Marvolo Riddle", "I am Lord Voldemort", "Harry Potter"])).toBe(
      "Harry Potter",
    );
  });
});
