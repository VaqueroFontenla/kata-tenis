import * as React from "react";
import { PlayerModel } from '../models/Player';
import './Panel.css';


interface Props {
    players: PlayerModel[];
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
                    { props.players.map( (player,id) => 
                        <tr key = {id}>  
                            <td>{player.name}</td>
                            <td>{player.sets}</td>
                            <td>{player.games}</td>
                            <td>{player.points}</td>
                        </tr> 
                    )}
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

