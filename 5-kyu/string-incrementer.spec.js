import { incrementString } from "./string-incrementer";

describe("String incrementer", () => {
  it("should pass", () => {
    expect(incrementString("foobar000")).toBe("foobar001");
    expect(incrementString("foo")).toBe("foo1");
    expect(incrementString("foobar99")).toBe("foobar100");
  });
});
