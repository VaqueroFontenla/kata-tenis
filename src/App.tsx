import * as React from "react";
import { hot } from 'react-hot-loader/root'
import { Player } from './components/Player';
import { Button } from './components/Button';
import { Game } from './components/Game';
import { Panel } from './components/Panel';
import { PlayerModel } from './models/Player';

import './App.css';

const App = () => {

  const [namePlayerOne, setnamePlayerOne] = React.useState<string>('');
  const [namePlayerTwo, setnamePlayerTwo] = React.useState<string>('');
  const [winner, setWinner] = React.useState<string>('');
  const [players, setPlayers] = React.useState<PlayerModel[]>([]);
  const [showGame, setShowGame] = React.useState(false);

  const onChangenamePlayerOne = (event: React.ChangeEvent<HTMLInputElement>) => {
    setnamePlayerOne(event.target.value);
  }
  const onChangenamePlayerTwo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setnamePlayerTwo(event.target.value);
  }

  const onResetPlayer = () => {
    setnamePlayerOne('');
    setnamePlayerTwo('');
  }
  const onShowGame = () => setShowGame(true);

  React.useEffect(()=> {
    
 },[namePlayerOne,namePlayerOne, winner]); 

  return (
    <div className="App">
      { !showGame && 
        <div className="wrapper">
          <div className="player__container">
            <Player 
              currentUserName={namePlayerOne}
              onChangeUserName={onChangenamePlayerOne}
            />
            <Player 
              currentUserName={namePlayerTwo}
              onChangeUserName={onChangenamePlayerTwo}
            />
          </div>
          <div className="player__container">
            <Button
              onClick={onResetPlayer}
              className="button button__reset">
                Reset Players
            </Button>
            <Button
              onClick={onShowGame}
              className="button button__start">
                Start Game
            </Button>
          </div>
        </div>
        }
        {showGame &&
          <div className="wrapper">
            <Panel players={players}/>
            <Game
              namePlayerOne = {namePlayerOne}
              namePlayerTwo = {namePlayerTwo}
              winner = {winner }
              setWinner = {setWinner}
            />
          </div>
        }
      </div> 
  );
}

export default hot(App);
