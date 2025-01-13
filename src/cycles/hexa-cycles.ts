import { majorChordFromTonnetz, minorChordFromTonnetz } from "../core/chord-constructors";
import { chordNotesToModN } from "../core/utils";
import { TonnetzSpaces, TriadChord } from "../core/tonnetz-types";

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
