import type { TonnetzSpaces, TriadChord, Tetrachord, TransformationFunctions, TransformationFunctionsSeventhChords, ChordGenerators, ObjectTransformations, ObjectTransformationsSeventhChords, TransformationTriadSeventhChords, ObjectTransformationsTriadSeventhChords } from "./tonnetz-types";

import {
  majorChordFromTonnetz,
  minorChordFromTonnetz,
  augmentedMajorSeventhChord,
  augmentedTriadChord,
  diminishedSeventhChord,
  diminishedTriadChord,
  dominantSeventhChord,
  flatFiveDominantSeventhChord,
  halfDiminishedChord,
  majorSeventhChord,
  minorMajorSeventhChord,
  minorSeventhChord,
  sharpFiveDominantSeventhChord,
} from "./core/chord-constructors";

import { safeMod, sortingTriadChord, chordNotesToModN, chordComparison } from "./core/utils";
import { PLRFilmTransformationFn, PLRQExtendedTransformationFn, PLRStarTransformationFn, STTransformationFn } from "./core/transform-functions";

export const parallelTransform: TransformationFunctions = (chordFromTonnetz, tonnetz) => {
  return PLRFilmTransformationFn(chordFromTonnetz, tonnetz, 0, 0);
};

export const leadingToneTransform: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
  const [, b] = tonnetz;
  return PLRFilmTransformationFn(chordFromTonnetz, tonnetz, +b, -b);
};

export const relativeTransform: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
  const [a] = tonnetz;
  return PLRFilmTransformationFn(chordFromTonnetz, tonnetz, -a, +a);
};

export const f: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
  const [a, b] = tonnetz;

  return PLRFilmTransformationFn(chordFromTonnetz, tonnetz, a + b, -(a + b));
};

export const n: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
  const [, , c] = tonnetz;
  return PLRFilmTransformationFn(chordFromTonnetz, tonnetz, c, -c);
};

export const s: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
  const [a, b] = tonnetz;
  return PLRFilmTransformationFn(chordFromTonnetz, tonnetz, b - a, -(b - a));
};

export const h: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
  const [, b] = tonnetz;
  return PLRFilmTransformationFn(chordFromTonnetz, tonnetz, 2 * b, -(2 * b));
};

export const t6: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
  const [a, b, c] = tonnetz;
  const modulo = a + b + c;
  const reduceModN = chordNotesToModN(chordFromTonnetz);
  let rootPositionTriad: TriadChord = sortingTriadChord(reduceModN, tonnetz);

  const equalToChordOne = chordComparison(rootPositionTriad, majorChordFromTonnetz(rootPositionTriad[0], tonnetz));
  const equalToChordTwo = chordComparison(rootPositionTriad, minorChordFromTonnetz(rootPositionTriad[0], tonnetz));

  if (equalToChordOne === equalToChordTwo) return rootPositionTriad;

  if (equalToChordOne) {
    rootPositionTriad = majorChordFromTonnetz(rootPositionTriad[0] + 2 * a, tonnetz);
  } else if (equalToChordTwo) {
    rootPositionTriad = minorChordFromTonnetz(rootPositionTriad[0] - 2 * a, tonnetz);
  }

  return chordNotesToModN(rootPositionTriad, modulo);
};

export const northTransform: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
  const [a, b] = tonnetz;

  return PLRFilmTransformationFn(chordFromTonnetz, tonnetz, b, a);
};

export const southTransform: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
  const [a, b] = tonnetz;
  return PLRFilmTransformationFn(chordFromTonnetz, tonnetz, -a, -b);
};

export const eastTransform: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
  const [a, b] = tonnetz;
  return PLRFilmTransformationFn(chordFromTonnetz, tonnetz, b - a, 0);
};

export const westTransform: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
  const [a, b] = tonnetz;
  return PLRFilmTransformationFn(chordFromTonnetz, tonnetz, 0, -(b - a));
};

export const p12: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, dominantSeventhChord, minorSeventhChord, 0, 0);
};

export const p14: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, dominantSeventhChord, majorSeventhChord, 0, 0);
};

export const p23: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, minorSeventhChord, halfDiminishedChord, 0, 0);
};

export const p35: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, halfDiminishedChord, diminishedSeventhChord, 0, 0);
};

export const r12: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  const [a] = tonnetz;
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, dominantSeventhChord, minorSeventhChord, -a, a);
};

export const r23: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  const [a] = tonnetz;
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, minorSeventhChord, halfDiminishedChord, -a, a);
};

export const r42: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  const [a] = tonnetz;
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, majorSeventhChord, minorSeventhChord, -a, a);
};

export const r35: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  const [a] = tonnetz;
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, halfDiminishedChord, diminishedSeventhChord, -a, a);
};

export const r53: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  const [a] = tonnetz;
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, diminishedSeventhChord, halfDiminishedChord, -a, a);
};

export const l13: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  const [, b] = tonnetz;
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, dominantSeventhChord, halfDiminishedChord, b, -b);
};

export const l15: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  const [, b] = tonnetz;
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, dominantSeventhChord, diminishedSeventhChord, b, -b);
};

export const l42: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  const [, b] = tonnetz;
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, majorSeventhChord, minorSeventhChord, b, -b);
};

export const q43: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  const [a, b] = tonnetz;
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, majorSeventhChord, halfDiminishedChord, b - a, -(b - a));
};

export const q15: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  const [a, b] = tonnetz;
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, dominantSeventhChord, diminishedSeventhChord, b - a, -(b - a));
};

export const rr35: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  const [a] = tonnetz;
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, halfDiminishedChord, diminishedSeventhChord, 2 * a, -(2 * a));
};

export const qq51: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  const [a, , c] = tonnetz;
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, diminishedSeventhChord, dominantSeventhChord, c - a, -(c - a));
};

export const n51: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  const [, , c] = tonnetz;
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, diminishedSeventhChord, dominantSeventhChord, c, -c);
};

export const p18: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, dominantSeventhChord, sharpFiveDominantSeventhChord, 0, 0);
};

