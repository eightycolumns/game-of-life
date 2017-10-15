import React from "react";

import {initialGrid, nextGrid} from "./Game";
import Grid from "./Grid";
import StartButton from "./StartButton";
import StopButton from "./StopButton";
import ResetButton from "./ResetButton";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.frameRate = 24;
    this.interval = 1000 / this.frameRate;

    this.nRows = 100;
    this.nCols = 162;

    this.state = {
      grid: initialGrid(this.nRows, this.nCols)
    };

    this.startGame = this.startGame.bind(this);
    this.tick = this.tick.bind(this);
    this.stopGame = this.stopGame.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  startGame() {
    this.setState({
      timeoutID: setTimeout(this.tick, this.interval)
    });
  }

  tick() {
    this.setState({
      grid: nextGrid(this.state.grid),
      timeoutID: setTimeout(this.tick, this.interval)
    });
  }

  stopGame() {
    clearTimeout(this.state.timeoutID);
  }

  resetGame() {
    this.stopGame();

    this.setState({
      grid: initialGrid(this.nRows, this.nCols)
    });
  }

  render() {
    return (
      <div className="App">
        <Grid nRows={this.nRows} nCols={this.nCols} grid={this.state.grid} />
        <StartButton onClick={this.startGame} />
        <StopButton onClick={this.stopGame} />
        <ResetButton onClick={this.resetGame} />
      </div>
    );
  }
}

export default App;
