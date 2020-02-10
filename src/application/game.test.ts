import { wonPoint, getScore, constructor, transformScore } from "./game";

describe("Game functionality", () => {
  beforeEach(() => {
    constructor("One", "Two");
  });
  it("player one win first point", () => {
    wonPoint("One");
    const result = getScore(0,0);
    expect(result[]).toBe("Fifteen");
    expect(result["Two"]).toBe("Love");
  });
  it("player two win first point", () => {
    wonPoint("Two");
    const result = getScore();
    expect(result["Two"]).toBe("Fifteen");
    expect(result["One"]).toBe("Love");
  });
});
