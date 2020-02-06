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
    const [ scorePlayerOne, setScorePlayerOne] = React.useState(0);
    const [ scorePlayerTwo, setScorePlayerTwo] = React.useState(0);
    const wonPoint = (playerName : string) => {
     console.log('hola')
    }
    const addPointPlayerTwo = () => {}
    return (
        <div>
            <div>
                {props.namePlayerOne}
                <Button 
                    onClick={wonPoint}
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
        </div>
    )    
}