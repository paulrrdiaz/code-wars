import { uniqueBatches } from "./unique-batches";

describe("Unique batches", () => {
  it("should pass", () => {
    expect(
        uniqueBatches([1, 2, 3]),
    ).toEqual([[1, 2, 3]]);
    expect(
        uniqueBatches([1, 2, 2, 3]),
    ).toEqual([[1, 2, 3], [2]]);
    expect(
        uniqueBatches([1, 2, 2, 2, 3, 3]),
    ).toEqual([[1, 2, 3], [2, 3], [2]]);
  });
});
