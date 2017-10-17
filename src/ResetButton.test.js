import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import ResetButton from "./ResetButton";

Enzyme.configure({
  adapter: new Adapter()
});

describe("a ResetButton component", () => {
  it("renders correctly", () => {
    const resetButton = shallow(
      <ResetButton onClick={function resetGame() {}} />
    );

    expect(resetButton).toMatchSnapshot();
  });
});
