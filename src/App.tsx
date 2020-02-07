import * as React from "react";
import { hot } from 'react-hot-loader/root'
import { Player } from './components/Player';
import { Button } from './components/Button';
import { Game } from './components/Game';
import './App.css';

const App = () => {

  const [namePlayerOne, setnamePlayerOne] = React.useState('');
  const [namePlayerTwo, setnamePlayerTwo] = React.useState('');
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
  const onShowGame = () => setShowGame(true)

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
            <Game
              namePlayerOne={namePlayerOne}
              namePlayerTwo={namePlayerTwo}
            />
          </div>
        }
      </div> 
  );
}

export default hot(App);
