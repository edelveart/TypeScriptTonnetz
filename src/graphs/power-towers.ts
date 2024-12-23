import { diminishedSeventhChord, dominantSeventhChord, halfDiminishedChord, minorSeventhChord } from "../core/chord-constructors";
import { chordNotesToModN } from "../core/utils";
import { Tetrachord, TonnetzSpaces } from "../core/tonnetz-types";

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
