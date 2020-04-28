import { anagrams } from "./where-my-anagrams-at";

describe("Where my anagrams at?", () => {
  it("should pass", () => {
    expect(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"])).toEqual(["aabb", "bbaa"]);
    expect(anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"])).toEqual([
      "carer",
      "racer",
    ]);
    expect(anagrams("laser", ["lazing", "lazy", "lacer"])).toEqual([]);
  });
});
