import * as React from "react";
import { hot } from 'react-hot-loader/root'
import { Player } from './components/Player';
import { Button } from './components/Button';
import { Game } from './components/Game';
import { Panel } from './components/Panel';
import { PlayerModel } from './models/Player';

import './App.css';

const App = () => {

  const initialPlayer = {
    name: '',
    sets: 0,
    games: 0,
    points: 0
  };

  const [winner, setWinner] = React.useState<string>('');
  const [playerOne, setPlayerOne] = React.useState<PlayerModel>(initialPlayer);
  const [playerTwo, setPlayerTwo] = React.useState<PlayerModel>(initialPlayer);
  const [showGame, setShowGame] = React.useState<boolean>(false);

  const onChangenamePlayerOne = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerOne({ ...playerOne, name: event.target.value })
  }

  const onChangenamePlayerTwo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerTwo({ ...playerTwo, name: event.target.value })
  }

  const onResetPlayer = () => {
    setPlayerOne({ ...playerOne, name: '' })
    setPlayerTwo({ ...playerTwo, name:'' })
  }
  const onShowGame = () => setShowGame(true);


  return (
    <div className="App">
      { !showGame && 
        <div className="wrapper">
          <div className="player__container">
            <Player 
              currentUserName={playerOne.name}
              onChangeUserName={onChangenamePlayerOne}
            />
            <Player 
              currentUserName={playerTwo.name}
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
            <Panel 
              playerOne = {playerOne}
              playerTwo = {playerTwo}
            />
            <Game
              namePlayerOne = {playerOne.name}
              namePlayerTwo = {playerTwo.name}
              winner = {winner }
              setWinner = {setWinner}
            />
          </div>
        }
      </div> 
  );
}

export default hot(App);
