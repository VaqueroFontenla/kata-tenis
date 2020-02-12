import {
  wonPoint,
  constructor,
  getFormattedScore,
  wonGame,
  getScore
} from "./game";
// import { scoreValues } from "./game-score-values";

describe("Game functionality", () => {
  beforeEach(() => {
    constructor("One", "Two");
  });
  it("player one win first point", () => {
    wonPoint("One");
    const result = getScore();
    expect(result).toBe("Fifteen - Love");
  });
  it("player one and player two has one point each", () => {
    wonPoint("One");
    wonPoint("Two");
    const result = getScore();
    expect(result).toBe("Fifteen all");
  });
  it("player one and player two just start the game", () => {
    const result = getScore();
    expect(result).toBe("Love all");
  });
  it("player one win the game", () => {
    wonPoint("One");
    wonPoint("One");
    wonPoint("One");
    wonPoint("One");
    const result = getScore();
    expect(result).toBe("Winner One");
  });
  it("player two win the game", () => {
    wonPoint("Two");
    wonPoint("Two");
    wonPoint("Two");
    wonPoint("Two");
    const result = getScore();
    expect(result).toBe("Winner Two");
  });
  it("player one and player two are in deuce", () => {
    wonPoint("One");
    wonPoint("One");
    wonPoint("One");
    wonPoint("Two");
    wonPoint("Two");
    wonPoint("Two");

    const result = getScore();
    expect(result).toBe("Deuce");
  });
  it("player one has advantage after deuce", () => {
    wonPoint("One");
    wonPoint("One");
    wonPoint("One");
    wonPoint("Two");
    wonPoint("Two");
    wonPoint("Two");
    wonPoint("One");

    const result = getScore();
    expect(result).toBe("Advantage One");
  });
  it("player two has advantage after deuce", () => {
    wonPoint("One");
    wonPoint("One");
    wonPoint("One");
    wonPoint("Two");
    wonPoint("Two");
    wonPoint("Two");
    wonPoint("Two");

    const result = getScore();
    expect(result).toBe("Advantage Two");
  });
  it("players are in deuce after player two has advantage", () => {
    wonPoint("One");
    wonPoint("One");
    wonPoint("One");
    wonPoint("Two");
    wonPoint("Two");
    wonPoint("Two");
    wonPoint("Two");
    wonPoint("One");

    const result = getScore();
    expect(result).toBe("Deuce");
  });
  it("players two win the game after deuce", () => {
    wonPoint("One");
    wonPoint("One");
    wonPoint("One");
    wonPoint("Two");
    wonPoint("Two");
    wonPoint("Two");
    wonPoint("Two");
    wonPoint("Two");

    const result = getScore();
    expect(result).toBe("Winner Two");
  });
  it("players one win the game after deuce", () => {
    wonPoint("One");
    wonPoint("One");
    wonPoint("One");
    wonPoint("Two");
    wonPoint("Two");
    wonPoint("Two");
    wonPoint("One");
    wonPoint("One");
    const result = getScore();
    expect(result).toBe("Winner One");
  });
  it("players one win 2 points", () => {
    wonPoint("One");
    wonPoint("One");

    const result = getScore();
    expect(result).toBe("Thirty - Love");
  });
  it("players one win 3 points", () => {
    wonPoint("One");
    wonPoint("One");
    wonPoint("One");

    const result = getScore();
    expect(result).toBe("Forty - Love");
  });
});
