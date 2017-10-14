function nextCellValue(grid, row, col) {
  const sum = (
    grid[row - 1][col - 1] +
    grid[row - 1][col    ] +
    grid[row - 1][col + 1] +
    grid[row    ][col - 1] +
    grid[row    ][col    ] +
    grid[row    ][col + 1] +
    grid[row + 1][col - 1] +
    grid[row + 1][col    ] +
    grid[row + 1][col + 1]
  );

  if (sum === 3) {
    return 1;
  } else if (sum === 4) {
    return grid[row][col];
  } else {
    return 0;
  }
}

export {nextCellValue};
