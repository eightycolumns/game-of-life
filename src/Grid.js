import React from "react";

class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.cellSize = 4;

    this.gridWidth = this.props.nCols * this.cellSize + this.props.nCols + 1;
    this.gridHeight = this.props.nRows * this.cellSize + this.props.nRows + 1;
  }

  componentDidMount() {
    this.paintGrid();
  }

  componentDidUpdate() {
    this.paintGrid();
  }

  paintGrid() {
    const nRows = this.props.nRows;
    const nCols = this.props.nCols;
    const prevGrid = this.props.prevGrid;
    const grid = this.props.grid;
    const palette = this.props.palette;

    const context = this.refs.canvas.getContext("2d");

    for (let i = 0; i < nRows; i += 1) {
      for (let j = 0; j < nCols; j += 1) {
        if (prevGrid === undefined || prevGrid[i][j] !== grid[i][j]) {
          this.paintCell(
            context,
            j * this.cellSize + j + 1,
            i * this.cellSize + i + 1,
            grid[i][j] === 0 ? "#ffffff" : palette.randomColor()
          );
        }
      }
    }
  }

  paintCell(context, x, y, color) {
    context.fillStyle = color;
    context.fillRect(x, y, this.cellSize, this.cellSize);
  }

  render() {
    return (
      <div className="Grid">
        <canvas ref="canvas" width={this.gridWidth} height={this.gridHeight} />
      </div>
    );
  }
}

export default Grid;
