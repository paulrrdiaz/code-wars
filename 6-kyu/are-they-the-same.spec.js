import { comp } from "./are-they-the-same";

describe("Are they the 'same'?", () => {
  it("should pass", () => {
    const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
    const a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
    expect(comp(a1, a2)).toBe(true);
    const b1 = [121, 144, 19, 161, 19, 144, 19, 11];
    const b2 = [121, 14641, 20736, 36100, 25921, 361, 20736, 361];
    expect(comp(b1, b2)).toBe(false);
    const c1 = [2, 2, 3];
    const c2 = [4, 9, 9];
    expect(comp(c1, c2)).toBe(false);
  });
});
