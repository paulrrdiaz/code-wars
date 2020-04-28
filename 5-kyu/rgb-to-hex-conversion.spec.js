import { rgb } from "./rgb-to-hex-conversion";

describe("RGB To Hex Conversion", () => {
  it("should pass", () => {
    expect(rgb(255, 255, 255)).toBe("FFFFFF");
    expect(rgb(0, 0, -20)).toBe("000000");
    expect(rgb(173, 255, 47)).toBe("ADFF2F");
    expect(rgb(300, 255, 255)).toBe("FFFFFF");
  });
});
