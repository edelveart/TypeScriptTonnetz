import { describe, expect, it } from 'vitest'
import { transform } from './tonnetz-typescript';

describe('tonnetz-tests', () => {

    it('tonnetzTransformation "p,r,l" and "involutions" to "normal form"', () => {
        expect(transform([0, 4, 7], "p")).toEqual([0, 3, 7]);
        expect(transform([0, 3, 7], "p")).toEqual([0, 4, 7]);
        expect(transform([0, 4, 7], "pp")).toEqual([0, 4, 7]);
        expect(transform([0, 3, 7], "pp")).toEqual([0, 3, 7]);

        expect(transform([0, 4, 7], "r")).toEqual([9, 0, 4]);
        expect(transform([0, 3, 7], "r")).toEqual([3, 7, 10]);
        expect(transform([0, 4, 7], "rr")).toEqual([0, 4, 7]);
        expect(transform([0, 3, 7], "rr")).toEqual([0, 3, 7]);

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
        expect(transform([0, 3, 7], "rl")).toEqual([7, 10, 2]);

        expect(transform([0, 4, 7], "lr")).toEqual([7, 11, 2]);
        expect(transform([0, 3, 7], "lr")).toEqual([5, 8, 0]);
    })

    it('tonnetzTransformations "prl" compositions to "normal form"', () => {
        expect(transform([0, 4, 7], "prl")).toEqual([7, 10, 2]);
        expect(transform([0, 3, 7], "prl")).toEqual([5, 9, 0]);

        expect(transform([0, 4, 7], "plr")).toEqual([5, 8, 0]);
        expect(transform([0, 3, 7], "plr")).toEqual([7, 11, 2]);

        expect(transform([0, 4, 7], "rlp")).toEqual([5, 8, 0]);
        expect(transform([0, 3, 7], "rlp")).toEqual([7, 11, 2]);

        expect(transform([0, 4, 7], "lrp")).toEqual([7, 10, 2]);
        expect(transform([0, 3, 7], "lrp")).toEqual([5, 9, 0]);

        expect(transform([0, 4, 7], "rpl")).toEqual([1, 4, 8]);
        expect(transform([0, 3, 7], "rpl")).toEqual([11, 3, 6]);

        expect(transform([0, 4, 7], "lpr")).toEqual([1, 4, 8]);
        expect(transform([0, 3, 7], "lpr")).toEqual([11, 3, 6]);
    })

    it('tonnetzTransformations "hexaCycles and octaCycles" to "normal form"', () => {
        expect(transform([0, 4, 7], "plplpl")).toEqual([0, 4, 7]);
        expect(transform([0, 3, 7], "plplpl")).toEqual([0, 3, 7]);

        expect(transform([0, 4, 7], "prprprpr")).toEqual([0, 4, 7]);
        expect(transform([0, 3, 7], "prprprpr")).toEqual([0, 3, 7]);
    })

    it('tonnetzTransformations "complex" compositions to "normal form"', () => {
        expect(transform([0, 4, 7], "plprlplrl")).toEqual([2, 5, 9]);
        expect(transform([0, 3, 7], "plprlplrl")).toEqual([10, 2, 5]);
    })

});


