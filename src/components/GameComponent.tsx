import * as React from "react";
import { ButtonComponent } from './ButtonComponent';
import './GameComponent.css';

interface Props {
    playerOne: string;
    playerTwo: string;
    scorePlayerOne: number;
    scorePlayerTwo: number;
    scoreList: string[];
    wonPoint: (player: string) => void;
    resetGame: () => void;
}
  
export const GameComponent = (props: Props) => {

    return (
        <div className="game-container">
            <div className="game">
                <div className="game-player">
                    <span className="game-player__label">{props.playerOne}</span>
                    <ButtonComponent 
                        onClick={()=> props.wonPoint(props.playerOne)}
                        className="button button__start"
                    >
                        Won Point
                    </ButtonComponent>
                    <span className="game-player__score">{props.scorePlayerOne}</span>
                </div>

                <div className="game-score">
                    {
                     props.scoreList.map( (score,i) => <span key={i} className="score">{score}</span> )
                    }
                </div>

                <div className="game-player">
                    <span  className="game-player__label">{props.playerTwo}</span>
                    <ButtonComponent 
                        onClick={()=> props.wonPoint(props.playerTwo)}
                        className="button button__start"
                    > 
                        Won  Point
                    </ButtonComponent>
                    <span className="game-player__score">{props.scorePlayerTwo}</span>
    
                </div>
            </div>
          
           
            <div className="reset">
               <ButtonComponent 
                    onClick={()=> props.resetGame()}
                    className= "button button__reset"       
                > 
                    Reset Game
                </ButtonComponent>
            </div>
        </div>
    )    
}