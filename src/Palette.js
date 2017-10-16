class Palette {}

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

export default Palette;
export {randomLimits, randomInteger};
