import { rot13 } from "./rot13";

describe("Rot13", () => {
  it("should pass", () => {
    expect(rot13("test")).toBe("grfg");
    expect(rot13("Test")).toBe("Grfg");
  });
});
