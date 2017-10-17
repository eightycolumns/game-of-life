import {shallow} from "enzyme";
import React from "react";

import StartButton from "./StartButton";

describe("a StartButton component", () => {
  it("renders correctly", () => {
    const startButton = shallow(
      <StartButton onClick={function startGame() {}} />
    );

    expect(startButton).toMatchSnapshot();
  });
});