export const p19: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, dominantSeventhChord, flatFiveDominantSeventhChord, 0, 0);
};

export const p26: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, minorSeventhChord, minorMajorSeventhChord, 0, 0);
};

export const p39: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, halfDiminishedChord, flatFiveDominantSeventhChord, 0, 0);
};

export const p47: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, majorSeventhChord, augmentedMajorSeventhChord, 0, 0);
};

export const p64: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, minorMajorSeventhChord, majorSeventhChord, 0, 0);
};

export const p87: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, sharpFiveDominantSeventhChord, augmentedMajorSeventhChord, 0, 0);
};

export const p98: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, flatFiveDominantSeventhChord, sharpFiveDominantSeventhChord, 0, 0);
};

export const r63: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  const [a] = tonnetz;
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, minorMajorSeventhChord, halfDiminishedChord, -a, a);
};

export const r76: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  const [a] = tonnetz;
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, augmentedMajorSeventhChord, minorMajorSeventhChord, -a, a);
};

export const r86: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  const [a] = tonnetz;
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, sharpFiveDominantSeventhChord, minorMajorSeventhChord, -a, a);
};

export const l71: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  const [, b] = tonnetz;
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, augmentedMajorSeventhChord, dominantSeventhChord, b, -b);
};

export const l89: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  const [, b] = tonnetz;
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, sharpFiveDominantSeventhChord, flatFiveDominantSeventhChord, b, -b);
};

export const q62: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  const [a, b] = tonnetz;
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, augmentedMajorSeventhChord, minorSeventhChord, b - a, -(b - a));
};

export const q76: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  const [a, b] = tonnetz;
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, augmentedMajorSeventhChord, minorMajorSeventhChord, b - a, -(b - a));
};

export const rr19: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  const [a] = tonnetz;
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, dominantSeventhChord, flatFiveDominantSeventhChord, 2 * a, -(2 * a));
};

export const rr39: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  const [a] = tonnetz;
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, halfDiminishedChord, flatFiveDominantSeventhChord, 2 * a, -(2 * a));
};

export const rr98: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  const [a] = tonnetz;
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, flatFiveDominantSeventhChord, sharpFiveDominantSeventhChord, 2 * a, -(2 * a));
};

export const qq38: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  const [a, , c] = tonnetz;
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, halfDiminishedChord, sharpFiveDominantSeventhChord, c - a, -(c - a));
};

export const qq98: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
  const [a, , c] = tonnetz;
  return PLRQExtendedTransformationFn(chordFromTonnetz, tonnetz, flatFiveDominantSeventhChord, sharpFiveDominantSeventhChord, c - a, -(c - a));
};

export const q13: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
  const [a, b] = tonnetz;
  return PLRStarTransformationFn(chordFromTonnetz, tonnetz, majorChordFromTonnetz, diminishedTriadChord, b - a, -(b - a));
};

export const q42: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
  const [a, b] = tonnetz;
  return PLRStarTransformationFn(chordFromTonnetz, tonnetz, augmentedTriadChord, minorChordFromTonnetz, b - a, -(b - a));
};

export const l41: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
  const [, b] = tonnetz;
  return PLRStarTransformationFn(chordFromTonnetz, tonnetz, augmentedTriadChord, majorChordFromTonnetz, b, -b);
};

export const n42: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
  const [, , c] = tonnetz;
  return PLRStarTransformationFn(chordFromTonnetz, tonnetz, augmentedTriadChord, minorChordFromTonnetz, c, -c);
};

export const l14: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
  const [, b] = tonnetz;
  return PLRStarTransformationFn(chordFromTonnetz, tonnetz, majorChordFromTonnetz, augmentedTriadChord, b, -b);
};

export const p32: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
  return PLRStarTransformationFn(chordFromTonnetz, tonnetz, diminishedTriadChord, minorChordFromTonnetz, 0, 0);
};

export const rt42: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
  const [a] = tonnetz;
  return PLRStarTransformationFn(chordFromTonnetz, tonnetz, augmentedTriadChord, minorChordFromTonnetz, -a, +a);
};

export const p41: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
  return PLRStarTransformationFn(chordFromTonnetz, tonnetz, augmentedTriadChord, majorChordFromTonnetz, 0, 0);
};

export const lt13: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
  const [, b] = tonnetz;
  return PLRStarTransformationFn(chordFromTonnetz, tonnetz, majorChordFromTonnetz, diminishedTriadChord, +b, -b);
};

export const rt23: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
  const [a] = tonnetz;
  return PLRStarTransformationFn(chordFromTonnetz, tonnetz, minorChordFromTonnetz, diminishedTriadChord, -a, +a);
};

export const p1M: TransformationTriadSeventhChords = (chordFromTonnetz, tonnetz): TriadChord | Tetrachord => {
  return STTransformationFn(chordFromTonnetz, tonnetz, dominantSeventhChord, majorChordFromTonnetz, 0, 0);
};

export const l1d: TransformationTriadSeventhChords = (chordFromTonnetz, tonnetz): TriadChord | Tetrachord => {
  const [, b] = tonnetz;
  return STTransformationFn(chordFromTonnetz, tonnetz, dominantSeventhChord, diminishedTriadChord, +b, -b);
};

export const p2m: TransformationTriadSeventhChords = (chordFromTonnetz, tonnetz): TriadChord | Tetrachord => {
  return STTransformationFn(chordFromTonnetz, tonnetz, minorSeventhChord, minorChordFromTonnetz, 0, 0);
};

export const r2M: TransformationTriadSeventhChords = (chordFromTonnetz, tonnetz): TriadChord | Tetrachord => {
  const [a] = tonnetz;
  return STTransformationFn(chordFromTonnetz, tonnetz, minorSeventhChord, majorChordFromTonnetz, +a, -a);
};

export const p3d: TransformationTriadSeventhChords = (chordFromTonnetz, tonnetz): TriadChord | Tetrachord => {
  return STTransformationFn(chordFromTonnetz, tonnetz, halfDiminishedChord, diminishedTriadChord, 0, 0);
};

