import * as React from "react";
import { hot } from "react-hot-loader/root";
import { PlayerComponent } from "./components/PlayerComponent";
import { ButtonComponent } from "./components/ButtonComponent";
import { GameComponent } from "./components/GameComponent";

import "./App.css";
import { Game } from "./application/game";

const App = () => {
  const [playerOne, setPlayerOne] = React.useState<string>("");
  const [playerTwo, setPlayerTwo] = React.useState<string>("");
  const [scorePlayerOne, setScorePlayerOne] = React.useState<number>(0);
  const [scorePlayerTwo, setScorePlayerTwo] = React.useState<number>(0);
  const [scoreList, setScoreList] = React.useState<string[]>([]);
  const [showGame, setShowGame] = React.useState<boolean>(false);

  const onChangeNamePlayerOne = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPlayerOne(event.target.value);
  };

  const onChangeNamePlayerTwo = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPlayerTwo(event.target.value);
  };

  const onResetPlayer = () => {
    setPlayerOne("");
    setPlayerTwo("");
  };

  const onShowGame = () => {
    setShowGame(true);
    //Game.constructor(playerOne, playerTwo); 
    // Teniendo un setPlayerOne, setPlayerTwo y pasarla por props después no śe bien como utilizar el constructor
  };

  const wonPoint = (player: string) => {
    //Game.wonPoint(player);
    //Lo mismo teniendo el estado no sé como usar wonPoint definido en game.ts
    if ( player === playerOne) {
      setScorePlayerOne(scorePlayerOne + 1)
    }
    if ( player === playerTwo) {
    setScorePlayerTwo(scorePlayerTwo +1)
    }
  }

  React.useEffect(()=> {
    // No he utilizado getScore de game.ts debido a las variables (getScore utiliza variables globales).
    // Modifiqué la función getFormattedScore para incluir los nombres de los jugadores.
    let newScore: string[] = [...scoreList, Game.getFormattedScore(scorePlayerOne, scorePlayerTwo, playerOne,playerTwo)]
    setScoreList(newScore);
  },[scorePlayerOne, scorePlayerTwo]);

  const resetGame = () => {
    setScorePlayerOne(0);
    setScorePlayerTwo(0);
    setScoreList([])
  };

  return (
    <div className="App">
      {!showGame && (
        <div className="wrapper">
          <div className="player__container">
            <PlayerComponent
              currentUserName={playerOne}
              onChangeUserName={onChangeNamePlayerOne}
            />
            <PlayerComponent
              currentUserName={playerTwo}
              onChangeUserName={onChangeNamePlayerTwo}
            />
          </div>
          <div className="player__container">
            <ButtonComponent
              onClick={onResetPlayer}
              className="button button__reset"
            >
              Reset Players
            </ButtonComponent>
            <ButtonComponent
              onClick={onShowGame}
              className="button button__start"
            >
              Start Game
            </ButtonComponent>
          </div>
        </div>
      )}
      {showGame && (
        <div className="wrapper">
          <GameComponent
            playerOne={playerOne}
            playerTwo={playerTwo}
            scorePlayerOne={scorePlayerOne}
            scorePlayerTwo={scorePlayerTwo}
            scoreList={scoreList}
            wonPoint={wonPoint}
            resetGame={resetGame}
          />
        </div>
      )}
    </div>
  );
};

export default hot(App);
