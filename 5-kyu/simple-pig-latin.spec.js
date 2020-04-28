import { pigIt } from "./simple-pig-latin";

describe("Simple Pig Latin", () => {
  it("should pass", () => {
    expect(pigIt("Pig latin is cool")).toBe("igPay atinlay siay oolcay");
    expect(pigIt("This is my string")).toBe("hisTay siay ymay tringsay");
  });
});
