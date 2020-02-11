const scoreArray: string[] = ["Love", "Fifteen", "Thirty", "Forty"];

let scorePlayerOne: number = 0;
let scorePlayerTwo: number = 0;
let playerOneName: string = "";
let playerTwoName: string = "";

export const constructor = (playerOne: string, playerTwo: string) => {
  playerOneName = playerOne;
  playerTwoName = playerTwo;
};

export const wonPoint = (playerName: string): void => {
  if (playerName === playerOneName) {
    scorePlayerOne++;
  }
  if (playerName === playerTwoName) {
    scorePlayerTwo++;
  }
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
  let scoreDifference: number = scoreOne - scoreTwo;
  let scoreString: string = "";

  if (scoreDifference === 0) {
    if (scoreOne < 3) {
      scoreString = `${scoreArray[scoreOne]} - all`;
    }
  } else {
    if (scoreOne > 3 || scoreTwo > 3) {
      const winner = selectWinner(scoreDifference);
      if (scoreDifference === 0) {
        scoreString = scoreString = "Deuce";
      }

      if (scoreDifference === 1 || scoreDifference === -1) {
        scoreString = `Advantage ${winner}`;
      }

      if (scoreDifference >= 2 || scoreDifference <= -2) {
        scoreString = `Winner ${winner}`;
      }
    } else {
      scoreString = `${transformScore(scoreOne)} - ${transformScore(scoreTwo)}`;
    }
  }
  return scoreString;
};

export const getScore = (): string => {
  return getFormattedScore(scorePlayerOne, scorePlayerTwo);
};