export const r3m: TransformationTriadSeventhChords = (chordFromTonnetz, tonnetz): TriadChord | Tetrachord => {
  const [a] = tonnetz;
  return STTransformationFn(chordFromTonnetz, tonnetz, halfDiminishedChord, minorChordFromTonnetz, +a, -a);
};

export const p4M: TransformationTriadSeventhChords = (chordFromTonnetz, tonnetz): TriadChord | Tetrachord => {
  return STTransformationFn(chordFromTonnetz, tonnetz, majorSeventhChord, majorChordFromTonnetz, 0, 0);
};

export const l4m: TransformationTriadSeventhChords = (chordFromTonnetz, tonnetz): TriadChord | Tetrachord => {
  const [, b] = tonnetz;
  return STTransformationFn(chordFromTonnetz, tonnetz, majorSeventhChord, minorChordFromTonnetz, +b, -b);
};

export const p5d: TransformationTriadSeventhChords = (chordFromTonnetz, tonnetz): TriadChord | Tetrachord => {
  return STTransformationFn(chordFromTonnetz, tonnetz, diminishedSeventhChord, diminishedTriadChord, 0, 0);
};

export const r5d: TransformationTriadSeventhChords = (chordFromTonnetz, tonnetz): TriadChord | Tetrachord => {
  const [a] = tonnetz;
  return STTransformationFn(chordFromTonnetz, tonnetz, diminishedSeventhChord, diminishedTriadChord, +a, -a);
};

export const rr5d: TransformationTriadSeventhChords = (chordFromTonnetz, tonnetz): TriadChord | Tetrachord => {
  const [a] = tonnetz;
  return STTransformationFn(chordFromTonnetz, tonnetz, diminishedSeventhChord, diminishedTriadChord, 2 * a, -(2 * a));
};

export const z5d: TransformationTriadSeventhChords = (chordFromTonnetz, tonnetz): TriadChord | Tetrachord => {
  const [a] = tonnetz;
  return STTransformationFn(chordFromTonnetz, tonnetz, diminishedSeventhChord, diminishedTriadChord, -a, a);
};

export const CHORD_TYPES: ChordGenerators = {
  M: majorChordFromTonnetz,
  maj: majorChordFromTonnetz,
  m: minorChordFromTonnetz,
  min: minorChordFromTonnetz,
  maj7: majorSeventhChord,
  "7": dominantSeventhChord,
  m7: minorSeventhChord,
  hdim7: halfDiminishedChord,
  aug: augmentedTriadChord,
  augmented: augmentedTriadChord,
  diminished: diminishedTriadChord,
  dim7: diminishedSeventhChord,
  minMaj7: minorMajorSeventhChord,
  maj7aug5: augmentedMajorSeventhChord,
  dom7aug5: sharpFiveDominantSeventhChord,
  dom7b5: flatFiveDominantSeventhChord,
};

export const CHORD_TYPES_SEVENTHS: ChordGenerators = {
  maj7: majorSeventhChord,
  "7": dominantSeventhChord,
  m7: minorSeventhChord,
  hdim7: halfDiminishedChord,
  dim7: diminishedSeventhChord,
  minMaj7: minorMajorSeventhChord,
  maj7aug5: augmentedMajorSeventhChord,
  dom7aug5: sharpFiveDominantSeventhChord,
  dom7b5: flatFiveDominantSeventhChord,
};

export const chordFromTonnetz = (rootNote: number, chordType: string, tonnetz: TonnetzSpaces = [3, 4, 5]): TriadChord | Tetrachord => {
  return CHORD_TYPES[chordType](rootNote, tonnetz);
};

export const AVAILABLETRANSFORMATIONS: { readonly [key: string]: readonly string[] } = {
  p: ["p", "1", "2"],
  l: ["l", "3", "4", "5"],
  r: ["r", "6", "7"],
  f: ["f"],
  n: ["n", "0"],
  s: ["s"],
  h: ["h"],
  t: ["t6"],
  q: ["8", "9"],
  N: ["N"],
  S: ["S"],
  E: ["E"],
  W: ["W"],
};

export const TRANSFORMATIONS: ObjectTransformations = {
  p: parallelTransform,
  l: leadingToneTransform,
  r: relativeTransform,
  f: f,
  n: n,
  s: s,
  h: h,
  t: t6,

  "1": p32,
  "2": p41,
  "3": lt13,
  "4": l41,
  "5": rt23,
  "6": rt42,
  "7": q13,
  "8": q42,
  "9": l14,
  "0": n42,

  N: northTransform,
  S: southTransform,
  E: eastTransform,
  W: westTransform,
};

export const SEVENTHSTRANFORMATIONS: ObjectTransformationsSeventhChords = {
  p12: p12,
  p14: p14,
  p23: p23,
  p35: p35,
  r12: r12,
  r23: r23,
  r42: r42,
  r35: r35,
  r53: r53,
  l13: l13,
  l15: l15,
  l42: l42,
  q43: q43,
  q15: q15,
  rr35: rr35,
  qq51: qq51,
  n51: n51,
  p18: p18,
  p19: p19,
  p26: p26,
  p39: p39,
  p47: p47,
  p64: p64,
  p87: p87,
  p98: p98,
  r63: r63,
  r76: r76,
  r86: r86,
  l71: l71,
  l89: l89,
  q62: q62,
  q76: q76,
  rr19: rr19,
  rr39: rr39,
  rr98: rr98,
  qq38: qq38,
  qq98: qq98,
};

export const getAvailableTransform = (transformations: ObjectTransformationsSeventhChords, availableString: string): string[] => {
  return Object.keys(transformations).filter((key) => key.includes(availableString));
};

