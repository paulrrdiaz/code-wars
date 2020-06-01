import { simplePassword } from "./simple-password";

describe("Simple Password", () => {
  it("should pass", () => {
    expect(simplePassword("apple!M7")).toBe("true");
    expect(simplePassword("aaaaaa")).toBe("false");
  });
});
