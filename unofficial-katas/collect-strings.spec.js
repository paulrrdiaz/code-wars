import { collectStrings } from "./collect-strings";

describe("Collect Strings", () => {
  it("should pass", () => {
    expect(
      collectStrings({
        stuff: "foo",
        data: {
          val: {
            thing: {
              info: "bar",
              moreInfo: {
                evenMoreInfo: {
                  weMadeIt: "baz",
                },
              },
            },
          },
        },
      }),
    ).toEqual(["foo", "bar", "baz"]);
  });
});
