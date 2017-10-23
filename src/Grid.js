import React from "react";

const CELL_SIZE = 4;

class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.gridWidth = this.props.nCols * CELL_SIZE + this.props.nCols + 1;
    this.gridHeight = this.props.nRows * CELL_SIZE + this.props.nRows + 1;
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
    const palette = this.props.palette;
    const prevGrid = this.props.prevGrid;
    const grid = this.props.grid;

    const context = this.refs.canvas.getContext("2d");

    for (let i = 0; i < nRows; i += 1) {
      for (let j = 0; j < nCols; j += 1) {
        if (prevGrid === undefined || prevGrid[i][j] !== grid[i][j]) {
          this.paintCell(
            context,
            j * CELL_SIZE + j + 1,
            i * CELL_SIZE + i + 1,
            grid[i][j] === 0 ? "#ffffff" : palette.randomColor()
          );
        }
      }
    }
  }

  paintCell(context, x, y, color) {
    context.fillStyle = color;
    context.fillRect(x, y, CELL_SIZE, CELL_SIZE);
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
