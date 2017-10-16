class Palette {
  constructor() {
    this.rLimits = randomLimits();
    this.gLimits = randomLimits();
    this.bLimits = randomLimits();
  }

  randomColor() {
    let rComponent = randomInteger(this.rLimits.lower, this.rLimits.upper);
    rComponent = decimalToHexadecimal(rComponent);

    let gComponent = randomInteger(this.gLimits.lower, this.gLimits.upper);
    gComponent = decimalToHexadecimal(gComponent);

    let bComponent = randomInteger(this.bLimits.lower, this.bLimits.upper);
    bComponent = decimalToHexadecimal(bComponent);

    return `#${rComponent}${gComponent}${bComponent}`;
  }
}

function randomLimits() {
  const randomIntegerOne = randomInteger(0, 255);
  const randomIntegerTwo = randomInteger(0, 255);

  return {
    lower: Math.min(randomIntegerOne, randomIntegerTwo),
    upper: Math.max(randomIntegerOne, randomIntegerTwo)
  };
}

function randomInteger(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function decimalToHexadecimal(d) {
  return (d < 16 ? "0" : "") + d.toString(16);
}

export default Palette;
export {randomLimits, randomInteger};
