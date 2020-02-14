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
  const [pointsPlayerOne, setPointsPlayerOne] = React.useState<string>("0");
  const [pointsPlayerTwo, setPointsPlayerTwo] = React.useState<string>("0");
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
    Game.constructor(playerOne, playerTwo);
  };

  const transformPointOfPlayer = (scorePlayer: number): string => {
    let newPoint: string = "";
    if (scorePlayer <= 3) {
      switch (scorePlayer) {
        case 0:
          newPoint = "0";
          break;
        case 1:
          newPoint = "15";
          break;
        case 2:
          newPoint = "30";
          break;
        case 3:
          newPoint = "40";
          break;
      }
    }
    if (scorePlayer > 3) {
      newPoint = scoreList[scoreList.length-1];
    }
    return newPoint;
  };

  // Uno de los requerimientos es que: "Debe ser posible obtener la puntuación de dcualquiera de los jugadores en cualquier momento"
  const setPointOfPlayer = (player: string) => {
    if (player === playerOne) {
      setScorePlayerOne(scorePlayerOne + 1);
    }
    if (player === playerTwo) {
      setScorePlayerTwo(scorePlayerTwo + 1);
    }
  };

  const wonPoint = (player: string) => {
    Game.wonPoint(player);
    setPointOfPlayer(player);
  };

  const refreshFunction = (scorePlayerOne: number,scorePlayerTwo :number) => {
    let newScore: string[] = [...scoreList, Game.getScore()];
    setScoreList(newScore);
    //Se supone que esto en síncrono sin embargo, no se actualiza scoreList
    setPointsPlayerOne(transformPointOfPlayer(scorePlayerOne));
    setPointsPlayerTwo(transformPointOfPlayer(scorePlayerTwo));
  }

  const resetGame = () => {
    Game.constructor(playerOne, playerTwo);
    setScoreList([]);
    //Se supone que esto en síncrono sin embargo, no se actualiza scoreList
    refreshFunction(0,0);
  };

  React.useEffect(() => {
    refreshFunction(scorePlayerOne,scorePlayerTwo);
  }, [scorePlayerOne, scorePlayerTwo]);

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
            scorePlayerOne={pointsPlayerOne}
            scorePlayerTwo={pointsPlayerTwo}
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