export const AVAILABLESEVENTHSTRANSFORMATIONS: { readonly [key: string]: { readonly [key: string]: readonly string[] } } = {
  "7": {
    p: ["p12", "p14", "p18", "p19"],
    l: ["l13", "l15", "l71"],
    r: ["r12", "rr19"],
    q: ["q15", "qq51"],
    n: ["n51"],
  },
  m7: {
    p: ["p12", "p23", "p26"],
    l: ["l42"],
    r: ["r12", "r23", "r42"],
    q: ["q62"],
  },
  hdim7: {
    p: ["p23", "p35", "p39"],
    l: ["l13"],
    r: ["r23", "r35", "r53", "r63", "rr35", "rr39"],
    q: ["q43", "qq38"],
  },
  maj7: {
    p: ["p14", "p47", "p64"],
    l: ["l42"],
    r: ["r42"],
    q: ["q43"],
  },
  dim7: {
    p: ["p35"],
    l: ["l15"],
    r: ["r35", "r53"],
    q: ["q15", "qq51"],
    n: ["n51"],
  },
  minMaj7: {
    p: ["p26", "p64"],
    r: ["r63", "r76", "r86"],
    q: ["q62", "q76"],
  },
  maj7aug5: {
    p: ["p47", "p87"],
    l: ["l71"],
    r: ["r76"],
    q: ["q76"],
  },
  dom7aug5: {
    p: ["p18", "p87", "p98"],
    l: ["l89"],
    r: ["r86", "rr98"],
    q: ["qq38", "qq98"],
  },
  dom7b5: {
    p: ["p19", "p39", "p98"],
    l: ["l89"],
    r: ["rr19", "rr39", "rr98"],
    q: ["qq98"],
  },
};

export const getAvailableSeventhsTransformations = (chord: Tetrachord, tonnetz: TonnetzSpaces = [3, 4, 5]): { readonly [key: string]: readonly string[] } => {
  for (const chordFunction of Object.keys(CHORD_TYPES_SEVENTHS)) {
    let chordCompare = CHORD_TYPES_SEVENTHS[chordFunction](chord[0], tonnetz);
    let arrayOfComparedValues: boolean[] = chord.map((item, index) => item === chordCompare[index]);
    const isEachElementTrue: boolean = arrayOfComparedValues.every((item) => item === true);
    if (isEachElementTrue) {
      return AVAILABLESEVENTHSTRANSFORMATIONS[chordFunction];
    }
  }
  return {};
};

export const randomSeventhTransformation = (chord: Tetrachord, tonnetz: TonnetzSpaces = [3, 4, 5]): Tetrachord => {
  for (const chordFunction of Object.keys(CHORD_TYPES_SEVENTHS)) {
    let chordCompare = CHORD_TYPES_SEVENTHS[chordFunction](chord[0], tonnetz);
    let arrayOfComparedValues: boolean[] = chord.map((item, index) => item === chordCompare[index]);
    const isEachElementTrue: boolean = arrayOfComparedValues.every((item) => item === true);
    if (isEachElementTrue) {
      const transformations = AVAILABLESEVENTHSTRANSFORMATIONS[chordFunction];
      // Pick random key
      const transformKey = Object.keys(transformations)[Math.floor(Math.random() * Object.keys(transformations).length)];
      const randomTransformation = transformations[transformKey][Math.floor(Math.random() * transformations[transformKey].length)];
      return SEVENTHSTRANFORMATIONS[randomTransformation](chord, tonnetz);
    }
  }
  return chord;
};

export const STTRANSFORMATIONS: ObjectTransformationsTriadSeventhChords = {
  p1M: p1M,
  l1d: l1d,
  p2m: p2m,
  r2M: r2M,
  p3d: p3d,
  r3m: r3m,
  p4M: p4M,
  l4m: l4m,
  p5d: p5d,
  r5d: r5d,
  rr5d: rr5d,
  z5d: z5d,
};

export const transform = (chord: TriadChord, transformation: string, tonnetz: TonnetzSpaces = [3, 4, 5]): TriadChord => {
  const transformations = transformation.split("");
  let transformedChord: TriadChord = [...chord];
  for (let i = 0; i < transformations.length; i++) {
    const validTransformation = transformations[i];
    if (validTransformation) {
      const parsedTransform = TRANSFORMATIONS[validTransformation];
      if (parsedTransform) {
        transformedChord = parsedTransform(transformedChord, tonnetz);
      }
    }
  }
  return sortingTriadChord(transformedChord, tonnetz);
};

export const seventhsTransformWithoutRegex = (chord: Tetrachord, transformation: string, tonnetz: TonnetzSpaces = [3, 4, 5]): Tetrachord => {
  const transformations = transformation.split("-");
  let transformedChord: Tetrachord = [...chord];
  for (let i = 0; i < transformations.length; i++) {
    const validTransformation = transformations[i];
    if (validTransformation) {
      transformedChord = SEVENTHSTRANFORMATIONS[validTransformation](transformedChord, tonnetz);
    }
  }
  return transformedChord;
};

const keyFunctions = Object.keys(SEVENTHSTRANFORMATIONS);
const regexUnion = keyFunctions.join("|");

export const seventhsTransform = (chord: Tetrachord, transformation: string, tonnetz: TonnetzSpaces = [3, 4, 5]): Tetrachord => {
  const regexSearch = new RegExp(regexUnion, "g");
  const transformations = transformation.match(regexSearch);

  if (transformations === null || (transformations && transformations.length < 1)) {
    return chord;
  }
  let transformedChord: Tetrachord = [...chord];
  for (let i = 0; i < transformations.length; i++) {
    const validTransformation = transformations[i];
    if (validTransformation) {
      transformedChord = SEVENTHSTRANFORMATIONS[validTransformation](transformedChord, tonnetz);
    }
  }
  return transformedChord;
};

