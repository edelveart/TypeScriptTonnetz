import { describe, expect, it } from "vitest";
import { seventhsTransform, transform } from "../../ts-tonnetz";
import { l1d, l4m, p1M, p2m, p3d, p4M, p5d, r2M, r3m, r5d, rr5d, z5d } from "../../transformation-groups/st-transformations";

describe("tonnetz-tests", () => {
  it('tonnetzTransformation "p,r,l" and "involutions" to "normal form"', () => {
    expect(transform([0, 4, 7], "p")).toEqual([0, 3, 7]);
    expect(transform([0, 3, 7], "p")).toEqual([0, 4, 7]);
    expect(transform([0, 4, 7], "pp")).toEqual([0, 4, 7]);
    expect(transform([0, 3, 7], "pp")).toEqual([0, 3, 7]);

    expect(transform([0, 4, 7], "l")).toEqual([4, 7, 11]);
    expect(transform([0, 3, 7], "l")).toEqual([8, 0, 3]);
    expect(transform([0, 4, 7], "ll")).toEqual([0, 4, 7]);
    expect(transform([0, 3, 7], "ll")).toEqual([0, 3, 7]);
  });

  it('tonnetzTransformations "p" compositions to "normal form"', () => {
    expect(transform([0, 4, 7], "pr")).toEqual([3, 7, 10]);
    expect(transform([0, 3, 7], "pr")).toEqual([9, 0, 4]);

    expect(transform([0, 4, 7], "pl")).toEqual([8, 0, 3]);
    expect(transform([0, 3, 7], "pl")).toEqual([4, 7, 11]);

    expect(transform([0, 4, 7], "rp")).toEqual([9, 1, 4]);
    expect(transform([0, 3, 7], "rp")).toEqual([3, 6, 10]);

    expect(transform([0, 4, 7], "lp")).toEqual([4, 8, 11]);
    expect(transform([0, 3, 7], "lp")).toEqual([8, 11, 3]);
  });

  it('tonnetzTransformations "rl-lr" compositions to "normal form"', () => {
    expect(transform([0, 4, 7], "rl")).toEqual([5, 9, 0]);
    expect(transform([1, 5, 8], "rl")).toEqual([6, 10, 1]);
    expect(transform([2, 6, 9], "rl")).toEqual([7, 11, 2]);
    expect(transform([3, 7, 10], "rl")).toEqual([8, 0, 3]);
    expect(transform([4, 8, 11], "rl")).toEqual([9, 1, 4]);
    expect(transform([5, 9, 0], "rl")).toEqual([10, 2, 5]);
    expect(transform([6, 10, 1], "rl")).toEqual([11, 3, 6]);
    expect(transform([7, 11, 2], "rl")).toEqual([0, 4, 7]);
    expect(transform([8, 0, 3], "rl")).toEqual([1, 5, 8]);
    expect(transform([9, 1, 4], "rl")).toEqual([2, 6, 9]);
    expect(transform([10, 2, 5], "rl")).toEqual([3, 7, 10]);
    expect(transform([11, 3, 6], "rl")).toEqual([4, 8, 11]);

    expect(transform([0, 3, 7], "rl")).toEqual([7, 10, 2]);
    expect(transform([1, 4, 8], "rl")).toEqual([8, 11, 3]);
    expect(transform([2, 5, 9], "rl")).toEqual([9, 0, 4]);
    expect(transform([3, 6, 10], "rl")).toEqual([10, 1, 5]);
    expect(transform([4, 7, 11], "rl")).toEqual([11, 2, 6]);
    expect(transform([5, 8, 0], "rl")).toEqual([0, 3, 7]);
    expect(transform([6, 9, 1], "rl")).toEqual([1, 4, 8]);
    expect(transform([7, 10, 2], "rl")).toEqual([2, 5, 9]);
    expect(transform([8, 11, 3], "rl")).toEqual([3, 6, 10]);
    expect(transform([9, 0, 4], "rl")).toEqual([4, 7, 11]);
    expect(transform([10, 1, 5], "rl")).toEqual([5, 8, 0]);
    expect(transform([11, 2, 6], "rl")).toEqual([6, 9, 1]);

    expect(transform([0, 4, 7], "lr")).toEqual([7, 11, 2]);
    expect(transform([1, 5, 8], "lr")).toEqual([8, 0, 3]);
    expect(transform([2, 6, 9], "lr")).toEqual([9, 1, 4]);
    expect(transform([3, 7, 10], "lr")).toEqual([10, 2, 5]);
    expect(transform([4, 8, 11], "lr")).toEqual([11, 3, 6]);
    expect(transform([5, 9, 0], "lr")).toEqual([0, 4, 7]);
    expect(transform([6, 10, 1], "lr")).toEqual([1, 5, 8]);
    expect(transform([7, 11, 2], "lr")).toEqual([2, 6, 9]);
    expect(transform([8, 0, 3], "lr")).toEqual([3, 7, 10]);
    expect(transform([9, 1, 4], "lr")).toEqual([4, 8, 11]);
    expect(transform([10, 2, 5], "lr")).toEqual([5, 9, 0]);
    expect(transform([11, 3, 6], "lr")).toEqual([6, 10, 1]);

    expect(transform([0, 3, 7], "lr")).toEqual([5, 8, 0]);
    expect(transform([1, 4, 8], "lr")).toEqual([6, 9, 1]);
    expect(transform([2, 5, 9], "lr")).toEqual([7, 10, 2]);
    expect(transform([3, 6, 10], "lr")).toEqual([8, 11, 3]);
    expect(transform([4, 7, 11], "lr")).toEqual([9, 0, 4]);
    expect(transform([5, 8, 0], "lr")).toEqual([10, 1, 5]);
    expect(transform([6, 9, 1], "lr")).toEqual([11, 2, 6]);
    expect(transform([7, 10, 2], "lr")).toEqual([0, 3, 7]);
    expect(transform([8, 11, 3], "lr")).toEqual([1, 4, 8]);
    expect(transform([9, 0, 4], "lr")).toEqual([2, 5, 9]);
    expect(transform([10, 1, 5], "lr")).toEqual([3, 6, 10]);
    expect(transform([11, 2, 6], "lr")).toEqual([4, 7, 11]);
  });

  it('tonnetzTransformations "prl" compositions to "normal form"', () => {
    expect(transform([0, 4, 7], "prl")).toEqual([7, 10, 2]);
    expect(transform([1, 5, 8], "prl")).toEqual([8, 11, 3]);
    expect(transform([2, 6, 9], "prl")).toEqual([9, 0, 4]);
    expect(transform([3, 7, 10], "prl")).toEqual([10, 1, 5]);
    expect(transform([4, 8, 11], "prl")).toEqual([11, 2, 6]);
    expect(transform([5, 9, 0], "prl")).toEqual([0, 3, 7]);
    expect(transform([6, 10, 1], "prl")).toEqual([1, 4, 8]);
    expect(transform([7, 11, 2], "prl")).toEqual([2, 5, 9]);
    expect(transform([8, 0, 3], "prl")).toEqual([3, 6, 10]);
    expect(transform([9, 1, 4], "prl")).toEqual([4, 7, 11]);
    expect(transform([10, 2, 5], "prl")).toEqual([5, 8, 0]);
    expect(transform([11, 3, 6], "prl")).toEqual([6, 9, 1]);

    expect(transform([0, 3, 7], "prl")).toEqual([5, 9, 0]);
    expect(transform([1, 4, 8], "prl")).toEqual([6, 10, 1]);
    expect(transform([2, 5, 9], "prl")).toEqual([7, 11, 2]);
    expect(transform([3, 6, 10], "prl")).toEqual([8, 0, 3]);
    expect(transform([4, 7, 11], "prl")).toEqual([9, 1, 4]);
    expect(transform([5, 8, 0], "prl")).toEqual([10, 2, 5]);
    expect(transform([6, 9, 1], "prl")).toEqual([11, 3, 6]);
    expect(transform([7, 10, 2], "prl")).toEqual([0, 4, 7]);
    expect(transform([8, 11, 3], "prl")).toEqual([1, 5, 8]);
    expect(transform([9, 0, 4], "prl")).toEqual([2, 6, 9]);
    expect(transform([10, 1, 5], "prl")).toEqual([3, 7, 10]);
    expect(transform([11, 2, 6], "prl")).toEqual([4, 8, 11]);

    expect(transform([0, 4, 7], "lrp")).toEqual([7, 10, 2]);
    expect(transform([1, 5, 8], "lrp")).toEqual([8, 11, 3]);
    expect(transform([2, 6, 9], "lrp")).toEqual([9, 0, 4]);
    expect(transform([3, 7, 10], "lrp")).toEqual([10, 1, 5]);
    expect(transform([4, 8, 11], "lrp")).toEqual([11, 2, 6]);
    expect(transform([5, 9, 0], "lrp")).toEqual([0, 3, 7]);
    expect(transform([6, 10, 1], "lrp")).toEqual([1, 4, 8]);
    expect(transform([7, 11, 2], "lrp")).toEqual([2, 5, 9]);
    expect(transform([8, 0, 3], "lrp")).toEqual([3, 6, 10]);
    expect(transform([9, 1, 4], "lrp")).toEqual([4, 7, 11]);
    expect(transform([10, 2, 5], "lrp")).toEqual([5, 8, 0]);
    expect(transform([11, 3, 6], "lrp")).toEqual([6, 9, 1]);

    expect(transform([0, 3, 7], "lrp")).toEqual([5, 9, 0]);
    expect(transform([1, 4, 8], "lrp")).toEqual([6, 10, 1]);
    expect(transform([2, 5, 9], "lrp")).toEqual([7, 11, 2]);
    expect(transform([3, 6, 10], "lrp")).toEqual([8, 0, 3]);
    expect(transform([4, 7, 11], "lrp")).toEqual([9, 1, 4]);
    expect(transform([5, 8, 0], "lrp")).toEqual([10, 2, 5]);
    expect(transform([6, 9, 1], "lrp")).toEqual([11, 3, 6]);
    expect(transform([7, 10, 2], "lrp")).toEqual([0, 4, 7]);
    expect(transform([8, 11, 3], "lrp")).toEqual([1, 5, 8]);
    expect(transform([9, 0, 4], "lrp")).toEqual([2, 6, 9]);
    expect(transform([10, 1, 5], "lrp")).toEqual([3, 7, 10]);
    expect(transform([11, 2, 6], "lrp")).toEqual([4, 8, 11]);

    expect(transform([0, 4, 7], "plr")).toEqual([5, 8, 0]);
    expect(transform([1, 5, 8], "plr")).toEqual([6, 9, 1]);
    expect(transform([2, 6, 9], "plr")).toEqual([7, 10, 2]);
    expect(transform([3, 7, 10], "plr")).toEqual([8, 11, 3]);
    expect(transform([4, 8, 11], "plr")).toEqual([9, 0, 4]);
    expect(transform([5, 9, 0], "plr")).toEqual([10, 1, 5]);
    expect(transform([6, 10, 1], "plr")).toEqual([11, 2, 6]);
    expect(transform([7, 11, 2], "plr")).toEqual([0, 3, 7]);
    expect(transform([8, 0, 3], "plr")).toEqual([1, 4, 8]);
    expect(transform([9, 1, 4], "plr")).toEqual([2, 5, 9]);
    expect(transform([10, 2, 5], "plr")).toEqual([3, 6, 10]);
    expect(transform([11, 3, 6], "plr")).toEqual([4, 7, 11]);

    expect(transform([0, 3, 7], "plr")).toEqual([7, 11, 2]);
    expect(transform([1, 4, 8], "plr")).toEqual([8, 0, 3]);
    expect(transform([2, 5, 9], "plr")).toEqual([9, 1, 4]);
    expect(transform([3, 6, 10], "plr")).toEqual([10, 2, 5]);
    expect(transform([4, 7, 11], "plr")).toEqual([11, 3, 6]);
    expect(transform([5, 8, 0], "plr")).toEqual([0, 4, 7]);
    expect(transform([6, 9, 1], "plr")).toEqual([1, 5, 8]);
    expect(transform([7, 10, 2], "plr")).toEqual([2, 6, 9]);
    expect(transform([8, 11, 3], "plr")).toEqual([3, 7, 10]);
    expect(transform([9, 0, 4], "plr")).toEqual([4, 8, 11]);
    expect(transform([10, 1, 5], "plr")).toEqual([5, 9, 0]);
    expect(transform([11, 2, 6], "plr")).toEqual([6, 10, 1]);

    expect(transform([0, 4, 7], "rlp")).toEqual([5, 8, 0]);
    expect(transform([1, 5, 8], "rlp")).toEqual([6, 9, 1]);
    expect(transform([2, 6, 9], "rlp")).toEqual([7, 10, 2]);
    expect(transform([3, 7, 10], "rlp")).toEqual([8, 11, 3]);
    expect(transform([4, 8, 11], "rlp")).toEqual([9, 0, 4]);
    expect(transform([5, 9, 0], "rlp")).toEqual([10, 1, 5]);
    expect(transform([6, 10, 1], "rlp")).toEqual([11, 2, 6]);
    expect(transform([7, 11, 2], "rlp")).toEqual([0, 3, 7]);
    expect(transform([8, 0, 3], "rlp")).toEqual([1, 4, 8]);
    expect(transform([9, 1, 4], "rlp")).toEqual([2, 5, 9]);
    expect(transform([10, 2, 5], "rlp")).toEqual([3, 6, 10]);
    expect(transform([11, 3, 6], "rlp")).toEqual([4, 7, 11]);

    expect(transform([0, 3, 7], "rlp")).toEqual([7, 11, 2]);
    expect(transform([1, 4, 8], "rlp")).toEqual([8, 0, 3]);
    expect(transform([2, 5, 9], "rlp")).toEqual([9, 1, 4]);
    expect(transform([3, 6, 10], "rlp")).toEqual([10, 2, 5]);
    expect(transform([4, 7, 11], "rlp")).toEqual([11, 3, 6]);
    expect(transform([5, 8, 0], "rlp")).toEqual([0, 4, 7]);
    expect(transform([6, 9, 1], "rlp")).toEqual([1, 5, 8]);
    expect(transform([7, 10, 2], "rlp")).toEqual([2, 6, 9]);
    expect(transform([8, 11, 3], "rlp")).toEqual([3, 7, 10]);
    expect(transform([9, 0, 4], "rlp")).toEqual([4, 8, 11]);
    expect(transform([10, 1, 5], "rlp")).toEqual([5, 9, 0]);
    expect(transform([11, 2, 6], "rlp")).toEqual([6, 10, 1]);

    expect(transform([0, 4, 7], "rpl")).toEqual([1, 4, 8]);
    expect(transform([1, 5, 8], "rpl")).toEqual([2, 5, 9]);
    expect(transform([2, 6, 9], "rpl")).toEqual([3, 6, 10]);
    expect(transform([3, 7, 10], "rpl")).toEqual([4, 7, 11]);
    expect(transform([4, 8, 11], "rpl")).toEqual([5, 8, 0]);
    expect(transform([5, 9, 0], "rpl")).toEqual([6, 9, 1]);
    expect(transform([6, 10, 1], "rpl")).toEqual([7, 10, 2]);
    expect(transform([7, 11, 2], "rpl")).toEqual([8, 11, 3]);
    expect(transform([8, 0, 3], "rpl")).toEqual([9, 0, 4]);
    expect(transform([9, 1, 4], "rpl")).toEqual([10, 1, 5]);
    expect(transform([10, 2, 5], "rpl")).toEqual([11, 2, 6]);
    expect(transform([11, 3, 6], "rpl")).toEqual([0, 3, 7]);

    expect(transform([0, 3, 7], "rpl")).toEqual([11, 3, 6]);
    expect(transform([1, 4, 8], "rpl")).toEqual([0, 4, 7]);
    expect(transform([2, 5, 9], "rpl")).toEqual([1, 5, 8]);
    expect(transform([3, 6, 10], "rpl")).toEqual([2, 6, 9]);
    expect(transform([4, 7, 11], "rpl")).toEqual([3, 7, 10]);
    expect(transform([5, 8, 0], "rpl")).toEqual([4, 8, 11]);
    expect(transform([6, 9, 1], "rpl")).toEqual([5, 9, 0]);
    expect(transform([7, 10, 2], "rpl")).toEqual([6, 10, 1]);
    expect(transform([8, 11, 3], "rpl")).toEqual([7, 11, 2]);
    expect(transform([9, 0, 4], "rpl")).toEqual([8, 0, 3]);
    expect(transform([10, 1, 5], "rpl")).toEqual([9, 1, 4]);
    expect(transform([11, 2, 6], "rpl")).toEqual([10, 2, 5]);

    expect(transform([0, 4, 7], "lpr")).toEqual([1, 4, 8]);
    expect(transform([1, 5, 8], "lpr")).toEqual([2, 5, 9]);
    expect(transform([2, 6, 9], "lpr")).toEqual([3, 6, 10]);
    expect(transform([3, 7, 10], "lpr")).toEqual([4, 7, 11]);
    expect(transform([4, 8, 11], "lpr")).toEqual([5, 8, 0]);
    expect(transform([5, 9, 0], "lpr")).toEqual([6, 9, 1]);
    expect(transform([6, 10, 1], "lpr")).toEqual([7, 10, 2]);
    expect(transform([7, 11, 2], "lpr")).toEqual([8, 11, 3]);
    expect(transform([8, 0, 3], "lpr")).toEqual([9, 0, 4]);
    expect(transform([9, 1, 4], "lpr")).toEqual([10, 1, 5]);
    expect(transform([10, 2, 5], "lpr")).toEqual([11, 2, 6]);
    expect(transform([11, 3, 6], "lpr")).toEqual([0, 3, 7]);

    expect(transform([0, 3, 7], "lpr")).toEqual([11, 3, 6]);
    expect(transform([1, 4, 8], "lpr")).toEqual([0, 4, 7]);
    expect(transform([2, 5, 9], "lpr")).toEqual([1, 5, 8]);
    expect(transform([3, 6, 10], "lpr")).toEqual([2, 6, 9]);
    expect(transform([4, 7, 11], "lpr")).toEqual([3, 7, 10]);
    expect(transform([5, 8, 0], "lpr")).toEqual([4, 8, 11]);
    expect(transform([6, 9, 1], "lpr")).toEqual([5, 9, 0]);
    expect(transform([7, 10, 2], "lpr")).toEqual([6, 10, 1]);
    expect(transform([8, 11, 3], "lpr")).toEqual([7, 11, 2]);
    expect(transform([9, 0, 4], "lpr")).toEqual([8, 0, 3]);
    expect(transform([10, 1, 5], "lpr")).toEqual([9, 1, 4]);
    expect(transform([11, 2, 6], "lpr")).toEqual([10, 2, 5]);
  });

  it('tonnetzTransformations "hexaCycles and octaCycles" to "normal form"', () => {
    expect(transform([0, 4, 7], "plplpl")).toEqual([0, 4, 7]);
    expect(transform([0, 3, 7], "plplpl")).toEqual([0, 3, 7]);

    expect(transform([0, 4, 7], "prprprpr")).toEqual([0, 4, 7]);
    expect(transform([0, 3, 7], "prprprpr")).toEqual([0, 3, 7]);
  });

  it('tonnetzTransformations "complex" compositions to "normal form"', () => {
    expect(transform([0, 4, 7], "plprlplrl")).toEqual([2, 5, 9]);
    expect(transform([1, 5, 8], "plprlplrl")).toEqual([3, 6, 10]);
    expect(transform([2, 6, 9], "plprlplrl")).toEqual([4, 7, 11]);
    expect(transform([3, 7, 10], "plprlplrl")).toEqual([5, 8, 0]);
    expect(transform([4, 8, 11], "plprlplrl")).toEqual([6, 9, 1]);
    expect(transform([5, 9, 0], "plprlplrl")).toEqual([7, 10, 2]);
    expect(transform([6, 10, 1], "plprlplrl")).toEqual([8, 11, 3]);
    expect(transform([7, 11, 2], "plprlplrl")).toEqual([9, 0, 4]);
    expect(transform([8, 0, 3], "plprlplrl")).toEqual([10, 1, 5]);
    expect(transform([9, 1, 4], "plprlplrl")).toEqual([11, 2, 6]);
    expect(transform([10, 2, 5], "plprlplrl")).toEqual([0, 3, 7]);
    expect(transform([11, 3, 6], "plprlplrl")).toEqual([1, 4, 8]);

    expect(transform([0, 3, 7], "plprlplrl")).toEqual([10, 2, 5]);
    expect(transform([1, 4, 8], "plprlplrl")).toEqual([11, 3, 6]);
    expect(transform([2, 5, 9], "plprlplrl")).toEqual([0, 4, 7]);
    expect(transform([3, 6, 10], "plprlplrl")).toEqual([1, 5, 8]);
    expect(transform([4, 7, 11], "plprlplrl")).toEqual([2, 6, 9]);
    expect(transform([5, 8, 0], "plprlplrl")).toEqual([3, 7, 10]);
    expect(transform([6, 9, 1], "plprlplrl")).toEqual([4, 8, 11]);
    expect(transform([7, 10, 2], "plprlplrl")).toEqual([5, 9, 0]);
    expect(transform([8, 11, 3], "plprlplrl")).toEqual([6, 10, 1]);
    expect(transform([9, 0, 4], "plprlplrl")).toEqual([7, 11, 2]);
    expect(transform([10, 1, 5], "plprlplrl")).toEqual([8, 0, 3]);
    expect(transform([11, 2, 6], "plprlplrl")).toEqual([9, 1, 4]);
  });

  it('tonnetzTransformations "f" function to "normal form"', () => {
    expect(transform([0, 4, 7], "f")).toEqual([7, 10, 2]);
    expect(transform([0, 4, 7], "ff")).toEqual([0, 4, 7]);

    expect(transform([9, 0, 4], "f")).toEqual([2, 6, 9]);
    expect(transform([9, 0, 4], "ff")).toEqual([9, 0, 4]);

    expect(transform([2, 6, 9], "f")).toEqual([9, 0, 4]);
    expect(transform([2, 5, 9], "f")).toEqual([7, 11, 2]);
    expect(transform([10, 2, 5], "f")).toEqual([5, 8, 0]);
    expect(transform([5, 9, 0], "f")).toEqual([0, 3, 7]);
    expect(transform([4, 7, 11], "f")).toEqual([9, 1, 4]);
  });

  it('tonnetzTransformations "n" function to "normal form"', () => {
    expect(transform([0, 4, 7], "n")).toEqual([5, 8, 0]);
    expect(transform([0, 4, 7], "nn")).toEqual([0, 4, 7]);

    expect(transform([0, 3, 7], "n")).toEqual([7, 11, 2]);
    expect(transform([0, 3, 7], "nn")).toEqual([0, 3, 7]);

    expect(transform([7, 11, 2], "n")).toEqual([0, 3, 7]);
    expect(transform([9, 0, 4], "n")).toEqual([4, 8, 11]);
    expect(transform([5, 9, 0], "n")).toEqual([10, 1, 5]);
    expect(transform([2, 6, 9], "n")).toEqual([7, 10, 2]);
    expect(transform([2, 5, 9], "n")).toEqual([9, 1, 4]);
  });

  it('tonnetzTransformations "s" function to "normal form"', () => {
    expect(transform([0, 4, 7], "s")).toEqual([1, 4, 8]);
    expect(transform([0, 4, 7], "ss")).toEqual([0, 4, 7]);

    expect(transform([0, 3, 7], "s")).toEqual([11, 3, 6]);
    expect(transform([0, 3, 7], "ss")).toEqual([0, 3, 7]);

    expect(transform([7, 11, 2], "s")).toEqual([8, 11, 3]);
    expect(transform([9, 0, 4], "s")).toEqual([8, 0, 3]);
    expect(transform([5, 9, 0], "s")).toEqual([6, 9, 1]);
    expect(transform([2, 6, 9], "s")).toEqual([3, 6, 10]);
    expect(transform([2, 5, 9], "s")).toEqual([1, 5, 8]);
  });

  it('tonnetzTransformations "h" function to "normal form"', () => {
    expect(transform([0, 4, 7], "h")).toEqual([8, 11, 3]);
    expect(transform([0, 4, 7], "hh")).toEqual([0, 4, 7]);

    expect(transform([0, 3, 7], "h")).toEqual([4, 8, 11]);
    expect(transform([0, 3, 7], "hh")).toEqual([0, 3, 7]);

    expect(transform([7, 11, 2], "h")).toEqual([3, 6, 10]);
    expect(transform([9, 0, 4], "h")).toEqual([1, 5, 8]);
    expect(transform([5, 9, 0], "h")).toEqual([1, 4, 8]);
    expect(transform([2, 6, 9], "h")).toEqual([10, 1, 5]);
    expect(transform([2, 5, 9], "h")).toEqual([6, 10, 1]);
  });

  it('tonnetzTransformations "t" function to "normal form"', () => {
    expect(transform([0, 4, 7], "t")).toEqual([6, 10, 1]);
    expect(transform([0, 4, 7], "tt")).toEqual([0, 4, 7]);

    expect(transform([0, 3, 7], "t")).toEqual([6, 9, 1]);
    expect(transform([0, 3, 7], "tt")).toEqual([0, 3, 7]);

    expect(transform([7, 11, 2], "t")).toEqual([1, 5, 8]);
    expect(transform([9, 0, 4], "t")).toEqual([3, 6, 10]);
    expect(transform([5, 9, 0], "t")).toEqual([11, 3, 6]);
    expect(transform([2, 6, 9], "t")).toEqual([8, 0, 3]);
    expect(transform([2, 5, 9], "t")).toEqual([8, 11, 3]);
  });

  it('tonnetzTransformations "pt6, lt6, rt6" function to "normal form"', () => {
    expect(transform([0, 4, 7], "pt")).toEqual([6, 9, 1]);
    expect(transform([0, 4, 7], "lt")).toEqual([10, 1, 5]);
    expect(transform([0, 4, 7], "rt")).toEqual([3, 6, 10]);

    expect(transform([0, 3, 7], "pt")).toEqual([6, 10, 1]);
    expect(transform([0, 3, 7], "lt")).toEqual([2, 6, 9]);
    expect(transform([0, 3, 7], "rt")).toEqual([9, 1, 4]);
  });

  it('tonnetzTransformations "compositions" function to "normal form"', () => {
    expect(transform([0, 4, 7], "hsf")).toEqual([2, 5, 9]);
    expect(transform([0, 3, 7], "hsf")).toEqual([10, 2, 5]);

    expect(transform([0, 4, 7], "hsftn")).toEqual([3, 7, 10]);
    expect(transform([0, 3, 7], "hsftn")).toEqual([9, 0, 4]);

    expect(transform([0, 4, 7], "hsftnprpl")).toEqual([2, 6, 9]);
    expect(transform([0, 3, 7], "hsftnprpl")).toEqual([10, 1, 5]);
  });

  it('TonnetzTransformations PLR* functions not all to "normal form"', () => {
    expect(transform([0, 3, 6], "1")).toEqual([0, 3, 7]);
    expect(transform([0, 4, 8], "2")).toEqual([0, 4, 7]);
    expect(transform([0, 4, 7], "3")).toEqual([4, 7, 10]);
    expect(transform([0, 4, 8], "4")).toEqual([4, 8, 11]);
    expect(transform([0, 4, 8], "6")).toEqual([9, 0, 4]);
    expect(transform([0, 4, 7], "7")).toEqual([1, 4, 7]);
    expect(transform([0, 4, 8], "8")).toEqual([1, 4, 8]);
    expect(transform([0, 4, 8], "10")).toEqual([5, 8, 0]);
    // Not in normal form (problem with sorting in transform():
    expect(transform([9, 0, 3], "5")).toEqual([0, 3, 7]);
    expect(transform([0, 3, 7], "5")).toEqual([0, 3, 9]);
    expect(transform([0, 4, 7], "9")).toEqual([0, 4, 8]);
  });

  it('TonnetzTransformations ST functions to "normal form"', () => {
    expect(p1M([0, 4, 7, 10], [3, 4, 5])).toEqual([0, 4, 7]);
    expect(p1M([0, 4, 7], [3, 4, 5])).toEqual([0, 4, 7, 10]);
    expect(l1d([0, 4, 7, 10], [3, 4, 5])).toEqual([4, 7, 10]);
    expect(l1d([4, 7, 10], [3, 4, 5])).toEqual([0, 4, 7, 10]);
    expect(p2m([0, 3, 7, 10], [3, 4, 5])).toEqual([0, 3, 7]);
    expect(p2m([0, 3, 7], [3, 4, 5])).toEqual([0, 3, 7, 10]);
    expect(r2M([0, 3, 7, 10], [3, 4, 5])).toEqual([3, 7, 10]);
    expect(r2M([3, 7, 10], [3, 4, 5])).toEqual([0, 3, 7, 10]);
    expect(p3d([0, 3, 6, 10], [3, 4, 5])).toEqual([0, 3, 6]);
    expect(p3d([0, 3, 6], [3, 4, 5])).toEqual([0, 3, 6, 10]);
    expect(r3m([0, 3, 6, 10], [3, 4, 5])).toEqual([3, 6, 10]);
    expect(r3m([3, 6, 10], [3, 4, 5])).toEqual([0, 3, 6, 10]);
    expect(p4M([0, 4, 7, 11], [3, 4, 5])).toEqual([0, 4, 7]);
    expect(p4M([0, 4, 7], [3, 4, 5])).toEqual([0, 4, 7, 11]);
    expect(l4m([0, 4, 7, 11], [3, 4, 5])).toEqual([4, 7, 11]);
    expect(l4m([4, 7, 11], [3, 4, 5])).toEqual([0, 4, 7, 11]);
    expect(p5d([0, 3, 6, 9], [3, 4, 5])).toEqual([0, 3, 6]);
    expect(p5d([0, 3, 6], [3, 4, 5])).toEqual([0, 3, 6, 9]);
    expect(r5d([0, 3, 6, 9], [3, 4, 5])).toEqual([3, 6, 9]);
    expect(r5d([3, 6, 9], [3, 4, 5])).toEqual([0, 3, 6, 9]);
    expect(rr5d([0, 3, 6, 9], [3, 4, 5])).toEqual([6, 9, 0]);
    expect(rr5d([6, 9, 0], [3, 4, 5])).toEqual([0, 3, 6, 9]);
    expect(z5d([0, 3, 6, 9], [3, 4, 5])).toEqual([9, 0, 3]);
    expect(z5d([9, 0, 3], [3, 4, 5])).toEqual([0, 3, 6, 9]);
  });

  it("seventhTransformations to normal form. Returns the same chord if the transformation is not supported.", () => {
    expect(seventhsTransform([0, 4, 7, 10], "")).toEqual([0, 4, 7, 10]);
    expect(seventhsTransform([0, 4, 7, 10], "x o l")).toEqual([0, 4, 7, 10]);
    expect(seventhsTransform([0, 4, 7, 10], "p12")).toEqual([0, 3, 7, 10]);
    expect(seventhsTransform([0, 4, 7, 10], "p14")).toEqual([0, 4, 7, 11]);
    expect(seventhsTransform([0, 4, 7, 10], "r12")).toEqual([9, 0, 4, 7]);
    expect(seventhsTransform([0, 4, 7, 10], "l13")).toEqual([4, 7, 10, 2]);
    expect(seventhsTransform([0, 4, 7, 10], "l15")).toEqual([4, 7, 10, 1]);
    expect(seventhsTransform([0, 4, 7, 10], "q15")).toEqual([1, 4, 7, 10]);

    expect(seventhsTransform([0, 4, 7, 10], "l42")).toEqual([0, 4, 7, 10]);
    expect(seventhsTransform([0, 3, 7, 10], "q43")).toEqual([0, 3, 7, 10]);
    expect(seventhsTransform([0, 4, 7, 11], "rr35")).toEqual([0, 4, 7, 11]);
    expect(seventhsTransform([0, 3, 6, 9], "l42")).toEqual([0, 3, 6, 9]);
    expect(seventhsTransform([0, 3, 6, 10], "qq51")).toEqual([0, 3, 6, 10]);
    expect(seventhsTransform([0, 4, 7, 10], "p35")).toEqual([0, 4, 7, 10]);

    expect(seventhsTransform([0, 4, 7, 10], "p14r42")).toEqual([9, 0, 4, 7]);
    expect(seventhsTransform([0, 4, 7, 10], "p14r42l42")).toEqual([5, 9, 0, 4]);
    expect(seventhsTransform([0, 4, 7, 10], "p14r42l42q43")).toEqual([6, 9, 0, 4]);
    expect(seventhsTransform([0, 4, 7, 10], "p14r42l42q43rr35")).toEqual([0, 3, 6, 9]);
    expect(seventhsTransform([0, 4, 7, 10], "p14r42l42q43rr35qq51")).toEqual([2, 6, 9, 0]);
    expect(seventhsTransform([0, 4, 7, 10], "p14r42l42q43rr35qq51l15")).toEqual([6, 9, 0, 3]);
    expect(seventhsTransform([0, 4, 7, 10], "p14r42l42q43rr35qq51l15n51")).toEqual([11, 3, 6, 9]);
    expect(seventhsTransform([0, 4, 7, 10], "p14r42l42q43rr35qq51l15n51l13")).toEqual([3, 6, 9, 1]);
    expect(seventhsTransform([0, 4, 7, 10], "p14r42l42q43rr35qq51l15n51l13r23")).toEqual([6, 9, 1, 4]);

    expect(seventhsTransform([0, 4, 8, 10], "p18")).toEqual([0, 4, 7, 10]);
    expect(seventhsTransform([0, 4, 7, 10], "p19")).toEqual([0, 4, 6, 10]);
    expect(seventhsTransform([0, 4, 6, 10], "p19")).toEqual([0, 4, 7, 10]);
    expect(seventhsTransform([0, 3, 7, 10], "p26")).toEqual([0, 3, 7, 11]);
    expect(seventhsTransform([0, 3, 7, 11], "p26")).toEqual([0, 3, 7, 10]);
    expect(seventhsTransform([0, 3, 6, 10], "p39")).toEqual([0, 4, 6, 10]);
    expect(seventhsTransform([0, 4, 6, 10], "p39")).toEqual([0, 3, 6, 10]);
    expect(seventhsTransform([0, 4, 7, 11], "p47")).toEqual([0, 4, 8, 11]);
    expect(seventhsTransform([0, 4, 8, 11], "p47")).toEqual([0, 4, 7, 11]);
    expect(seventhsTransform([0, 3, 7, 11], "p64")).toEqual([0, 4, 7, 11]);
    expect(seventhsTransform([0, 4, 7, 11], "p64")).toEqual([0, 3, 7, 11]);
    expect(seventhsTransform([0, 4, 8, 10], "p87")).toEqual([0, 4, 8, 11]);
    expect(seventhsTransform([0, 4, 8, 11], "p87")).toEqual([0, 4, 8, 10]);
    expect(seventhsTransform([0, 4, 6, 10], "p98")).toEqual([0, 4, 8, 10]);
    expect(seventhsTransform([0, 4, 8, 10], "p98")).toEqual([0, 4, 6, 10]);

    expect(seventhsTransform([0, 3, 7, 11], "r63")).toEqual([9, 0, 3, 7]);
    expect(seventhsTransform([9, 0, 3, 7], "r63")).toEqual([0, 3, 7, 11]);
    expect(seventhsTransform([0, 4, 8, 11], "r76")).toEqual([9, 0, 4, 8]);
    expect(seventhsTransform([9, 0, 4, 8], "r76")).toEqual([0, 4, 8, 11]);
    expect(seventhsTransform([0, 4, 8, 10], "r86")).toEqual([9, 0, 4, 8]);
    expect(seventhsTransform([9, 0, 4, 8], "r86")).toEqual([0, 4, 8, 10]);

    expect(seventhsTransform([0, 4, 8, 11], "l71")).toEqual([4, 8, 11, 2]);
    expect(seventhsTransform([4, 8, 11, 2], "l71")).toEqual([0, 4, 8, 11]);
    expect(seventhsTransform([0, 4, 8, 10], "l89")).toEqual([4, 8, 10, 2]);
    expect(seventhsTransform([4, 8, 10, 2], "l89")).toEqual([0, 4, 8, 10]);

    expect(seventhsTransform([0, 4, 8, 11], "q62")).toEqual([1, 4, 8, 11]);
    expect(seventhsTransform([1, 4, 8, 11], "q62")).toEqual([0, 4, 8, 11]);
    expect(seventhsTransform([0, 4, 8, 11], "q76")).toEqual([1, 4, 8, 0]);
    expect(seventhsTransform([1, 4, 8, 0], "q76")).toEqual([0, 4, 8, 11]);

    expect(seventhsTransform([0, 4, 7, 10], "rr19")).toEqual([6, 10, 0, 4]);
    expect(seventhsTransform([6, 10, 0, 4], "rr19")).toEqual([0, 4, 7, 10]);
    expect(seventhsTransform([0, 4, 6, 10], "rr39")).toEqual([6, 9, 0, 4]);
    expect(seventhsTransform([0, 3, 6, 10], "rr39")).toEqual([6, 10, 0, 4]);
    expect(seventhsTransform([0, 4, 6, 10], "rr98")).toEqual([6, 10, 2, 4]);
    expect(seventhsTransform([6, 10, 2, 4], "rr98")).toEqual([0, 4, 6, 10]);

    expect(seventhsTransform([0, 3, 6, 10], "qq38")).toEqual([2, 6, 10, 0]);
    expect(seventhsTransform([2, 6, 10, 0], "qq38")).toEqual([0, 3, 6, 10]);
    expect(seventhsTransform([0, 4, 6, 10], "qq98")).toEqual([2, 6, 10, 0]);
    expect(seventhsTransform([2, 6, 10, 0], "qq98")).toEqual([0, 4, 6, 10]);

    expect(seventhsTransform([0, 4, 7, 10], "n51")).toEqual([7, 10, 1, 4]);
    expect(seventhsTransform([5, 9, 0, 3], "n51")).toEqual([0, 3, 6, 9]);
  });
});
