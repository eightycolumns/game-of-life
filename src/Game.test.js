import {nextCellValue} from "./Game";

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
