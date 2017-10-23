import React from "react";

import Game from "./Game";
import Grid from "./Grid";
import Palette from "./Palette";
import ResetButton from "./ResetButton";
import StartButton from "./StartButton";
import StopButton from "./StopButton";

const FRAME_RATE = 24;
const INTERVAL = 1000 / FRAME_RATE;

const N_ROWS = 100;
const N_COLS = 162;

const GameStatus = {
  STOPPED: 0,
  STARTED: 1
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.gameStatus = GameStatus.STOPPED;

    this.palette = new Palette();

    this.state = {
      prevGrid: undefined,
      grid: Game.initialGrid(N_ROWS, N_COLS)
    };

    this.startGame = this.startGame.bind(this);
    this.tick = this.tick.bind(this);
    this.stopGame = this.stopGame.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  startGame() {
    if (this.gameStatus === GameStatus.STOPPED) {
      this.timeoutID = setTimeout(this.tick, INTERVAL);
      this.gameStatus = GameStatus.STARTED;
    }
  }

  tick() {
    this.setState({
      prevGrid: this.state.grid,
      grid: Game.nextGrid(this.state.grid)
    });

    this.timeoutID = setTimeout(this.tick, INTERVAL);
  }

  stopGame() {
    if (this.gameStatus === GameStatus.STARTED) {
      clearTimeout(this.timeoutID);
      this.gameStatus = GameStatus.STOPPED;
    }
  }

  resetGame() {
    this.stopGame();

    this.palette = new Palette();

    this.setState({
      prevGrid: undefined,
      grid: Game.initialGrid(N_ROWS, N_COLS)
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Conway's Game of Life</h1>
        </header>

        <Grid
          nRows={N_ROWS}
          nCols={N_COLS}
          palette={this.palette}
          prevGrid={this.state.prevGrid}
          grid={this.state.grid}
        />

        <div className="buttons">
          <StartButton onClick={this.startGame} />
          <StopButton onClick={this.stopGame} />
          <ResetButton onClick={this.resetGame} />
        </div>
      </div>
    );
  }
}

export default App;
