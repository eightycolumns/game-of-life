import React from "react";

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.cellSize = 4;
  }

  componentDidMount() {
    const canvas = document.querySelector("canvas");

    canvas.width = this.props.nCols * this.cellSize + this.props.nCols + 1;
    canvas.height = this.props.nRows * this.cellSize + this.props.nRows + 1;

    const context = canvas.getContext("2d");

    this.paintGrid(context);
  }

  paintGrid(context) {
    for (let i = 0; i < this.props.nRows; i += 1) {
      for (let j = 0; j < this.props.nCols; j += 1) {
        this.paintCell(
          context,
          j * this.cellSize + j + 1,
          i * this.cellSize + i + 1,
          this.props.grid[i][j] === 0 ? "#fff" : "#333"
        );
      }
    }
  }

  paintCell(context, x, y, color) {
    context.fillStyle = color;
    context.fillRect(x, y, this.cellSize, this.cellSize);
  }

  render() {
    return (
      <canvas></canvas>
    );
  }
}

export default Grid;
