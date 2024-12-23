import { majorChordFromTonnetz, minorChordFromTonnetz } from "./core/chord-constructors";
import { chordNotesToModN } from "./core/utils";
import { TonnetzSpaces, TriadChord } from "./tonnetz-types";

export const hamiltonianCycle1 = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 12): TriadChord[] => {
  const [a, b] = tonnetz;
  const arrayTargetSet: TriadChord[] = [];
  for (let index = 0; index < Math.abs(reps); index++) {
    const baseNoteOne = rootNote + (a + b) * index;
    const majorTriad = chordNotesToModN(majorChordFromTonnetz(baseNoteOne, tonnetz));
    const minorTriad = chordNotesToModN(minorChordFromTonnetz(baseNoteOne + b, tonnetz));
    arrayTargetSet.push(majorTriad, minorTriad);
  }
  return arrayTargetSet;
};

export const hamiltonianCycle2 = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 6): TriadChord[] => {
  const [a, b] = tonnetz;
  const arrayTargetSet: TriadChord[] = [];
  for (let index = 0; index < Math.abs(reps); index++) {
    const baseNoteOne = rootNote + (2 * a + b) * index;
    const majorTriad1 = chordNotesToModN(majorChordFromTonnetz(baseNoteOne, tonnetz));
    const minorTriad2 = chordNotesToModN(minorChordFromTonnetz(baseNoteOne, tonnetz));
    const majorTriad3 = chordNotesToModN(majorChordFromTonnetz(baseNoteOne + a, tonnetz));
    const minorTriad4 = chordNotesToModN(minorChordFromTonnetz(baseNoteOne + a + b, tonnetz));
    arrayTargetSet.push(majorTriad1, minorTriad2, majorTriad3, minorTriad4);
  }
  return arrayTargetSet;
};

export const hamiltonianCycle3 = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 12): TriadChord[] => {
  const [a, b] = tonnetz;
  const arrayTargetSet: TriadChord[] = [];
  const transforms = [0, b, b, 2 * b, 2 * b, 0];
  for (let index = 0; index < Math.abs(reps); index++) {
    const nextGroup = index >= 9 ? 3 : index >= 6 ? 2 : index >= 3 ? 1 : 0;
    const baseNote = rootNote + a * nextGroup;
    const majorTriad = chordNotesToModN(majorChordFromTonnetz(baseNote + transforms[(2 * index) % transforms.length], tonnetz));
    const minorTriad = chordNotesToModN(minorChordFromTonnetz(baseNote + transforms[(2 * index + 1) % transforms.length], tonnetz));
    arrayTargetSet.push(majorTriad, minorTriad);
  }
  return arrayTargetSet;
};

export const hamiltonianCycle4 = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 12): TriadChord[] => {
  const [a, b] = tonnetz;
  const arrayTargetSet: TriadChord[] = [];
  const transforms = [0, 0, a, a, 2 * a, 2 * a, 3 * a, b - a];
  for (let index = 0; index < Math.abs(reps); index++) {
    const nextGroup = index >= 8 ? 2 : index >= 4 ? 1 : 0;
    const baseNote = rootNote + b * nextGroup;
    const majorTriad = chordNotesToModN(majorChordFromTonnetz(baseNote + transforms[(2 * index) % transforms.length], tonnetz));
    const minorTriad = chordNotesToModN(minorChordFromTonnetz(baseNote + transforms[(2 * index + 1) % transforms.length], tonnetz));
    arrayTargetSet.push(majorTriad, minorTriad);
  }
  return arrayTargetSet;
};

export const hamiltonianCycle5 = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 12): TriadChord[] => {
  const [a, b, c] = tonnetz;
  const arrayTargetSet: TriadChord[] = [];
  const transforms = [0, 0, a, a, 2 * a, 2 * a + b, b - a, c];
  for (let index = 0; index < Math.abs(reps); index++) {
    const nextGroup = index >= 8 ? 2 : index >= 4 ? 1 : 0;
    const baseNote = rootNote + 2 * b * nextGroup;
    const majorTriad = chordNotesToModN(majorChordFromTonnetz(baseNote + transforms[(2 * index) % transforms.length], tonnetz));
    const minorTriad = chordNotesToModN(minorChordFromTonnetz(baseNote + transforms[(2 * index + 1) % transforms.length], tonnetz));
    arrayTargetSet.push(majorTriad, minorTriad);
  }
  return arrayTargetSet;
};

export const hamiltonianCycle6 = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 12): TriadChord[] => {
  const [a, b, c] = tonnetz;
  const arrayTargetSet: TriadChord[] = [];
  const transforms = [0, b, b, 2 * b, 2 * b, 0, a, a, 2 * b + a, 2 * b + a, a + b, a + b, 2 * a + b, 2 * a + b, 2 * a, 2 * a, c - a, c - a, c, c, b - a, b - a, 3 * a, 3 * a];
  for (let index = 0; index < Math.abs(reps); index++) {
    const majorTriad = chordNotesToModN(majorChordFromTonnetz(rootNote + transforms[2 * index], tonnetz));
    const minorTriad = chordNotesToModN(minorChordFromTonnetz(rootNote + transforms[2 * index + 1], tonnetz));
    arrayTargetSet.push(majorTriad, minorTriad);
  }
  return arrayTargetSet;
};

export const hamiltonianCycle7 = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 12): TriadChord[] => {
  const [a, b, c] = tonnetz;
  const arrayTargetSet: TriadChord[] = [];
  const transforms = [0, 0, 2 * b, c, c, 3 * a, 3 * a, 2 * a, c - a, c - a, 2 * a + b, a + b, a, a, 2 * a, 2 * a + b, b - a, b - a, b, 2 * b, 2 * b + a, 2 * b + a, a + b, b];
  for (let index = 0; index < Math.abs(reps); index++) {
    const majorTriad = chordNotesToModN(majorChordFromTonnetz(rootNote + transforms[2 * index], tonnetz));
    const minorTriad = chordNotesToModN(minorChordFromTonnetz(rootNote + transforms[2 * index + 1], tonnetz));
    arrayTargetSet.push(majorTriad, minorTriad);
  }
  return arrayTargetSet;
};

export const hamiltonianCycle8 = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 12): TriadChord[] => {
  const [a, b, c] = tonnetz;
  const arrayTargetSet: TriadChord[] = [];
  const transforms = [0, b, a + b, 2 * b + a, 2 * b + a, a, 2 * a, 2 * a + b, 2 * a + b, a + b, a, 0, 2 * b, 2 * b, b, b - a, b - a, c, c, c - a, c - a, 2 * a, 3 * a, 3 * a];
  for (let index = 0; index < Math.abs(reps); index++) {
    const majorTriad = chordNotesToModN(majorChordFromTonnetz(rootNote + transforms[2 * index], tonnetz));
    const minorTriad = chordNotesToModN(minorChordFromTonnetz(rootNote + transforms[2 * index + 1], tonnetz));
    arrayTargetSet.push(majorTriad, minorTriad);
  }
  return arrayTargetSet;
};
