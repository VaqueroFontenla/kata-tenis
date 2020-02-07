import * as React from "react";
import { Button } from './Button';
import './Game.css';

interface Props {
    namePlayerOne: string
    namePlayerTwo: string
}


//Hacer interface de State
  
export const Game = (props: Props) => {

    const [ score, setScore] = React.useState('')
    const [ scorePlayerOne, setScorePlayerOne] = React.useState(0);
    const [ scorePlayerTwo, setScorePlayerTwo] = React.useState(0);
    const [ showPoints, setShowPoints] = React.useState(true);
    const [ pointsPlayerOne, setPointsPlayerOne] = React.useState(0);
    const [ pointsPlayerTwo, setPointsPlayerTwo] = React.useState(0);
    console.log(score);

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

    React.useEffect(()=> {
        const differenceScore = scorePlayerOne - scorePlayerTwo;
            if (differenceScore === 0 ) {
                switch(scorePlayerOne && scorePlayerTwo) {
                    case 0: 
                        setScore('Start game');
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
                        setScore(`Winner: ${props.namePlayerOne}`);
                        break;
                    
                    case -2:
                        setScore(`Winner: ${props.namePlayerTwo}`);
                        break;
                }
            } else {   
                setScore(`${transformScore(scorePlayerOne)}-${transformScore(scorePlayerTwo)}`)
            }
        
    },[scorePlayerOne,scorePlayerTwo]); 

    const checkPoinstPlayer = (scorePlayer: number): any => {
        switch(scorePlayer) {
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
    }
  
    return (
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
                <span className="score">{score}</span>
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
           
            <div className="score__container">
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