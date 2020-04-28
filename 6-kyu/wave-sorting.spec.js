import { waveSort } from "./wave-sorting";

describe("Wave sorting", () => {
  it("should pass", () => {
    const input1 = [1, 4, 7, 5, 6, 3, 2];
    const input2 = [4, 3, 1, 5];
    const output1 = [4, 1, 7, 5, 6, 2, 3];
    const output2 = [4, 1, 5, 3];
    expect(waveSort(input1)).toEqual(output1);
    expect(waveSort(input2)).toEqual(output2);
  });
});
