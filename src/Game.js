function nextGrid(grid) {
  const nextGrid = [];
  const wrappedGrid = copyGrid(grid);

  wrappedGrid.splice(0, 0, wrappedGrid[wrappedGrid.length - 1].slice());
  wrappedGrid.push(wrappedGrid[1].slice());

  wrappedGrid.forEach(row => {
    row.splice(0, 0, row[row.length - 1]);
    row.push(row[1]);
  });

  for (let i = 0; i < grid.length; i += 1) {
    nextGrid.push([]);

    for (let j = 0; j < grid[i].length; j += 1) {
      nextGrid[i][j] = nextCellValue(wrappedGrid, i + 1, j + 1);
    }
  }

  return nextGrid;
}

function copyGrid(grid) {
  return grid.map(row => row.slice());
}

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

export {nextGrid, nextCellValue};
