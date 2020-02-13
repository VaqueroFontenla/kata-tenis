import * as React from "react";
import { Button } from './Button';
import './GameComponent.css';
import { Game } from "../application/game";
import { PlayerModel } from "../models/Player";

interface Props {
    playerOne: PlayerModel;
    playerTwo: PlayerModel;
}
  
export const GameComponent = (props: Props) => {

    const [ score, setScore] = React.useState<string>('');
    const [ scoreList, setScoreList] = React.useState<string[]>([''])

    let scorePlayerOne : number;
    let scorePlayerTwo : number;

    Game.constructor(props.playerOne.name, props.playerTwo.name);

    React.useEffect(()=> {
        
       setScore(Game.getScore());
       console.log(scorePlayerOne, scorePlayerTwo)
    },[scorePlayerOne , scorePlayerTwo])

    React.useEffect(()=> {
        let newScore: string[] = [...scoreList, score];
        setScoreList(newScore);

    },[score])

    return (
        <div className="game-container">
            <div className="game">
                <div className="game-player">
                    <span className="game-player__label">{props.playerOne.name}</span>
                    <Button 
                        onClick={()=> Game.wonPoint(props.playerOne.name)}
                        className="button button__start"
                    >
                        Won Point
                    </Button>
                    <span className="game-player__score">{props.playerOne.points}</span>
                </div>

                <div className="game-score">
                    {
                     scoreList.map( (score,i) => <span key={i} className="score">{score}</span> )
                    }
                </div>

                <div className="game-player">
                    <span  className="game-player__label">{props.playerTwo.name}</span>
                    <Button 
                        onClick={()=> Game.wonPoint(props.playerTwo.name)}
                        className="button button__start"
                    > 
                        Won  Point
                    </Button>
                    <span className="game-player__score">{props.playerTwo.points}</span>
    
                </div>
            </div>
          
           
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