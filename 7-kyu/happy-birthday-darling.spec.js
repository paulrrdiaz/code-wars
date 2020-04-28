import { womensAge } from "./happy-birthday-darling";

describe("happy birthday, darling", () => {
  it("should pass", () => {
    expect(womensAge(32)).toBe("32? That's just 20, in base 16!");
    expect(womensAge(39)).toBe("39? That's just 21, in base 19!");
    expect(womensAge(22)).toBe("22? That's just 20, in base 11!");
    expect(womensAge(65)).toBe("65? That's just 21, in base 32!");
    expect(womensAge(83)).toBe("83? That's just 21, in base 41!");
  });
});
