import { describe, expect, it } from "vitest";
import { weitzmannRegions } from "../../graphs/weitzmann-regions";

describe("tonnetz-tests", () => {
  it("Weitzmann Regions", () => {
    expect(weitzmannRegions(0)).toEqual([
      [0, 4, 8],
      [4, 8, 11],
      [9, 0, 4],
      [0, 4, 7],
      [5, 8, 0],
      [8, 0, 3],
      [1, 4, 8],
    ]);
    expect(weitzmannRegions(2)).toEqual([
      [2, 6, 10],
      [6, 10, 1],
      [11, 2, 6],
      [2, 6, 9],
      [7, 10, 2],
      [10, 2, 5],
      [3, 6, 10],
    ]);
  });
});
