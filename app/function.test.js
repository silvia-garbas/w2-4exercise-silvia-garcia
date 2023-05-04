import checkAllVocals from "./index.js";

describe("Given a seeker function", () => {
  describe("When it receives murciélago", () => {
    test("Then it should returns true", () => {
      const word = "murcielago";

      const expectedResult = true;

      const result = checkAllVocals(word);

      expect(result).toBe(expectedResult);
    });
  });
});
