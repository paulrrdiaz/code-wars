import { objectDiff } from "./deep-object-diff";

const userBefore = {
  id: 1,
  email: "paul.diaz@test.com",
  profile: {
    id: 1,
    name: "Paul Diaz",
    company: "Tester Corps",
  },
  roles: [{ id: 6 }, { id: 9 }],
  address: { mailingAddress1: "test" },
  segments: [{ id: 3 }],
};

const userAfter = {
  id: 1,
  email: "renee.navarrete@test.com",
  profile: {
    id: 1,
    name: "Paul Diaz",
    company: "Tester Corps",
  },
  roles: [{ id: 6 }, { id: 9 }],
  address: { mailingAddress1: "test" },
  segments: [{ id: 3 }],
};

const result = {
  address: { mailingAddress1: "test" },
  email: "renee.navarrete@test.com",
  profile: { company: "Tester Corps", id: 1, name: "Paul Diaz" },
};

describe("Deep object diff", () => {
  it("should pass", () => {
    expect(objectDiff(userAfter, userBefore, ["address", "profile"])).toEqual(
      result
    );
  });
});
