class Palette {}

function randomInteger(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export default Palette;
export {randomInteger};