export const explorativeTransform = (chord: number[], transformation: string, tonnetz: TonnetzSpaces = [3, 4, 5]): number[] => {
  const regxp = new RegExp("([A-Za-z])([0-9]*)", "g");
  let operations = regxp.exec(transformation);
  if (!operations || (operations && operations.length < 1)) {
    return chord;
  }
  let transformedChord: number[] = [...chordNotesToModN(chord)];
  while (operations != null) {
    if (transformedChord.length === 4) {
      const chordTransformations = getAvailableSeventhsTransformations(transformedChord as Tetrachord);
      if (chordTransformations) {
        const transformOp = chordTransformations[operations[1]];
        if (transformOp) {
          let operationIndex = 0;
          if (operations[2].length > 0) operationIndex = parseInt(operations[2]) - 1;
          operationIndex = safeMod(operationIndex, transformOp.length);
          const parsedTransform = transformOp[operationIndex];
          transformedChord = SEVENTHSTRANFORMATIONS[parsedTransform](transformedChord as Tetrachord, tonnetz);
        }
      }
    } else if (transformedChord.length === 3) {
      const transformOp = AVAILABLETRANSFORMATIONS[operations[1]];
      if (transformOp) {
        if (operations[1] === "N" || operations[1] === "S" || operations[1] === "W" || operations[1] === "E") {
          // Handle cardinal operations
          let operationIndex = operations[2].length > 0 ? parseInt(operations[2]) : 1;
          operationIndex = operationIndex <= 0 ? 1 : operationIndex;
          for (let i = 0; i < operationIndex; i++) {
            transformedChord = TRANSFORMATIONS[operations[1]](transformedChord as TriadChord, tonnetz);
          }
        } else {
          // Handle normal
          let operationIndex = operations[2].length > 0 ? parseInt(operations[2]) - 1 : 0;
          operationIndex = safeMod(operationIndex, transformOp.length);
          const parsedTransform = transformOp[operationIndex];
          transformedChord = TRANSFORMATIONS[parsedTransform](transformedChord as TriadChord, tonnetz);
        }
      }
    }
    operations = regxp.exec(transformation);
  }
  return transformedChord;
};

export const hexaCycles = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 3, components: number = 4): TriadChord[] => {
  const [a, b] = tonnetz;
  const arrayTargetSet: TriadChord[] = [];
  for (let nextHexatonicCycle = 0; nextHexatonicCycle < components * a; nextHexatonicCycle += a) {
    for (let index = 0; index < Math.abs(reps); index++) {
      const baseNote = rootNote + -b * index + nextHexatonicCycle;
      const majorTriad = chordNotesToModN(majorChordFromTonnetz(baseNote, tonnetz));
      const minorTriad = chordNotesToModN(minorChordFromTonnetz(baseNote, tonnetz));
      arrayTargetSet.push(majorTriad, minorTriad);
    }
  }
  return arrayTargetSet;
};

export const octaCycles = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 4, components: number = 3): TriadChord[] => {
  const [a, b] = tonnetz;
  const arrayTargetSet: TriadChord[] = [];
  for (let nexOctatonicCycle = 0; nexOctatonicCycle < components * (2 * b); nexOctatonicCycle += 2 * b) {
    for (let index = 0; index < Math.abs(reps); index++) {
      const baseNote = rootNote + a * index + nexOctatonicCycle;
      const majorTriad = chordNotesToModN(majorChordFromTonnetz(baseNote, tonnetz));
      const minorTriad = chordNotesToModN(minorChordFromTonnetz(baseNote, tonnetz));
      arrayTargetSet.push(majorTriad, minorTriad);
    }
  }
  return arrayTargetSet;
};

export const enneaCycles = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 3, components: number = 4): Tetrachord[] => {
  const [a, b] = tonnetz;
  const arrayTargetSet: Tetrachord[] = [];
  for (let nextEnneatonicCycle = 0; nextEnneatonicCycle < components * a; nextEnneatonicCycle += a) {
    for (let index = 0; index < Math.abs(reps); index++) {
      const baseNote = rootNote + -b * index + nextEnneatonicCycle;
      const dominant7 = chordNotesToModN(dominantSeventhChord(baseNote, tonnetz));
      const minor7 = chordNotesToModN(minorSeventhChord(baseNote, tonnetz));
      const halfdim7 = chordNotesToModN(halfDiminishedChord(baseNote, tonnetz));
      arrayTargetSet.push(dominant7, minor7, halfdim7);
    }
  }
  return arrayTargetSet;
};

export const cubeDance = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 3): TriadChord[] => {
  const [a, b, c] = tonnetz;
  const modulo = a + b + c;
  const arrayTargetSet: TriadChord[] = [];

  for (let index = 0; index <= 3; index++) {
    const nextHexaCycle = (rootNote + ((index * (a + b)) % modulo) + modulo) % modulo;
    for (let index = 0; index < Math.abs(reps); index++) {
      const baseNote = nextHexaCycle + -b * index;
      const majorTriad = chordNotesToModN(majorChordFromTonnetz(baseNote, tonnetz));
      const minorTriad = chordNotesToModN(minorChordFromTonnetz(baseNote, tonnetz));
      arrayTargetSet.push(majorTriad, minorTriad);
    }
    const diff = rootNote + (a + 2 * b);
    const augChord = (diff + ((index * a) % modulo) + modulo) % modulo;
    arrayTargetSet.push(augmentedTriadChord(augChord, tonnetz));
  }
  return arrayTargetSet;
};

export const weitzmannRegionsTwo = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5]): Map<TriadChord, TriadChord[]> => {
  const [a, b, c] = tonnetz;
  const augmentedTriadRoot: TriadChord = augmentedTriadChord(rootNote, tonnetz);

  const arrayTargetSet: TriadChord[] = [];
  const childChord1 = chordNotesToModN(minorChordFromTonnetz(rootNote + (b - a), tonnetz));
  const childChord2 = chordNotesToModN(minorChordFromTonnetz(rootNote + c, tonnetz));
  const childChord3 = chordNotesToModN(minorChordFromTonnetz(rootNote + b + c, tonnetz));
  const childChord4 = chordNotesToModN(majorChordFromTonnetz(rootNote, tonnetz));
  const childChord5 = chordNotesToModN(majorChordFromTonnetz(rootNote + -b, tonnetz));
  const childChord6 = chordNotesToModN(majorChordFromTonnetz(rootNote + b, tonnetz));
  arrayTargetSet.push(childChord1, childChord2, childChord3, childChord4, childChord5, childChord6);

  const treeChords: Map<TriadChord, TriadChord[]> = new Map();
  treeChords.set(augmentedTriadRoot, arrayTargetSet);
  return treeChords;
};

