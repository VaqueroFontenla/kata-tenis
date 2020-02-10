import * as React from "react";
import { PlayerModel } from '../models/Player';
import './Panel.css';


interface Props {
    playerOne: PlayerModel;
    playerTwo: PlayerModel;
}
  
export const Panel = (props: Props) => {
    return (
       <div className="panel">
           <table className="panel__table">
                <thead className="panel__table--header">
                    <tr>
                        <th>Players</th>
                        <th>Sets</th>
                        <th>Games</th>
                        <th>Points</th>
                    </tr>
               </thead>
               <tbody className="panel__table--body">
                    <tr>  
                        <td>{props.playerOne.name}</td>
                        <td>{props.playerOne.sets}</td>
                        <td>{props.playerOne.games}</td>
                        <td>{props.playerOne.points}</td>
                    </tr> 
                    <tr>  
                        <td>{props.playerTwo.name}</td>
                        <td>{props.playerTwo.sets}</td>
                        <td>{props.playerTwo.games}</td>
                        <td>{props.playerTwo.points}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>If something goes wrong, it isn't the code fault. I don't know how to play tennis.</td>
                    </tr>
                </tfoot>
           </table>
       </div>
    )
}

