import { getRating } from "./star-rating";

describe("Star Rating", () => {
  it("should pass", () => {
    expect(getRating(-1)).toBe("empty empty empty empty empty");
    expect(getRating(6)).toBe("full full full full full");
    expect(getRating(1)).toBe("full empty empty empty empty");
    expect(getRating(2.36)).toBe("full full half empty empty");
    expect(getRating(5)).toBe("full full full full full");
    expect(getRating(0.09)).toBe("empty empty empty empty empty");
    expect(getRating(0)).toBe("empty empty empty empty empty");
    expect(getRating(1.1)).toBe("full empty empty empty empty");
    expect(getRating(4.9)).toBe("full full full full full");
  });
});
