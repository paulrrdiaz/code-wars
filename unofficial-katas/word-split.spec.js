import { wordSplit } from "./word-split";

describe("Word Split", () => {
  it("should pass", () => {
    expect(
      wordSplit(["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"]),
    ).toBe("hello,cat");
    expect(
      wordSplit(["myname", "apple,bat,my, name, goodbye,yellow,why"]),
    ).toBe("my,name");
    expect(wordSplit(["hellocat", "apple,bat,goodbye,hello,yellow,why"])).toBe(
      "not possible",
    );
  });
});
