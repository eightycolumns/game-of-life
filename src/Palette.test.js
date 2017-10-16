import {randomInteger} from "./Palette";

describe("a random integer", () => {
  it("is greater than or equal to the min value", () => {
    const int = randomInteger(0, 255);
    expect(int).toBeGreaterThanOrEqual(0);
  });

  it("is less than or equal to the max value", () => {
    const int = randomInteger(0, 255);
    expect(int).toBeLessThanOrEqual(255);
  });
});
