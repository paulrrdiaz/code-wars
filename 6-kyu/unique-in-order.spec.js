import { uniqueInOrder } from "./unique-in-order";

describe("Unique In Order", () => {
  it("should pass", () => {
    expect(uniqueInOrder("AAAABBBCCDAABBB")).toEqual(["A", "B", "C", "D", "A", "B"]);
    expect(uniqueInOrder("ABBCcAD")).toEqual(["A", "B", "C", "c", "A", "D"]);
    expect(uniqueInOrder([1, 2, 2, 3, 3])).toEqual([1, 2, 3]);
  });
});
