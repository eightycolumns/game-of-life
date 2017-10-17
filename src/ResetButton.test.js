import {shallow} from "enzyme";
import React from "react";

import ResetButton from "./ResetButton";

describe("a ResetButton component", () => {
  it("renders correctly", () => {
    const resetButton = shallow(
      <ResetButton onClick={function resetGame() {}} />
    );

    expect(resetButton).toMatchSnapshot();
  });
});
