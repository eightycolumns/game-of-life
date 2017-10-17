import {shallow} from "enzyme";
import React from "react";

import StopButton from "./StopButton";

describe("a StopButton component", () => {
  it("renders correctly", () => {
    const stopButton = shallow(
      <StopButton onClick={function stopGame() {}} />
    );

    expect(stopButton).toMatchSnapshot();
  });
});
