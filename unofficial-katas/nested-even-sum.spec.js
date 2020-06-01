import { nestedEvenSum } from "./nested-even-sum";

describe("Nested even sum", () => {
  it("should pass", () => {
    expect(
      nestedEvenSum({
        outer: 2,
        obj: {
          inner: 2,
          otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup",
          },
        },
      }),
    ).toBe(6);
    expect(
      nestedEvenSum({
        a: 2,
        b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
        c: { c: { c: 2 }, cc: "ball", ccc: 5 },
        d: 1,
        e: { e: { e: 2 }, ee: "car" },
      }),
    ).toBe(10);
  });
});
