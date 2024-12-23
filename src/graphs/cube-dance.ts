import { augmentedTriadChord, majorChordFromTonnetz, minorChordFromTonnetz } from "../core/chord-constructors";
import { chordNotesToModN } from "../core/utils";
import { TonnetzSpaces, TriadChord } from "../core/tonnetz-types";

export const cubeDance = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 3): TriadChord[] => {
  const [a, b, c] = tonnetz;
  const modulo = a + b + c;
  const arrayTargetSet: TriadChord[] = [];

  for (let index = 0; index <= 3; index++) {
    const nextHexaCycle = (rootNote + ((index * (a + b)) % modulo) + modulo) % modulo;
    for (let index = 0; index < Math.abs(reps); index++) {
      const baseNote = nextHexaCycle + -b * index;
      const majorTriad = chordNotesToModN(majorChordFromTonnetz(baseNote, tonnetz));
      const minorTriad = chordNotesToModN(minorChordFromTonnetz(baseNote, tonnetz));
      arrayTargetSet.push(majorTriad, minorTriad);
    }
    const diff = rootNote + (a + 2 * b);
    const augChord = (diff + ((index * a) % modulo) + modulo) % modulo;
    arrayTargetSet.push(augmentedTriadChord(augChord, tonnetz));
  }
  return arrayTargetSet;
};
