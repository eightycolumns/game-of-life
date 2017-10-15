import React from "react";

import {initialGrid} from "./Game";
import Grid from "./Grid";
import StartButton from "./StartButton";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.nRows = 100;
    this.nCols = 162;

    this.state = {
      grid: initialGrid(this.nRows, this.nCols)
    };
  }

  render() {
    return (
      <div className="App">
        <Grid nRows={this.nRows} nCols={this.nCols} grid={this.state.grid} />
        <StartButton />
      </div>
    );
  }
}

export default App;
