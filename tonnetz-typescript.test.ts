import { describe, expect, it } from 'vitest'
import { transform } from './tonnetz-typescript';

describe('tonnetz-tests', () => {

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
    })

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
    })

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
    })

    it('tonnetzTransformations "hexaCycles and octaCycles" to "normal form"', () => {
        expect(transform([0, 4, 7], "plplpl")).toEqual([0, 4, 7]);
        expect(transform([0, 3, 7], "plplpl")).toEqual([0, 3, 7]);

        expect(transform([0, 4, 7], "prprprpr")).toEqual([0, 4, 7]);
        expect(transform([0, 3, 7], "prprprpr")).toEqual([0, 3, 7]);
    })

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
    })

});


