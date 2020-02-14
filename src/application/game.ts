const SCORE_ARRAY: string[] = ["Love", "Fifteen", "Thirty", "Forty"];
const INITIAL_STATE: number = 0;
const NO_DIFFERENT_SCORE: number = 0;
const MINIMAL_FOR_DEUCE: number = 3;

let scorePlayerOne: number = INITIAL_STATE;
let scorePlayerTwo: number = INITIAL_STATE;
let playerOneName: string = "";
let playerTwoName: string = "";

export const constructor = (playerOne: string, playerTwo: string) => {
  playerOneName = playerOne;
  playerTwoName = playerTwo;
  scorePlayerOne = INITIAL_STATE;
  scorePlayerTwo = INITIAL_STATE;
};

export const wonPoint = (playerName: string): void => {
  if (playerName === playerOneName) {
    scorePlayerOne++;
  }
  if (playerName === playerTwoName) {
    scorePlayerTwo++;
  }
};

export const getScore = (): string =>
  getFormattedScore(scorePlayerOne, scorePlayerTwo);

const selectWinner = (difference: number) => {
  if (difference > 0) {
    return playerOneName;
  }
  return playerTwoName;
};

const transformScore = (score: number) => SCORE_ARRAY[score];

export const getFormattedScore = (scoreOne: number, scoreTwo: number): string => {
  let scoreDifference: number = scoreOne - scoreTwo;
  if (scoreDifference === NO_DIFFERENT_SCORE && scoreOne < MINIMAL_FOR_DEUCE) {
    return `${transformScore(scoreOne)} all`;
  }
  if (scoreDifference === NO_DIFFERENT_SCORE && scoreOne >= MINIMAL_FOR_DEUCE) {
    return "Deuce";
  }
  if (scoreOne <= MINIMAL_FOR_DEUCE && scoreTwo <= MINIMAL_FOR_DEUCE) {
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
  getScore,
};
