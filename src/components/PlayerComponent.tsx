import * as React from "react";
import './PlayerComponent.css';

interface Props {
    currentUserName: string;
    onChangeUserName: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const PlayerComponent = (props: Props) => {
  return (
    <form className="player">
        <label className="player__label">Player</label>
        <input
            type = 'text'
            name = 'username'
            className="player__input"
            value = {props.currentUserName}
            onChange={props.onChangeUserName}
             />


    </form>
  )
}

