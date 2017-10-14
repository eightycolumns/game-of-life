import React from "react";

import {initialGrid} from "./Game";
import Grid from "./Grid";

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
      <Grid nRows={this.nRows} nCols={this.nCols} grid={this.state.grid} />
    );
  }
}

export default App;
