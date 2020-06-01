import { differentCases } from "./different-cases";

describe("Different Cases", () => {
  it("should pass", () => {
    expect(differentCases("Daniel LikeS-coding")).toBe("DanielLikesCoding");
  });
});
