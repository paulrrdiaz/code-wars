import { disemvowel } from "./disemvowel-trolls";

describe("Disemvowel Trolls", () => {
  it("should pass", () => {
    expect(disemvowel("This website is for losers LOL!")).toBe("Ths wbst s fr lsrs LL!");
  });
});
