import {render} from "enzyme";
import React from "react";

import App from "./App";

describe("an App component", () => {
  it("renders correctly", () => {
    const app = render(<App />);
    expect(app).toMatchSnapshot();
  });
});
