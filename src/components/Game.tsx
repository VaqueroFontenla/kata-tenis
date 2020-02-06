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
    const [isWinner, setIsWinner] = React.useState(false)
    const [ isDeuce, setIsDeuce] = React.useState(false)
    const [ scorePlayerOne, setScorePlayerOne] = React.useState(0);
    const [ scorePlayerTwo, setScorePlayerTwo] = React.useState(0);

    React.useEffect(()=> {
            if (scorePlayerOne === 40 && scorePlayerTwo === 40) {
                setIsDeuce(true);
            
        }
    },[scorePlayerOne,scorePlayerTwo]); 

    const getScore = (scorePlayer: number): any  => {
        switch(scorePlayer) {
            case 0: {
                return 15;
            }
            case 15: {
                return 30
            }
            case 30: {
                return 40
            }
            case 40: {
                return setIsWinner(true);               
            }
                
        }
    }
    const wonPoint = (playerName : string) => {
        if (playerName === props.namePlayerOne)
            setScorePlayerOne(getScore(scorePlayerOne));
        else
            setScorePlayerTwo(getScore(scorePlayerTwo));
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
           { isWinner && 
           <div>
               Winner
               <Button 
                    onClick={()=> resetGame()}
                    className={className}> 
                    Reset Game
                </Button>
            </div>}
            { isDeuce && 
           <div>
             Iguales mangurrino
            </div>}
        </div>
    )    
}