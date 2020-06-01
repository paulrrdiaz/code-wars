import { htmlElements } from "./html-elements";

describe("HTML Elements", () => {
  it("should pass", () => {
    expect(htmlElements("<div><b><p>hello world</p></b></div>")).toBe(true);
    expect(htmlElements("<div><i>hello</i>world</b>")).toBe("div");
  });
});
