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
});
