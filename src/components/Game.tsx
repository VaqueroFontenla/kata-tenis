import * as React from "react";
import { Button } from './Button';
import './Game.css';

interface Props {
    userNamePlayerOne: string
    userNamePlayerTwo: string
}

  
export const Game = (props: Props) => {
    const className = '';
    const addPointPlayerOne = () => {}
    const addPointPlayerTwo = () => {}
    return (
        <div>
            <div>
                {props.userNamePlayerOne}
                <Button 
                    onClick={addPointPlayerOne}
                    className={className}
                >
                    Won Point
                </Button>
            </div>
            <div>
            {props.userNamePlayerTwo}
                <Button 
                    onClick={addPointPlayerTwo}
                    className={className}> 
                    Won  Point
                </Button>
            </div>
        </div>
    )    
}