import { majorChordFromTonnetz, minorChordFromTonnetz } from "../core/chord-constructors";
import { TonnetzSpaces, TriadChord } from "../core/tonnetz-types";
import { chordNotesToModN } from "../core/utils";

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
