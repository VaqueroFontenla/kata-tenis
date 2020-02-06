import * as React from "react";
import { hot } from 'react-hot-loader/root'
import { Player } from './components/Player';
import { Button } from './components/Button';
import { Game } from './components/Game';
import './App.css';

const App = () => {

  const className = '';
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
      <div>
        <Player currentUserName={namePlayerOne}
            onChangeUserName={onChangenamePlayerOne}
        />
         <Player currentUserName={namePlayerTwo}
            onChangeUserName={onChangenamePlayerTwo}
        />

      </div>
      <div>
        <Button 
          onClick={onShowGame}
          className={className}> 
            Start game 
        </Button>
        <Button 
          onClick={onResetPlayer}
          className={className}> 
            Reset Player  
        </Button>
      </div>

      <div>
        {showGame && 
          <Game 
            namePlayerOne={namePlayerOne}
            namePlayerTwo={namePlayerTwo}
          />
        }
      </div>
    </div>
  );
}

export default hot(App);
