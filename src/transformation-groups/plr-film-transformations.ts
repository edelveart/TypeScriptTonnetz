import { majorChordFromTonnetz, minorChordFromTonnetz } from "../core/chord-constructors";
import { PLRFilmTransformationFn } from "../core/transform-functions";
import { chordComparison, chordNotesToModN, sortingTriadChord } from "../core/utils";
import { TransformationFunctions, TriadChord } from "../core/tonnetz-types";

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
