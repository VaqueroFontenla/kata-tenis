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

  const [playerOne, setPlayerOne] = React.useState<PlayerModel>(initialPlayer);
  const [playerTwo, setPlayerTwo] = React.useState<PlayerModel>(initialPlayer);
  const [showGame, setShowGame] = React.useState<boolean>(false);
  const [winnerGame , setWinnerGame] =  React.useState<string>('')

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
  
  const addPointsToPlayer = (playerName: string, playerPoints: number ): void => {
    if ( playerName === playerOne.name) {
      setPlayerOne({ ... playerOne, points: playerPoints})
    } else if (playerName === playerTwo.name) {
      setPlayerTwo({ ... playerTwo, points: playerPoints})
    }
  }

  const addGameToPlayer = (playerName: string): void => {
    if ( playerName === playerOne.name) {
      setPlayerOne({ ... playerOne, games: playerOne.games + 1 })
    } else if (playerName === playerTwo.name) {
      setPlayerTwo({ ... playerTwo, games: 1, points: 0})
    }
  };

  React.useEffect(()=> {
    if (playerOne.games > 6) {
      setPlayerOne({ ...playerOne, sets: playerOne.sets + 1})
    }

    if (playerTwo.games > 6) {
      setPlayerOne({ ...playerTwo, sets: playerTwo.sets + 1})
    }
  },[playerOne, playerTwo])
   
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
              playerOne = {playerOne}
              playerTwo = {playerTwo}
              addPointsToPlayer = {addPointsToPlayer}
              addGameToPlayer = {addGameToPlayer}
            />
          </div>
        }
      </div> 
  );
}

export default hot(App);
