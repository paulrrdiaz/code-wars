import { likes } from "./who-likes-it";

describe("Who likes it?", () => {
  it("should pass", () => {
    expect(likes([])).toBe("no one likes this");
    expect(likes(["Peter"])).toBe("Peter likes this");
    expect(likes(["Jacob", "Alex"])).toBe("Jacob and Alex like this");
    expect(likes(["Alex", "Jacob", "Mark", "Max"])).toBe("Alex, Jacob and 2 others like this");
  });
});
