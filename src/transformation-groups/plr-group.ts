import { PLRFilmTransformationFn } from "../core/transform-functions";
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

export const PLR = {
  parallelTransform,
  leadingToneTransform,
  relativeTransform,
};
