import {randomLimits, randomInteger} from "./Palette";

describe("a random lower limit", () => {
  it("is less than or equal to its corresponding upper limit", () => {
    const limits = randomLimits();
    expect(limits.lower).toBeLessThanOrEqual(limits.upper);
  });
});

describe("a random upper limit", () => {
  it("is greater than or equal to its corresponding lower limit", () => {
    const limits = randomLimits();
    expect(limits.upper).toBeGreaterThanOrEqual(limits.lower);
  });
});

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
