import { letterFrequency } from "./character-frequency";

describe("Character frequency", () => {
  it("should pass", () => {
    expect(letterFrequency("wklv lv d vhfuhw phvvdjh")).toEqual([
      ["v", 5],
      ["h", 4],
      ["d", 2],
      ["l", 2],
      ["w", 2],
      ["f", 1],
      ["j", 1],
      ["k", 1],
      ["p", 1],
      ["u", 1],
    ]);
    expect(
      letterFrequency("As long as I'm learning something, I figure I'm OK - it's a decent day."),
    ).toEqual([
      ["i", 7],
      ["a", 5],
      ["e", 5],
      ["n", 5],
      ["g", 4],
      ["s", 4],
      ["m", 3],
      ["o", 3],
      ["t", 3],
      ["d", 2],
      ["l", 2],
      ["r", 2],
      ["c", 1],
      ["f", 1],
      ["h", 1],
      ["k", 1],
      ["u", 1],
      ["y", 1],
    ]);
  });
});
