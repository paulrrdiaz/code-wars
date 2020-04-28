import { generateHashtag } from "./the_hashtag_generator";

describe("the_hashtag_generator.js", () => {
  it("should pass", () => {
    expect(generateHashtag("do we have A Hashtag")).toBe("#DoWeHaveAHashtag");
    expect(generateHashtag("Codewars")).toBe("#Codewars");
    expect(generateHashtag("a".repeat(139))).toBe("#A" + "a".repeat(138));
  });
});
