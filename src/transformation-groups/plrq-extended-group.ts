import { augmentedMajorSeventhChord, diminishedSeventhChord, dominantSeventhChord, flatFiveDominantSeventhChord, halfDiminishedChord, majorSeventhChord, minorMajorSeventhChord, minorSeventhChord, sharpFiveDominantSeventhChord } from "../core/chord-constructors";
import { PLRQExtendedTransformationFn } from "../core/transform-functions";
import { Tetrachord, TransformationFunctionsSeventhChords } from "../core/tonnetz-types";

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

export const PLRQ_EXTENDED = {
  p12,
  p14,
  p23,
  p35,
  r12,
  r23,
  r42,
  r35,
  r53,
  l13,
  l15,
  l42,
  q43,
  q15,
  rr35,
  qq51,
  n51,
  p18,
  p19,
  p26,
  p39,
  p47,
  p64,
  p87,
  p98,
  r63,
  r76,
  r86,
  l71,
  l89,
  q62,
  q76,
  rr19,
  rr39,
  rr98,
  qq38,
  qq98,
};
