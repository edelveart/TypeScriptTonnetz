import { diminishedSeventhChord, diminishedTriadChord, dominantSeventhChord, halfDiminishedChord, majorChordFromTonnetz, majorSeventhChord, minorChordFromTonnetz, minorSeventhChord } from "../core/chord-constructors";
import { STTransformationFn } from "../core/transform-functions";
import { Tetrachord, TransformationTriadSeventhChords, TriadChord } from "../core/tonnetz-types";

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

export const ST_GROUP = {
  p1M,
  l1d,
  p2m,
  r2M,
  p3d,
  r3m,
  p4M,
  l4m,
  p5d,
  r5d,
  rr5d,
  z5d,
};
