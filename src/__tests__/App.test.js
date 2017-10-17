import {render, shallow} from "enzyme";
import React from "react";

import App from "../App";

describe("an App component", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("renders correctly", () => {
    const app = render(<App />);
    expect(app).toMatchSnapshot();
  });
});
