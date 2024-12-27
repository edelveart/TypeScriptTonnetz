import { augmentedTriadChord, diminishedTriadChord, majorChordFromTonnetz, minorChordFromTonnetz } from "../core/chord-constructors";
import { PLRStarTransformationFn } from "../core/transform-functions";
import { TransformationFunctions, TriadChord } from "../core/tonnetz-types";

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

export const PLR_STAR = {
  q13,
  q42,
  l41,
  n42,
  l14,
  p32,
  rt42,
  p41,
  lt13,
  rt23,
};
