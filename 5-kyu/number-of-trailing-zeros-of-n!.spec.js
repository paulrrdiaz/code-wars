import { zeros } from "./number-of-trailing-zeros-of-n!";

describe("happy birthday, darling", () => {
  it("should pass", () => {
    expect(zeros(0)).toBe(0);
    expect(zeros(5)).toBe(1);
    expect(zeros(6)).toBe(1);
    expect(zeros(30)).toBe(7);
  });
});
