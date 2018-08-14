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
describe("when a string compression contains same letters in different positions", () => {
  describe("when word is hhhhfffkkkhhh", () => {
    it("should return h4f3k3h3", () => {
      const result = stringCompression("hhhhfffkkkhhh");
      expect(result).toEqual("h4f3k3h3");
    });
  });
});
describe("when string contains non-letters", () => {
  describe("when string contains number", () => {
    it("should throw an error", () => {
      const result = stringCompression(98089);
      expect(result).toEqual(0);
    });
  });
});
describe("when not a string", () => {
  it("should return 0", () => {
    const result = stringCompression(420);
    expect(result).toEqual(0);
  });
});

describe("when is called without an argument", () => {
  it("should throw an error", () => {
    const result = stringCompression();
    expect(result).toEqual(0);
  });
});
describe("when is called with an empty string", () => {
  it("should throw an error", () => {
    const result = stringCompression();
    expect(result).toEqual(0);
  });
});
describe("when is called with an empty string", () => {
  it("should ignore those and count the letters", () => {
    const result = stringCompression("--Hello World!!!---");
    expect(result).toEqual("h1e1l2o1w1o1r1l1d1");
  });
});
