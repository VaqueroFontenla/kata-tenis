import * as React from "react";
import { hot } from 'react-hot-loader/root'
import { Player } from './components/Player';
import { Button } from './components/Button';
import './App.css';

const App = () => {

  const className = '';
  const [userName, setUSerName] = React.useState('');
  const [game, setGame] = React.useState(false);

  const onChangeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUSerName(event.target.value)
  }

  const onResetPlayer = () => setUSerName('');
  const onShowGame = () => setGame(true)

  return (
    <div className="App">
      <div>
        <Player currentUserName={userName}
          onChangeUserName={onChangeUserName}
        />
        <Player currentUserName={userName}
          onChangeUserName={onChangeUserName}
        />

      </div>
      <div>
        <Button onClick={onShowGame}
          className={className}> Start game </Button>
        <Button onClick={onResetPlayer}
          className={className}> Reset Player </Button>
      </div>

    </div>
  );
}

export default hot(App);
