const scoreArray: string[] = ["Love", "Fifteen", "Thirty", "Forty"];

let scorePlayerOne: number = 0;
let scorePlayerTwo: number = 0;
const playerOneName: string = "";
const playerTwoName: string = "";

export const constructor = (playerOneName: string, playerTwoName: string) => {
    playerOneName = playerOneName;
    playerTwoName = playerTwoName;
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

export const getFormattedScore = (scoreOne: number, scoreTwo: number) :string => {
    let scoreDifference: number = scoreOne - scoreTwo;
    if( scoreDifference === 0 ) {
        if(scoreOne < 4) {
            return `${scoreArray[scoreOne]} - all`
        }
        if(scoreOne === 4) {
            return 'Deuce'
        }
    } else {
        return `${transformScore(scorePlayerOne)} - ${transformScore(scorePlayerTwo)}`
    }
}

export const getScore = ( ): string => {
    return getFormattedScore(scorePlayerOne,scorePlayerTwo)
};
