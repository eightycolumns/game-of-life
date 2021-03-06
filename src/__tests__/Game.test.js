import Game, {nextCellValue} from "../Game";

describe("a dead cell", () => {
  describe("with 0 live neighbors", () => {
    it("stays dead", () => {
      const grid = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ];

      expect(nextCellValue(grid, 1, 1)).toBe(0);
    });
  });

  describe("with 2 live neighbors", () => {
    it("stays dead", () => {
      const grid = [
        [1, 1, 0],
        [0, 0, 0],
        [0, 0, 0]
      ];

      expect(nextCellValue(grid, 1, 1)).toBe(0);
    });
  });

  describe("with 3 live neighbors", () => {
    it("is born", () => {
      const grid = [
        [1, 1, 1],
        [0, 0, 0],
        [0, 0, 0]
      ];

      expect(nextCellValue(grid, 1, 1)).toBe(1);
    });
  });

  describe("with 4 live neighbors", () => {
    it("stays dead", () => {
      const grid = [
        [1, 1, 1],
        [1, 0, 0],
        [0, 0, 0]
      ];

      expect(nextCellValue(grid, 1, 1)).toBe(0);
    });
  });

  describe("with 8 live neighbors", () => {
    it("stays dead", () => {
      const grid = [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
      ];

      expect(nextCellValue(grid, 1, 1)).toBe(0);
    });
  });
});

describe("a live cell", () => {
  describe("with 0 live neighbors", () => {
    it("dies", () => {
      const grid = [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
      ];

      expect(nextCellValue(grid, 1, 1)).toBe(0);
    });
  });

  describe("with 1 live neighbor", () => {
    it("dies", () => {
      const grid = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
      ];

      expect(nextCellValue(grid, 1, 1)).toBe(0);
    });
  });

  describe("with 2 live neighbors", () => {
    it("stays alive", () => {
      const grid = [
        [1, 1, 0],
        [0, 1, 0],
        [0, 0, 0]
      ];

      expect(nextCellValue(grid, 1, 1)).toBe(1);
    });
  });

  describe("with 3 live neighbors", () => {
    it("stays alive", () => {
      const grid = [
        [1, 1, 1],
        [0, 1, 0],
        [0, 0, 0]
      ];

      expect(nextCellValue(grid, 1, 1)).toBe(1);
    });
  });

  describe("with 4 live neighbors", () => {
    it("dies", () => {
      const grid = [
        [1, 1, 1],
        [1, 1, 0],
        [0, 0, 0]
      ];

      expect(nextCellValue(grid, 1, 1)).toBe(0);
    });
  });

  describe("with 8 live neighbors", () => {
    it("dies", () => {
      const grid = [
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1]
      ];

      expect(nextCellValue(grid, 1, 1)).toBe(0);
    });
  });
});

describe("a block", () => {
  it("is stable", () => {
    const grid = [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0]
    ];

    expect(Game.nextGrid(grid)).toEqual(grid);
  });
});

describe("a beehive", () => {
  it("is stable", () => {
    const grid = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 0, 0],
      [0, 1, 0, 0, 1, 0],
      [0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0]
    ];

    expect(Game.nextGrid(grid)).toEqual(grid);
  });
});

describe("a blinker", () => {
  it("is a period 2 oscillator", () => {
    const generation0 = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ];

    const generation1 = Game.nextGrid(generation0);

    expect(generation1).toEqual([
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0]
    ]);

    const generation2 = Game.nextGrid(generation1);

    expect(generation2).toEqual(generation0);
  });
});

describe("a pulsar", () => {
  it("is a period 3 oscillator", () => {
    const generation0 = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];


    const generation1 = Game.nextGrid(generation0);

    expect(generation1).toEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0],
      [0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
      [0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]);

    const generation2 = Game.nextGrid(generation1);

    expect(generation2).toEqual([
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0],
      [0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0],
      [0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0],
      [0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);

    const generation3 = Game.nextGrid(generation2);

    expect(generation3).toEqual(generation0);
  });
});

describe("the grid", () => {
  it("is wrapped vertically", () => {
    const grid = [
      [0, 1, 0, 1, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0]
    ];

    expect(Game.nextGrid(grid)).toEqual([
      [0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 0]
    ]);
  });

  it("is wrapped horizontally", () => {
    const grid = [
      [0, 0, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 1],
      [1, 0, 0, 0],
      [0, 0, 0, 0]
    ];

    expect(Game.nextGrid(grid)).toEqual([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 0, 0, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]);
  });
});
