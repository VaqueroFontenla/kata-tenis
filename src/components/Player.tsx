import * as React from "react";
import './Player.css';

interface Props {
    currentUserName: string;
    onChangeUserName: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Player = (props: Props) => {
  return (
    <form>
        <label>Player</label>
        <input
            type = 'text'
            name = 'username'
            value = {props.currentUserName}
            onChange={props.onChangeUserName}
             />


    </form>
  )
}

