import { PLRFilmTransformationFn } from "../core/transform-functions";
import { TransformationFunctions, TriadChord } from "../core/tonnetz-types";

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

export const CARDINAL = {
  northTransform,
  southTransform,
  eastTransform,
  westTransform,
};
