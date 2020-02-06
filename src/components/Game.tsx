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

    React.useEffect(()=> {
        const differenceScore = scorePlayerOne - scorePlayerTwo;
            if (differenceScore === 0 ) {
                switch(scorePlayerOne && scorePlayerTwo) {
                    case 15: 
                        setScore('Fifteen all');
                        break;
                    case 30: {
                        setScore('Thirty all')
                    }
                    case 40: {
                        setScore('Deuce')
                    }
                }
            } else if (scorePlayerOne > 40 || scorePlayerTwo > 40) {
                switch(differenceScore) {
                    case 1: {
                        setScore(`Advantage ${props.namePlayerOne}`)
                    }
                    case -1: {
                        setScore(`Advantage ${props.namePlayerTwo}`)
                    }
                    case 2: {
                        setScore(`Winner: ${props.namePlayerOne}`)
                    }
                    case -2: {
                        setScore(`Winner: ${props.namePlayerTwo}`)
                    }
                }
              
            } else {
                const transformScore = (score:number) => {
                    switch(score) {
                      case 0: {
                          return 'Love';
                      }
                      case 1: {
                        'Fifteen';
                      }
                      case 2: {
                        'Thirty';
                      }
                      case 4: {
                        'Forty'
                      }
                      default:
                        alert('Something went wrong.')
                    }
                  }
                setScore(`${transformScore(scorePlayerOne)}-${transformScore(scorePlayerTwo)}`)
            }
    
        
    },[scorePlayerOne,scorePlayerTwo]); 

    const checkPoinstPlayer = (scorePlayer: number): any => {
        switch(scorePlayer) {
            case 1:
                15;
                break;
            case 2:
                30;
                break;
            case 3:
                40;
                break;
            default :
                setShowPoints(false)  
                break;
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
            setScorePlayerTwo(scorePlayerTwo + 2);
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
                Score {props.namePlayerOne}: {scorePlayerOne}
            </div>
            <div>
            {props.namePlayerTwo}
                <Button 
                    onClick={()=> wonPoint(props.namePlayerTwo)}
                    className={className}> 
                    Won  Point
                </Button>
                Score {props.namePlayerTwo}: {scorePlayerTwo}
            </div>
           <div>
              
               <Button 
                    onClick={()=> resetGame()}
                    className={className}> 
                    Reset Game
                </Button>
            </div>}
         
        
        </div>
    )    
}