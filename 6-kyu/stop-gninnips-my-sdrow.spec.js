import { spinWords } from "./stop-gninnips-my-sdrow";

describe("Stop gninnipS My sdroW!", () => {
  it("should pass", () => {
    expect(spinWords("Welcome")).toBe("emocleW");
    expect(spinWords("Hey fellow warriors")).toBe("Hey wollef sroirraw");
    expect(spinWords("Just kidding there is still one more")).toBe(
      "Just gniddik ereht is llits one more",
    );
  });
});
