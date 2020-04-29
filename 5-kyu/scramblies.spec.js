import { scramble } from "./scramblies";

describe("Scramblies", () => {
  it("should pass", () => {
    expect(scramble("scriptjavx", "javascript")).toBe(false);
    expect(scramble("javscripts", "javascript")).toBe(false);
    expect(scramble("katas", "steak")).toBe(false);
    expect(scramble("rkqodlw", "world")).toBe(true);
    expect(scramble("cedewaraaossoqqyt", "codewars")).toBe(true);
    expect(scramble("scriptjava", "javascript")).toBe(true);
    expect(scramble("aabbcamaomsccdd", "commas")).toBe(true);
    expect(scramble("scriptsjava", "javascripts")).toBe(true);
  });
});
