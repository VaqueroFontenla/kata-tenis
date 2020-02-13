import { wonPoint, constructor, getScore } from "./game";
import { testScore } from "./game-score-values";

describe("Game functionality", () => {
  beforeEach(() => {
    constructor("One", "Two");
  });

  testScore.map(score => {
    it(score.description, () => {
      score.playersPoints.map(playerPoint => wonPoint(playerPoint));
      const result = getScore();
      expect(result).toBe(score.score);
    });
  });
});