export const weitzmannRegions = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5]): TriadChord[] => {
  const [a, b, c] = tonnetz;
  const augmentedTriadRoot: TriadChord = augmentedTriadChord(rootNote, tonnetz);

  const arrayTargetSet: TriadChord[] = [];
  const childChord1 = chordNotesToModN(minorChordFromTonnetz(rootNote + (b - a), tonnetz));
  const childChord2 = chordNotesToModN(minorChordFromTonnetz(rootNote + c, tonnetz));
  const childChord3 = chordNotesToModN(minorChordFromTonnetz(rootNote + b + c, tonnetz));
  const childChord4 = chordNotesToModN(majorChordFromTonnetz(rootNote, tonnetz));
  const childChord5 = chordNotesToModN(majorChordFromTonnetz(rootNote + -b, tonnetz));
  const childChord6 = chordNotesToModN(majorChordFromTonnetz(rootNote + b, tonnetz));
  arrayTargetSet.push(augmentedTriadRoot, childChord6, childChord3, childChord4, childChord2, childChord5, childChord1);
  return arrayTargetSet;
};

export const octaTowers = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 3): Tetrachord[][] => {
  const [a] = tonnetz;
  const octaLeft: Tetrachord[] = [];
  const octaCenter: Tetrachord[] = [];
  const octaRight: Tetrachord[] = [];
  for (let index = 0; index >= -a * Math.abs(reps); index += -a) {
    const baseNote = rootNote + index;
    const leftHalfDim7 = chordNotesToModN(halfDiminishedChord(baseNote, tonnetz));
    const centerMinor7 = chordNotesToModN(minorSeventhChord(baseNote, tonnetz));
    const rightDominant7 = chordNotesToModN(dominantSeventhChord(baseNote, tonnetz));
    octaLeft.push(leftHalfDim7);
    octaCenter.push(centerMinor7);
    octaRight.push(rightDominant7);
  }
  const octaTowerMatrix: Tetrachord[][] = [];
  octaTowerMatrix.push(octaLeft, octaCenter, octaRight);
  return octaTowerMatrix;
};

export const octaTower = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 3, components = 3): Tetrachord[] => {
  const [a, b] = tonnetz;
  const octaTowerMatrix: Tetrachord[] = [];
  for (let nexOctatonicTower = 0; nexOctatonicTower < components * (2 * b); nexOctatonicTower += 2 * b) {
    for (let index = 0; index >= -a * Math.abs(reps); index += -a) {
      const baseNote = rootNote + index + nexOctatonicTower;
      const leftHalfDim7 = chordNotesToModN(halfDiminishedChord(baseNote, tonnetz));
      const centerMinor7 = chordNotesToModN(minorSeventhChord(baseNote, tonnetz));
      const rightDominant7 = chordNotesToModN(dominantSeventhChord(baseNote, tonnetz));
      octaTowerMatrix.push(leftHalfDim7, centerMinor7, rightDominant7);
    }
  }
  return octaTowerMatrix;
};

export const powerTowers = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 3): Tetrachord[] => {
  const [a, b, c] = tonnetz;
  const modulo = a + b + c;
  const powerTowerMatrix: Tetrachord[] = [];
  for (let index = 0; index < 3; index++) {
    const nextOctaTower = (rootNote + ((index * b) % modulo) + modulo) % modulo;
    for (let index = 0; index >= -a * Math.abs(reps); index += -a) {
      const baseNote = nextOctaTower + index;
      const leftHalfDim7 = chordNotesToModN(halfDiminishedChord(baseNote, tonnetz));
      const centerMinor7 = chordNotesToModN(minorSeventhChord(baseNote, tonnetz));
      const rightDominant7 = chordNotesToModN(dominantSeventhChord(baseNote, tonnetz));
      powerTowerMatrix.push(leftHalfDim7, centerMinor7, rightDominant7);
    }
    powerTowerMatrix.push(chordNotesToModN(diminishedSeventhChord(nextOctaTower + (a - c), tonnetz)));
  }
  return powerTowerMatrix;
};

export const diagAscOctaTower = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 3): Tetrachord[][] => {
  const [a] = tonnetz;
  const octaLeft: Tetrachord[] = [];
  const octaCenter: Tetrachord[] = [];
  const octaRight: Tetrachord[] = [];
  for (let index = 0; index >= -a * Math.abs(reps); index += -a) {
    const baseNote = rootNote + index;
    const leftHalfDim7 = chordNotesToModN(halfDiminishedChord(baseNote, tonnetz));
    const centerMinor7 = chordNotesToModN(minorSeventhChord(baseNote, tonnetz));
    const rightDominant7 = chordNotesToModN(dominantSeventhChord(baseNote, tonnetz));
    octaLeft.push(leftHalfDim7);
    octaCenter.push(centerMinor7);
    octaRight.push(rightDominant7);
  }
  const octaTowerMatrix: Tetrachord[][] = [];
  octaTowerMatrix.push(octaLeft, octaCenter, octaRight);
  return octaTowerMatrix;
};

export const diagDescOctaTower = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 3): Tetrachord[][] => {
  const [a] = tonnetz;
  const octaLeft: Tetrachord[] = [];
  const octaCenter: Tetrachord[] = [];
  const octaRight: Tetrachord[] = [];
  for (let index = 0; index >= -a * Math.abs(reps); index += -a) {
    const baseNote = rootNote + index;
    const leftDominant7 = chordNotesToModN(dominantSeventhChord(baseNote, tonnetz));
    const centerMinor7 = chordNotesToModN(minorSeventhChord(baseNote, tonnetz));
    const rightHalfDim7 = chordNotesToModN(halfDiminishedChord(baseNote, tonnetz));
    octaLeft.push(leftDominant7);
    octaCenter.push(centerMinor7);
    octaRight.push(rightHalfDim7);
  }
  const octaTowerMatrix: Tetrachord[][] = [];
  octaTowerMatrix.push(octaLeft, octaCenter, octaRight);
  return octaTowerMatrix;
};

