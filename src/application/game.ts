const scoreArray: string[] = ["Love", "Fifteen", "Thirty", "Forty"];
let score: string = "";
const initialState: number = 0;
let scorePlayerOne: number;
let scorePlayerTwo: number;
let gamesPlayerOne: number;
let gamesPlayerTwo: number;
let setsPlayerOne: number;
let setsPlayerTwo: number;
let playerOneName: string = "";
let playerTwoName: string = "";

export const constructor = (playerOne: string, playerTwo: string) => {
  playerOneName = playerOne;
  playerTwoName = playerTwo;
  scorePlayerOne = initialState;
  scorePlayerTwo = initialState;
  gamesPlayerOne = initialState;
  gamesPlayerTwo = initialState;
  setsPlayerOne = initialState;
  setsPlayerTwo = initialState;
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
  if (score.includes("Winner")) {
    wonGame(playerName);
    resetScore();
  } else {
    if (playerName === playerOneName) {
      scorePlayerOne++;
    }
    if (playerName === playerTwoName) {
      scorePlayerTwo++;
    }
  }
};

export const wonGame = (playerName: string): number => {  //No entiendo el error
  if (gamesPlayerOne > 6 || gamesPlayerTwo > 6) {
    wonSet(playerName);
    resetGames();
  } else {
    if (playerName === playerOneName) {
      return gamesPlayerOne++;
    }
    if (playerName === playerTwoName) {
      return gamesPlayerTwo++;
    }
  }
  resetScore();
};

export const wonSet = (playerName: string): number => {
  if (playerName === playerOneName) {
    return setsPlayerOne++;
  }
  if (playerName === playerTwoName) {
    return setsPlayerTwo++;
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

export const getFormattedScore = (
  scoreOne: number,
  scoreTwo: number
): string => {
  //No entiendo el error
  let scoreDifference: number = scoreOne - scoreTwo;
  if (scoreDifference === 0) {
    if (scoreOne < 3) {
      return (score = `${scoreArray[scoreOne]} - all`);
    }
  } else {
    if (scoreOne > 3 || scoreTwo > 3) {
      const winner = selectWinner(scoreDifference);
      if (scoreDifference === 0) {
        return (score = score = "Deuce");
      }

      if (scoreDifference === 1 || scoreDifference === -1) {
        return (score = `Advantage ${winner}`);
      }

      if (scoreDifference >= 2 || scoreDifference <= -2) {
        return (score = `Winner ${winner}`);
      }
    } else {
      return (score = `${transformScore(scoreOne)} - ${transformScore(
        scoreTwo
      )}`);
    }
  }
};

export const getScore = (): string =>
  getFormattedScore(scorePlayerOne, scorePlayerTwo);
