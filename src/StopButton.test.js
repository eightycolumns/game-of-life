import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import StopButton from "./StopButton";

Enzyme.configure({
  adapter: new Adapter()
});

describe("a StopButton component", () => {
  it("renders correctly", () => {
    const stopButton = shallow(
      <StopButton onClick={function stopGame() {}} />
    );

    expect(stopButton).toMatchSnapshot();
  });
});
