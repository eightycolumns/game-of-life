import Enzyme, {render} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";

import App from "./App";

Enzyme.configure({
  adapter: new Adapter()
});

describe("a App component", () => {
  it("renders correctly", () => {
    const app = render(
      <App />
    );

    expect(app).toMatchSnapshot();
  });
});
