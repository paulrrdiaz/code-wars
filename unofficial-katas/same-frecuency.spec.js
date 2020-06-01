import { sameFrequency } from "./same-frecuency";

describe("Same frecuency", () => {
  it("should pass", () => {
    expect(sameFrequency(128, 281)).toBe(true);
    expect(sameFrequency(23, 34)).toBe(false);
    expect(sameFrequency(22, 222)).toBe(false);
    expect(sameFrequency(3589578, 5879385)).toBe(true);
  });
});
