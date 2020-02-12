export interface ScoreValue {
  description: string;
  playersPoints: string[];
  score: string;
}

export const testScore: ScoreValue[] = [
  {
    description: "player one win first point",
    playersPoints: ["One"],
    score: "Fifteen - Love"
  },
  {
    description: "player two win first point",
    playersPoints: ["Two"],
    score: "Love - Fifteen"
  },
  {
    description: "player one and player two has one point each",
    playersPoints: ["One", "Two"],
    score: "Fifteen all"
  },
  {
    description: "player one and player two just start the game",
    playersPoints: [],
    score: "Love all"
  },
  {
    description: "player one win the game",
    playersPoints: ["One", "One", "One", "One"],
    score: "Winner One"
  },
  {
    description: "player two win the game",
    playersPoints: ["Two", "Two", "Two", "Two"],
    score: "Winner Two"
  },
  {
    description: "player one and player two are in deuce",
    playersPoints: ["One", "One", "One", "Two", "Two", "Two"],
    score: "Deuce"
  },
  {
    description: "player one has advantage after deuce",
    playersPoints: ["One", "One", "One", "Two", "Two", "Two", "One"],
    score: "Advantage One"
  },
  {
    description: "player two has advantage after deuce",
    playersPoints: ["One", "One", "One", "Two", "Two", "Two", "Two"],
    score: "Advantage Two"
  },
  {
    description: "players are in deuce after player two has advantage",
    playersPoints: ["One", "One", "One", "Two", "Two", "Two", "Two", "One"],
    score: "Deuce"
  },
  {
    description: "players two win the game after deuce",
    playersPoints: ["One", "One", "One", "Two", "Two", "Two", "Two", "Two"],
    score: "Winner Two"
  },
  {
    description: "players one win the game after deuce",
    playersPoints: ["One", "One", "One", "Two", "Two", "Two", "One", "One"],
    score: "Winner One"
  },
  {
    description: "player one win 2 points",
    playersPoints: ["One", "One"],
    score: "Thirty - Love"
  },
  {
    description: "player one win 3 points",
    playersPoints: ["One", "One", "One"],
    score: "Forty - Love"
  },
  {
    description: "player one win game",
    playersPoints: ["One", "One", "One", "Two", "Two", "One"],
    score: "Winner One"
  }
];
