import React from "react";

import {initialGrid, nextGrid} from "./Game";
import Grid from "./Grid";
import StartButton from "./StartButton";

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
  }

  startGame() {
    setTimeout(this.tick, this.interval);
  }

  tick() {
    this.setState({
      grid: nextGrid(this.state.grid)
    });

    setTimeout(this.tick, this.interval);
  }

  render() {
    return (
      <div className="App">
        <Grid nRows={this.nRows} nCols={this.nCols} grid={this.state.grid} />
        <StartButton onClick={this.startGame} />
      </div>
    );
  }
}

export default App;
