import * as React from "react";
import { hot } from 'react-hot-loader/root'
import { Player } from './components/Player';
import { Button } from './components/Button';
import { Game } from './components/Game';
import './App.css';

const App = () => {

  const className = '';
  const userId = null;
  const [userNamePlayerOne, setUserNamePlayerOne] = React.useState('');
  const [userNamePlayerTwo, setUserNamePlayerTwo] = React.useState('');
  const [showGame, setShowGame] = React.useState(false);

  const onChangeUserNamePlayerOne = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserNamePlayerOne(event.target.value);
  }
  const onChangeUserNamePlayerTwo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserNamePlayerTwo(event.target.value);
  }

  const onResetPlayer = () => {
    setUserNamePlayerOne('');
    setUserNamePlayerTwo('');
  }
  const onShowGame = () => setShowGame(true)

  return (
    <div className="App">
      <div>
        <Player currentUserName={userNamePlayerOne}
            onChangeUserName={onChangeUserNamePlayerOne}
        />
         <Player currentUserName={userNamePlayerTwo}
            onChangeUserName={onChangeUserNamePlayerTwo}
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
            userNamePlayerOne={userNamePlayerOne}
            userNamePlayerTwo={userNamePlayerTwo}
          />
        }
      </div>
    </div>
  );
}

export default hot(App);
