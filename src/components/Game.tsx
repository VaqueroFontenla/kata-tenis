import * as React from "react";
import { Button } from './Button';
import './Game.css';

interface Props {
    namePlayerOne: string
    namePlayerTwo: string
}


//Hacer interface de State
  
export const Game = (props: Props) => {
    const className = '';
    const [ score, setScore] = React.useState('')
    const [ scorePlayerOne, setScorePlayerOne] = React.useState(0);
    const [ scorePlayerTwo, setScorePlayerTwo] = React.useState(0);
    const [ showPoints, setShowPoints] = React.useState(true);
    const [ pointsPlayerOne, setPointsPlayerOne] = React.useState(0);
    const [ pointsPlayerTwo, setPointsPlayerTwo] = React.useState(0);

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
        <div>
            <div>
                {props.namePlayerOne}
                <Button 
                    onClick={()=> wonPoint(props.namePlayerOne)}
                    className={className}
                >
                    Won Point
                </Button>
                Score {props.namePlayerOne}: {pointsPlayerOne}
            </div>
            <div>
            {props.namePlayerTwo}
                <Button 
                    onClick={()=> wonPoint(props.namePlayerTwo)}
                    className={className}> 
                    Won  Point
                </Button>
                Score {props.namePlayerTwo}: {pointsPlayerTwo}
            </div>
           <div>
               <Button 
                    onClick={()=> resetGame()}
                    className={className}> 
                    Reset Game
                </Button>
            </div>
            <h1>{score}</h1>
        </div>
    )    
}