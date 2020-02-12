const scoreArray: string[] = ["Love", "Fifteen", "Thirty", "Forty"];
const initialState: number = 0;
let scorePlayerOne: number = initialState;
let scorePlayerTwo: number = initialState;
let gamesPlayerOne: number = initialState;
let gamesPlayerTwo: number = initialState;
let setsPlayerOne: number = initialState;
let setsPlayerTwo: number = initialState;
let playerOneName: string = "";
let playerTwoName: string = "";

export const constructor = (playerOne: string, playerTwo: string) => {
  playerOneName = playerOne;
  playerTwoName = playerTwo;
  resetScore();
};

export const resetScore = () => {
  scorePlayerOne = initialState;
  scorePlayerTwo = initialState;
};

export const resetGames = () => {
  gamesPlayerOne = initialState;
  gamesPlayerTwo = initialState;
};

export const reset = () => {
  resetScore();
  resetGames();
};

export const wonPoint = (playerName: string): void => {
    if (playerName === playerOneName) {
      scorePlayerOne++;
    }
    if (playerName === playerTwoName) {
      scorePlayerTwo++;
    }
};

export const wonGame = (playerName: string): void => {
  //No entiendo el error
  if (gamesPlayerOne > 6 || gamesPlayerTwo > 6) {
    wonSet(playerName);
    resetGames();
  } else {
    if (playerName === playerOneName) {
      gamesPlayerOne++;
    }
    if (playerName === playerTwoName) {
      gamesPlayerTwo++;
    }
  }
  resetScore();
};

export const wonSet = (playerName: string): void => {
  if (playerName === playerOneName) {
    setsPlayerOne++;
  }
  if (playerName === playerTwoName) {
    setsPlayerTwo++;
  }
  resetGames();
};

export const transformScore = (score: number) => scoreArray[score];

export const selectWinner = (scoreDifference: number) => {
  let winner: string = "";
  if (scoreDifference > 0) {
    winner = playerOneName;
  }
  if (scoreDifference < 0) {
    winner = playerTwoName;
  }
  return winner;
};

export const getFormattedScore = (scoreOne: number, scoreTwo: number): string => {
  let score: string = "";
  let scoreDifference: number = scoreOne - scoreTwo;
  if (scoreDifference === 0) {
    if (scoreOne < 3) {
      score = `${scoreArray[scoreOne]} all`;
    }
    if (scoreOne >= 3) {
      score = "Deuce";
    }
  } else {
    if (scoreOne > 3 || scoreTwo > 3) {
      const winner = selectWinner(scoreDifference);
      if (scoreDifference === 1 || scoreDifference === -1) {
        score = `Advantage ${winner}`;
      }

      if (scoreDifference >= 2 || scoreDifference <= -2) {
        score = `Winner ${winner}`;
      }
    } else {
      score = `${transformScore(scoreOne)} - ${transformScore(scoreTwo)}`;
    }
  }
  return score
};

export const getScore = (): string =>
  getFormattedScore(scorePlayerOne, scorePlayerTwo);
