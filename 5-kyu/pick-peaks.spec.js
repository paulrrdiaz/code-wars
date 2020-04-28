import { pickPeaks } from "./pick-peaks";

describe("Pick peaks", () => {
  it("should pass", () => {
    // expect(pickPeaks([1, 2, 3, 6, 4, 1, 2, 3, 2, 1])).toEqual({ pos: [3, 7], peaks: [6, 3] });
    // expect(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3])).toEqual({ pos: [3, 7], peaks: [6, 3] });
    // expect(
    //   pickPeaks([1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3]),
    // ).toEqual({ pos: [2, 7, 14, 20], peaks: [5, 6, 5, 5] });
    // expect(pickPeaks([1, 1, 1, 1])).toEqual({ pos: [], peaks: [] });
  });
});
