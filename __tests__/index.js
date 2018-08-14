const stringCompression = require("../lib/stringCompression");
describe("stringCompression", () => {
  describe("when word is aaabbbccc", () => {
    it("should return a3b3c3", () => {
      const result = stringCompression("aaabbbccc");
      expect(result).toEqual("a3b3c3");
    });
  });
});
describe("stringCompression", () => {
  describe("when word is ghjff", () => {
    it("should return g1h1j1f2", () => {
      const result = stringCompression("ghjff");
      expect(result).toEqual("g1h1j1f2");
    });
  });
});
describe("stringCompression", () => {
  describe("when word is hhhhfffkkk", () => {
    it("should return h4f3k3", () => {
      const result = stringCompression("hhhhfffkkk");
      expect(result).toEqual("h4f3k3");
    });
  });
});
