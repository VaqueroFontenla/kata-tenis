import * as React from "react";
import { Button } from './Button';
import './Game.css';

interface Props {
    namePlayerOne: string;
    namePlayerTwo: string;
    setWinner: (winner: string) => void;
}
  
export const Game = (props: Props) => {

    const [ score, setScore] = React.useState<string>('');
    const [ scoreList, setScoreList] = React.useState<string[]>([''])
    const [ scorePlayerOne, setScorePlayerOne] = React.useState<number>(0);
    const [ scorePlayerTwo, setScorePlayerTwo] = React.useState<number>(0);
    const [ showPoints, setShowPoints] = React.useState<boolean>(true);
    const [ isWinner, setIsWinner] = React.useState<boolean>(false);
    const [ pointsPlayerOne, setPointsPlayerOne] = React.useState<number>(0);
    const [ pointsPlayerTwo, setPointsPlayerTwo] = React.useState<number>(0);

    const transformScore = (score:number) => {
        switch(score) {
            case 0: {
                return 'Love';
            }
            case 1: {
                return 'Fifteen';
            }
            case 2: {
                return 'Thirty';
            }
            case 3: {
                return 'Forty'
            }
            case 4:
                alert('Something went wrong.')
        }
    }

    const finishGame = (winner:string): any => {
        setScoreList([]);
        props.setWinner(winner);
        setIsWinner(true);
    }

    React.useEffect(()=> {
        const differenceScore = scorePlayerOne - scorePlayerTwo;
            if (differenceScore === 0 ) {
                switch(scorePlayerOne && scorePlayerTwo) {
                    case 0: 
                        setScore('Love all');
                        break;
                    case 1: 
                        setScore('Fifteen all');
                        break;
                    case 2: 
                        setScore('Thirty all');
                        break;
                    
                    default: {
                        setScore('Deuce');
                    }
                }
            } else if (scorePlayerOne > 3 || scorePlayerTwo > 3) {
                if (scorePlayerOne >= 3 && scorePlayerTwo >= 3) {
                    switch(differenceScore) {
                        case 0: 
                            setScore('Deuce');
                            break;
                        case 1: 
                            setScore(`Advantage ${props.namePlayerOne}`);
                            break;
                        case -1: 
                            setScore(`Advantage ${props.namePlayerTwo}`);
                            break;
                        
                        case 2: 
                            finishGame(props.namePlayerOne);
                            break;
                        case -2:
                            finishGame(props.namePlayerTwo);
                            break;
                    }
                } else {
                   if (scorePlayerOne === 4) {
                        setScore(`Advantage ${props.namePlayerOne}`);
                   } else if(scorePlayerOne === 5) {
                        finishGame(props.namePlayerOne);
                   } else if (scorePlayerTwo === 4) {
                        setScore(`Advantage ${props.namePlayerTwo}`);
                   } else if(scorePlayerTwo === 5) {
                        finishGame(props.namePlayerTwo);
                   }
                }
            } else {   
                setScore(`${transformScore(scorePlayerOne)}-${transformScore(scorePlayerTwo)}`)
            }
    },[scorePlayerOne,scorePlayerTwo]); 

    React.useEffect(()=> {
        let newScore: string[] = [...scoreList, score];
        setScoreList(newScore);

    },[score])

    const checkPoinstPlayer = (scorePlayer: number): any => {
        switch(scorePlayer) {
            case 0: {
                return 0
            }
            case 1: {
                return 15
            }
            case 2:{
                return 30
            }
            case 3:{
                return 40
            }
            default :
                setShowPoints(false)  
        }
    }

    React.useEffect(()=> {
       setPointsPlayerOne(checkPoinstPlayer(scorePlayerOne))
       setPointsPlayerTwo(checkPoinstPlayer(scorePlayerTwo))
    },[scorePlayerOne,scorePlayerTwo]); 

    const wonPoint = (playerName : string) => {
        if (playerName === props.namePlayerOne)
            setScorePlayerOne(scorePlayerOne + 1);
        else if  (playerName === props.namePlayerTwo)
            setScorePlayerTwo(scorePlayerTwo + 1);
    }

    const resetGame = () => {
        setScorePlayerOne(0);
        setScorePlayerTwo(0);
        setScoreList([]);
        setIsWinner(false);
    }
  
    return (
        <div className="game-container">
            <div className="game">
                <div className="game-player">
                    <span className="game-player__label">{props.namePlayerOne}</span>
                    <Button 
                        onClick={()=> wonPoint(props.namePlayerOne)}
                        className="button button__start"
                    >
                        Won Point
                    </Button>
                    <span className="game-player__score">{pointsPlayerOne}</span>
                </div>

                <div className="game-score">
                    {
                     scoreList.map( (score,i) => <span key={i} className="score">{score}</span> )
                    }
                </div>

                <div className="game-player">
                    <span  className="game-player__label">{props.namePlayerTwo}</span>
                    <Button 
                        onClick={()=> wonPoint(props.namePlayerTwo)}
                        className="button button__start"
                    > 
                        Won  Point
                    </Button>
                    <span className="game-player__score">{pointsPlayerTwo}</span>
    
                </div>
            </div>
            { isWinner &&
                <div className="winner-container">
                    <div className="animated">Winner Game {winner} !</div>
                </div>
            }
           
            <div className="reset">
               <Button 
                    onClick={()=> resetGame()}
                    className= "button button__reset"       
                > 
                    Reset Game
                </Button>
            </div>
        </div>
    )    
}