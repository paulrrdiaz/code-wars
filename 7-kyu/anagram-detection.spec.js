import { isAnagram } from "./anagram-detection";

describe("Name of the group", () => {
  it("should pass", () => {
    expect(isAnagram("foefet", "toffee")).toBe(true);
    expect(isAnagram("Buckethead", "DeathCubeK")).toBe(true);
    expect(isAnagram("dumble", "bumble")).toBe(false);
  });
});
