import Enzyme, {render} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import Game from "./Game";
import Grid from "./Grid";
import Palette from "./Palette";

Enzyme.configure({
  adapter: new Adapter()
});

describe("a Grid component", () => {
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
