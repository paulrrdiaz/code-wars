import { cakes } from "./pete-the-baker";

describe("Pete, the baker", () => {
  it("should pass", () => {
    const recipe1 = { flour: 500, sugar: 200, eggs: 1 };
    const available1 = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
    const recipe2 = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
    const available2 = { sugar: 500, flour: 2000, milk: 2000 };
    expect(cakes(recipe2, available2)).toBe(0);
    expect(cakes(recipe1, available1)).toBe(2);
  });
});
