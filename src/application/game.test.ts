import { wonPoint, constructor, getFormattedScore } from "./game";

describe("Game functionality", () => {
    beforeEach(() => {
      constructor("One", "Two");
    });
    it("player one win first point", () => {
      wonPoint("One");
      const result = getFormattedScore(1,0);
      expect(result).toBe("Fifteen - Love");
    });
    it("player two win first point", () => {
      wonPoint("Two");
      const result = getFormattedScore(0,1);
      expect(result).toBe("Love - Fifteen");
    });
    it("player one win match", () => {
      wonPoint("One");
      const result = getFormattedScore(5,3);
      expect(result).toBe("Winner One");
    });
    it("player two win match", () => {
      wonPoint("Two");
      const result = getFormattedScore(3,5);
      expect(result).toBe("Winner Two");
    });
});