export const octaTowerLeft = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 3): Tetrachord[] => {
  const [a] = tonnetz;
  const octaTowerMatrix: Tetrachord[] = [];
  for (let index = 0; index >= -a * Math.abs(reps); index += -a) {
    const baseNote = rootNote + index;
    const leftHalfDim7 = chordNotesToModN(halfDiminishedChord(baseNote, tonnetz));
    const centerMinor7 = chordNotesToModN(minorSeventhChord(baseNote, tonnetz));
    const rightDominant7 = chordNotesToModN(dominantSeventhChord(baseNote, tonnetz));
    octaTowerMatrix.push(leftHalfDim7, centerMinor7, rightDominant7);
  }
  return octaTowerMatrix;
};

export const octaTowerRight = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 3): Tetrachord[] => {
  const [a] = tonnetz;
  const octaTowerMatrix: Tetrachord[] = [];
  for (let index = 0; index >= -a * Math.abs(reps); index += -a) {
    const baseNote = rootNote + index;
    const leftDominant7 = chordNotesToModN(dominantSeventhChord(baseNote, tonnetz));
    const centerMinor7 = chordNotesToModN(minorSeventhChord(baseNote, tonnetz));
    const rightHalfDim7 = chordNotesToModN(halfDiminishedChord(baseNote, tonnetz));
    octaTowerMatrix.push(leftDominant7, centerMinor7, rightHalfDim7);
  }
  return octaTowerMatrix;
};

export const boretzRegionsTwo = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5]): Map<Tetrachord, Tetrachord[]> => {
  const [a, b, c] = tonnetz;
  const diminished7Chord: Tetrachord = diminishedSeventhChord(rootNote, tonnetz);

  const arrayTargetSet: Tetrachord[] = [];
  const childChord1 = chordNotesToModN(dominantSeventhChord(rootNote - (b - a), tonnetz));
  const childChord2 = chordNotesToModN(halfDiminishedChord(rootNote + a, tonnetz));
  const childChord3 = chordNotesToModN(dominantSeventhChord(rootNote + (c - a), tonnetz));
  const childChord4 = chordNotesToModN(halfDiminishedChord(rootNote + (c + (b - a)), tonnetz));
  const childChord5 = chordNotesToModN(dominantSeventhChord(rootNote - (a + b), tonnetz));
  const childChord6 = chordNotesToModN(halfDiminishedChord(rootNote + -a, tonnetz));
  const childChord7 = chordNotesToModN(dominantSeventhChord(rootNote + -b, tonnetz));
  const childChord8 = chordNotesToModN(halfDiminishedChord(rootNote, tonnetz));
  arrayTargetSet.push(childChord1, childChord2, childChord3, childChord4, childChord5, childChord6, childChord7, childChord8);

  const treeChords: Map<Tetrachord, Tetrachord[]> = new Map();
  treeChords.set(diminished7Chord, arrayTargetSet);
  return treeChords;
};

export const boretzRegions = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5]): Tetrachord[] => {
  const [a, b, c] = tonnetz;
  const diminished7Chord: Tetrachord = diminishedSeventhChord(rootNote, tonnetz);

  const arrayTargetSet: Tetrachord[] = [];
  const childChord1 = chordNotesToModN(dominantSeventhChord(rootNote - (b - a), tonnetz));
  const childChord2 = chordNotesToModN(halfDiminishedChord(rootNote + a, tonnetz));
  const childChord3 = chordNotesToModN(dominantSeventhChord(rootNote + (c - a), tonnetz));
  const childChord4 = chordNotesToModN(halfDiminishedChord(rootNote + (c + (b - a)), tonnetz));
  const childChord5 = chordNotesToModN(dominantSeventhChord(rootNote - (a + b), tonnetz));
  const childChord6 = chordNotesToModN(halfDiminishedChord(rootNote + -a, tonnetz));
  const childChord7 = chordNotesToModN(dominantSeventhChord(rootNote + -b, tonnetz));
  const childChord8 = chordNotesToModN(halfDiminishedChord(rootNote, tonnetz));
  arrayTargetSet.push(diminished7Chord, childChord1, childChord2, childChord3, childChord4, childChord5, childChord6, childChord7, childChord8);

  return arrayTargetSet;
};

export const hamiltonianCycle1 = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 12): TriadChord[] => {
  const [a, b] = tonnetz;
  const arrayTargetSet: TriadChord[] = [];
  for (let index = 0; index < Math.abs(reps); index++) {
    const baseNoteOne = rootNote + (a + b) * index;
    const majorTriad = chordNotesToModN(majorChordFromTonnetz(baseNoteOne, tonnetz));
    const minorTriad = chordNotesToModN(minorChordFromTonnetz(baseNoteOne + b, tonnetz));
    arrayTargetSet.push(majorTriad, minorTriad);
  }
  return arrayTargetSet;
};

export const hamiltonianCycle2 = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 6): TriadChord[] => {
  const [a, b] = tonnetz;
  const arrayTargetSet: TriadChord[] = [];
  for (let index = 0; index < Math.abs(reps); index++) {
    const baseNoteOne = rootNote + (2 * a + b) * index;
    const majorTriad1 = chordNotesToModN(majorChordFromTonnetz(baseNoteOne, tonnetz));
    const minorTriad2 = chordNotesToModN(minorChordFromTonnetz(baseNoteOne, tonnetz));
    const majorTriad3 = chordNotesToModN(majorChordFromTonnetz(baseNoteOne + a, tonnetz));
    const minorTriad4 = chordNotesToModN(minorChordFromTonnetz(baseNoteOne + a + b, tonnetz));
    arrayTargetSet.push(majorTriad1, minorTriad2, majorTriad3, minorTriad4);
  }
  return arrayTargetSet;
};

