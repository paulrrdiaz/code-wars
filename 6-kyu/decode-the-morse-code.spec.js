import { decodeMorse } from "./decode-the-morse-code";

describe("Decode the Morse code", () => {
  it("should pass", () => {
    const heyJude = ".... . -.--   .--- ..- -.. .";
    const sos = "...---...";
    const sosLarge =
      "...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-";
    expect(decodeMorse(sos)).toBe("SOS");
    expect(decodeMorse(sosLarge)).toBe("SOS! THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");
    expect(decodeMorse(heyJude)).toBe("HEY JUDE");
  });
});
