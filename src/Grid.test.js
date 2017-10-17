import {render} from "enzyme";
import React from "react";

import Game from "./Game";
import Grid from "./Grid";
import Palette from "./Palette";

describe("a Grid component", () => {
  it("renders without crashing", () => {
    const nRows = 3;
    const nCols = 3;

    render(
      <Grid
        nRows={nRows}
        nCols={nCols}
        prevGrid={undefined}
        grid={Game.initialGrid(nRows, nCols)}
        palette={new Palette()}
      />
    );
  });

  it("renders correctly", () => {
    const nRows = 3;
    const nCols = 3;

    const grid = render(
      <Grid
        nRows={nRows}
        nCols={nCols}
        prevGrid={undefined}
        grid={Game.initialGrid(nRows, nCols)}
        palette={new Palette()}
      />
    );

    expect(grid).toMatchSnapshot();
  });
});
