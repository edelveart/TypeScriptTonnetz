import { dominantSeventhChord, halfDiminishedChord, majorChordFromTonnetz, minorChordFromTonnetz, minorSeventhChord } from "../core/chord-constructors";
import { chordNotesToModN } from "../core/utils";
import { Tetrachord, TonnetzSpaces, TriadChord } from "../core/tonnetz-types";

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
