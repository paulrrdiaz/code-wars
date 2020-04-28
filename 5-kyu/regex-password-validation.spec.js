import { validate } from "./regex-password-validation";

describe("Regex Password Validation", () => {
  it("should pass", () => {
    expect(validate("djI38D55")).toBe(true);
    expect(validate("a2.d412")).toBe(false);
    expect(validate("JHD5FJ53")).toBe(false);
    expect(validate("!fdjn345")).toBe(false);
    expect(validate("jfkdfj3j")).toBe(false);
    expect(validate("fjd3IR9.;")).toBe(false);
    expect(validate("fjd3  IR9")).toBe(false);
  });
});
