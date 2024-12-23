import { describe, expect, it } from "vitest";
import { boretzRegions } from "../../graphs/boretz-regions";

describe("tonnetz-tests", () => {
  it("Boretz Regions", () => {
    expect(boretzRegions(0)).toEqual([
      [0, 3, 6, 9],
      [11, 3, 6, 9],
      [3, 6, 9, 1],
      [2, 6, 9, 0],
      [6, 9, 0, 4],
      [5, 9, 0, 3],
      [9, 0, 3, 7],
      [8, 0, 3, 6],
      [0, 3, 6, 10],
    ]);

    expect(boretzRegions(2)).toEqual([
      [2, 5, 8, 11],
      [1, 5, 8, 11],
      [5, 8, 11, 3],
      [4, 8, 11, 2],
      [8, 11, 2, 6],
      [7, 11, 2, 5],
      [11, 2, 5, 9],
      [10, 2, 5, 8],
      [2, 5, 8, 0],
    ]);
  });
});
