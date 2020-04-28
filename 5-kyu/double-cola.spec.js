import { whoIsNext } from "./double-cola";

describe("Disemvowel Trolls", () => {
  const names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"];
  const moreNames = [
    "Togusa",
    "Rajesh",
    "Proto",
    "Sheldon",
    "Motoko Kusanagi",
    "Penny",
    "Azuma",
    "Pazu",
    "Batou",
    "Leonard",
    "Yano",
  ];

  it("should pass", () => {
    // expect(whoIsNext(names, 534)).toBe("Howard");
    // expect(whoIsNext(names, 10)).toBe("Penny");
    // expect(whoIsNext(moreNames, 18)).toBe("Sheldon");
    // expect(whoIsNext(names, 52)).toBe("Penny");
    // expect(whoIsNext(names, 13)).toBe("Rajesh");
    // expect(whoIsNext(names, 15)).toBe("Howard");
    // expect(whoIsNext(names, 16)).toBe("Sheldon");
    // expect(whoIsNext(names, 2)).toBe("Leonard");
    // expect(whoIsNext(names, 1)).toBe("Sheldon");
    // expect(whoIsNext(names, 7230702951)).toBe("Leonard");
  });
});
