import { stringifyNumbers } from "./stringify-numbers";

describe("Stringify Numbers", () => {
  it("should pass", () => {
    expect(
      stringifyNumbers({
        num: 1,
        test: [],
        data: {
          val: 4,
          info: {
            isRight: true,
            random: 66,
          },
        },
      }),
    ).toEqual({
      num: "1",
      test: [],
      data: {
        val: "4",
        info: {
          isRight: true,
          random: "66",
        },
      },
    });
  });
});
