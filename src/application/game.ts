const scoreArray: string[] = ["Love", "Fifteen", "Thirty", "Forty"];
const initialState: number = 0;
let scorePlayerOne: number = initialState;
let scorePlayerTwo: number = initialState;
let playerOneName: string = "";
let playerTwoName: string = "";

const NO_SCORE_DIFERENCE = 0;

const constructor = (playerOne: string, playerTwo: string) => {
  playerOneName = playerOne;
  playerTwoName = playerTwo;
  scorePlayerOne = 0;
  scorePlayerTwo = 0;
};

const wonPoint = (playerName: string): void => {
  if (playerName === playerOneName) {
    scorePlayerOne++;
  }
  if (playerName === playerTwoName) {
    scorePlayerTwo++;
  }
};

const getScore = (): string =>
  getFormattedScore(scorePlayerOne, scorePlayerTwo);

const selectWinner = (difference: number) => {
  if (difference > 0) {
    return playerOneName;
  }
  return playerTwoName;
};

const transformScore = (score: number) => scoreArray[score];

const getFormattedScore = (scoreOne: number, scoreTwo: number): string => {
  const scoreDifference: number = scoreOne - scoreTwo;
  if (scoreDifference === NO_SCORE_DIFERENCE && scoreOne < 3) {
    return `${transformScore(scoreOne)} all`;
  }
  if (scoreDifference === NO_SCORE_DIFERENCE && scoreOne >= 3) {
    return "Deuce";
  }

  if (scoreOne < 4 && scoreTwo < 4) {
    return `${transformScore(scoreOne)} - ${transformScore(scoreTwo)}`;
  }

  const winner = selectWinner(scoreDifference);
  if (scoreDifference === 1 || scoreDifference === -1) {
    return `Advantage ${winner}`;
  }

  return `Winner ${winner}`;
};

export const Game = {
  constructor,
  wonPoint,
  getScore
};

// Game.constructor()
// Game.wonPoint('asdasd')
// Game.getScore()
