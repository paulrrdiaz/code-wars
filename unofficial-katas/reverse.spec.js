import { reverse } from "./reverse";

describe("Reverse", () => {
  it("should pass", () => {
    expect(reverse("awesome")).toBe("emosewa");
    expect(reverse("rithmschool")).toBe("loohcsmhtir");
  });
});