export const hamiltonianCycle3 = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 12): TriadChord[] => {
  const [a, b] = tonnetz;
  const arrayTargetSet: TriadChord[] = [];
  const transforms = [0, b, b, 2 * b, 2 * b, 0];
  for (let index = 0; index < Math.abs(reps); index++) {
    const nextGroup = index >= 9 ? 3 : index >= 6 ? 2 : index >= 3 ? 1 : 0;
    const baseNote = rootNote + a * nextGroup;
    const majorTriad = chordNotesToModN(majorChordFromTonnetz(baseNote + transforms[(2 * index) % transforms.length], tonnetz));
    const minorTriad = chordNotesToModN(minorChordFromTonnetz(baseNote + transforms[(2 * index + 1) % transforms.length], tonnetz));
    arrayTargetSet.push(majorTriad, minorTriad);
  }
  return arrayTargetSet;
};

export const hamiltonianCycle4 = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 12): TriadChord[] => {
  const [a, b] = tonnetz;
  const arrayTargetSet: TriadChord[] = [];
  const transforms = [0, 0, a, a, 2 * a, 2 * a, 3 * a, b - a];
  for (let index = 0; index < Math.abs(reps); index++) {
    const nextGroup = index >= 8 ? 2 : index >= 4 ? 1 : 0;
    const baseNote = rootNote + b * nextGroup;
    const majorTriad = chordNotesToModN(majorChordFromTonnetz(baseNote + transforms[(2 * index) % transforms.length], tonnetz));
    const minorTriad = chordNotesToModN(minorChordFromTonnetz(baseNote + transforms[(2 * index + 1) % transforms.length], tonnetz));
    arrayTargetSet.push(majorTriad, minorTriad);
  }
  return arrayTargetSet;
};

export const hamiltonianCycle5 = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 12): TriadChord[] => {
  const [a, b, c] = tonnetz;
  const arrayTargetSet: TriadChord[] = [];
  const transforms = [0, 0, a, a, 2 * a, 2 * a + b, b - a, c];
  for (let index = 0; index < Math.abs(reps); index++) {
    const nextGroup = index >= 8 ? 2 : index >= 4 ? 1 : 0;
    const baseNote = rootNote + 2 * b * nextGroup;
    const majorTriad = chordNotesToModN(majorChordFromTonnetz(baseNote + transforms[(2 * index) % transforms.length], tonnetz));
    const minorTriad = chordNotesToModN(minorChordFromTonnetz(baseNote + transforms[(2 * index + 1) % transforms.length], tonnetz));
    arrayTargetSet.push(majorTriad, minorTriad);
  }
  return arrayTargetSet;
};

export const hamiltonianCycle6 = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 12): TriadChord[] => {
  const [a, b, c] = tonnetz;
  const arrayTargetSet: TriadChord[] = [];
  const transforms = [0, b, b, 2 * b, 2 * b, 0, a, a, 2 * b + a, 2 * b + a, a + b, a + b, 2 * a + b, 2 * a + b, 2 * a, 2 * a, c - a, c - a, c, c, b - a, b - a, 3 * a, 3 * a];
  for (let index = 0; index < Math.abs(reps); index++) {
    const majorTriad = chordNotesToModN(majorChordFromTonnetz(rootNote + transforms[2 * index], tonnetz));
    const minorTriad = chordNotesToModN(minorChordFromTonnetz(rootNote + transforms[2 * index + 1], tonnetz));
    arrayTargetSet.push(majorTriad, minorTriad);
  }
  return arrayTargetSet;
};

export const hamiltonianCycle7 = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 12): TriadChord[] => {
  const [a, b, c] = tonnetz;
  const arrayTargetSet: TriadChord[] = [];
  const transforms = [0, 0, 2 * b, c, c, 3 * a, 3 * a, 2 * a, c - a, c - a, 2 * a + b, a + b, a, a, 2 * a, 2 * a + b, b - a, b - a, b, 2 * b, 2 * b + a, 2 * b + a, a + b, b];
  for (let index = 0; index < Math.abs(reps); index++) {
    const majorTriad = chordNotesToModN(majorChordFromTonnetz(rootNote + transforms[2 * index], tonnetz));
    const minorTriad = chordNotesToModN(minorChordFromTonnetz(rootNote + transforms[2 * index + 1], tonnetz));
    arrayTargetSet.push(majorTriad, minorTriad);
  }
  return arrayTargetSet;
};

export const hamiltonianCycle8 = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 12): TriadChord[] => {
  const [a, b, c] = tonnetz;
  const arrayTargetSet: TriadChord[] = [];
  const transforms = [0, b, a + b, 2 * b + a, 2 * b + a, a, 2 * a, 2 * a + b, 2 * a + b, a + b, a, 0, 2 * b, 2 * b, b, b - a, b - a, c, c, c - a, c - a, 2 * a, 3 * a, 3 * a];
  for (let index = 0; index < Math.abs(reps); index++) {
    const majorTriad = chordNotesToModN(majorChordFromTonnetz(rootNote + transforms[2 * index], tonnetz));
    const minorTriad = chordNotesToModN(minorChordFromTonnetz(rootNote + transforms[2 * index + 1], tonnetz));
    arrayTargetSet.push(majorTriad, minorTriad);
  }
  return arrayTargetSet;
};

export const AVAILABLESTTTRANSFORMATIONS: { readonly [key: string]: { readonly [key: string]: readonly string[] } } = {
  M: {
    p: ["p1M", "p4M"],
    r: ["r2M"],
  },
  m: {
    p: ["p2m"],
    r: ["r3m"],
    l: ["l4m"],
  },
  diminished: {
    p: ["p3d", "p5d"],
    r: ["r5d", "rr5d"],
    l: ["l1d"],
    z: ["z5d"],
  },
  "7": {
    p: ["p1M"],
    l: ["l1d"],
  },
  min7: {
    p: ["p2m"],
    r: ["r2M"],
  },
  hdim7: {
    p: ["p3d"],
    r: ["r3m"],
  },
  maj7: {
    p: ["p4m"],
    l: ["l4m"],
  },
  dim7: {
    p: ["p5d"],
    r: ["r5d", "rr5d"],
    z: ["z5d"],
  },
};
