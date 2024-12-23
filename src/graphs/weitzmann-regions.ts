import { augmentedTriadChord, majorChordFromTonnetz, minorChordFromTonnetz } from "../core/chord-constructors";
import { chordNotesToModN } from "../core/utils";
import { TonnetzSpaces, TriadChord } from "../core/tonnetz-types";

export const weitzmannRegionsTwo = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5]): Map<TriadChord, TriadChord[]> => {
  const [a, b, c] = tonnetz;
  const augmentedTriadRoot: TriadChord = augmentedTriadChord(rootNote, tonnetz);

  const arrayTargetSet: TriadChord[] = [];
  const childChord1 = chordNotesToModN(minorChordFromTonnetz(rootNote + (b - a), tonnetz));
  const childChord2 = chordNotesToModN(minorChordFromTonnetz(rootNote + c, tonnetz));
  const childChord3 = chordNotesToModN(minorChordFromTonnetz(rootNote + b + c, tonnetz));
  const childChord4 = chordNotesToModN(majorChordFromTonnetz(rootNote, tonnetz));
  const childChord5 = chordNotesToModN(majorChordFromTonnetz(rootNote + -b, tonnetz));
  const childChord6 = chordNotesToModN(majorChordFromTonnetz(rootNote + b, tonnetz));
  arrayTargetSet.push(childChord1, childChord2, childChord3, childChord4, childChord5, childChord6);

  const treeChords: Map<TriadChord, TriadChord[]> = new Map();
  treeChords.set(augmentedTriadRoot, arrayTargetSet);
  return treeChords;
};

export const weitzmannRegions = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5]): TriadChord[] => {
  const [a, b, c] = tonnetz;
  const augmentedTriadRoot: TriadChord = augmentedTriadChord(rootNote, tonnetz);

  const arrayTargetSet: TriadChord[] = [];
  const childChord1 = chordNotesToModN(minorChordFromTonnetz(rootNote + (b - a), tonnetz));
  const childChord2 = chordNotesToModN(minorChordFromTonnetz(rootNote + c, tonnetz));
  const childChord3 = chordNotesToModN(minorChordFromTonnetz(rootNote + b + c, tonnetz));
  const childChord4 = chordNotesToModN(majorChordFromTonnetz(rootNote, tonnetz));
  const childChord5 = chordNotesToModN(majorChordFromTonnetz(rootNote + -b, tonnetz));
  const childChord6 = chordNotesToModN(majorChordFromTonnetz(rootNote + b, tonnetz));
  arrayTargetSet.push(augmentedTriadRoot, childChord6, childChord3, childChord4, childChord2, childChord5, childChord1);
  return arrayTargetSet;
};
