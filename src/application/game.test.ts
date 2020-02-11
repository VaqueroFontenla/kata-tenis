import { wonPoint, constructor, getFormattedScore, wonGame } from "./game";
import { scoreValues } from "./game-score-values";

describe("Game functionality", () => {
  beforeEach(() => {
    constructor("One", "Two");
  });
  it("player one win first point", () => {
    wonPoint("One");
    const result = getFormattedScore(1, 0);
    expect(result).toBe("Fifteen - Love");
  });
  it("player two win first point", () => {
    wonPoint("Two");
    const result = getFormattedScore(0, 1);
    expect(result).toBe("Love - Fifteen");
  });
  it("player one win match", () => {
    wonPoint("One");
    const result = getFormattedScore(5, 3);
    expect(result).toBe("Winner One");
  });
  it("player two win match", () => {
    wonPoint("Two");
    const result = getFormattedScore(3, 5);
    expect(result).toBe("Winner Two");
  });
  it("different scores during match", () => {
    scoreValues.map(scoreValue => {
      const result = getFormattedScore(
        scoreValue.scorePlayerOne,
        scoreValue.scorePlayerTwo
      );
      expect(result).toBe(scoreValue.score);
    });
  });
  it("player one win game", () => {
    wonPoint("One");
    getFormattedScore(4, 0);
    const result = wonGame('One')
    expect(result).toBe(1);
  });
  it("player two win game", () => {
    wonPoint("Two");
    getFormattedScore(0, 4);
    const result = wonGame('Two')
    expect(result).toBe(1);
  });
  it("player one win set", () => {
    wonPoint("One");
    getFormattedScore(4, 0);
    const result = wonGame('One')
    expect(result).toBe(1);
  });
  it("player two win set", () => {
    wonPoint("Two");
    getFormattedScore(4, 0);
    const result = wonGame('Two')
    expect(result).toBe(1);
  });

});
