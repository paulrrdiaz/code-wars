import { domainName } from "./extract-the-domain";

describe("Extract the domain name from a URL", () => {
  it("should pass", () => {
    expect(domainName("https://hyphen-site.org")).toBe("hyphen-site");
    expect(domainName("http://www.codewars.com/kata/")).toBe("codewars");
    expect(domainName("http://google.com")).toBe("google");
    expect(domainName("http://google.co.jp")).toBe("google");
    expect(domainName("www.xakep.ru")).toBe("xakep");
    expect(domainName("https://youtube.com")).toBe("youtube");
  });
});
