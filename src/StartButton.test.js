import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import StartButton from "./StartButton";

Enzyme.configure({
  adapter: new Adapter()
});

describe("a StartButton component", () => {
  it("renders correctly", () => {
    const startButton = shallow(
      <StartButton onClick={function startGame() {}} />
    );

    expect(startButton).toMatchSnapshot();
  });
});
