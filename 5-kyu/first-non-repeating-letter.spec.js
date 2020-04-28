import { firstNonRepeatingLetter } from "./first-non-repeating-letter";

describe("First non-repeating character", () => {
  it("should pass", () => {
    expect(firstNonRepeatingLetter("a")).toBe("a");
    expect(firstNonRepeatingLetter("stress")).toBe("t");
    expect(firstNonRepeatingLetter("moonmen")).toBe("e");
  });
});
