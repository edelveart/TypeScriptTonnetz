import { dominantSeventhChord, halfDiminishedChord, minorSeventhChord } from "../core/chord-constructors";
import { chordNotesToModN } from "../core/utils";
import { Tetrachord, TonnetzSpaces } from "../core/tonnetz-types";

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
