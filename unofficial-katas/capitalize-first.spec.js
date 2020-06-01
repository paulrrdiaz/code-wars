import { capitalizeFirst } from "./capitalize-first";

describe("Capitalize First", () => {
  it("should pass", () => {
    expect(capitalizeFirst(["car", "taco", "banana"])).toEqual(["Car", "Taco", "Banana"]);
  });
});
