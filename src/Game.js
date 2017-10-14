function nextCellValue(grid, row, col) {
  const sum = (
    grid[row - 1][col - 1] +
    grid[row - 1][col    ] +
    grid[row - 1][col + 1] +
    grid[row    ][col - 1] +
    grid[row    ][col + 1] +
    grid[row + 1][col - 1] +
    grid[row + 1][col    ] +
    grid[row + 1][col + 1]
  );

  if (grid[row][col] === 0) {
    if (sum === 3) {
      return 1;
    } else {
      return 0;
    }
  } else if (grid[row][col] === 1) {
    if (sum < 2) {
      return 0;
    } else if (sum === 2) {
      return 1;
    }
  }
}

export {nextCellValue};
