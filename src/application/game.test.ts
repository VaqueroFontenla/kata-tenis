import { Game } from "./game";
import { testScore } from "./game-score-values";

describe("Game functionality", () => {
  beforeEach(() => {
    Game.constructor("One", "Two");
  });

  testScore.map(score => {
    it(score.description, () => {
      score.playersPoints.map(playerPoint => Game.wonPoint(playerPoint));
      const result = Game.getScore();
      expect(result).toBe(score.score);
    });
  });
});
