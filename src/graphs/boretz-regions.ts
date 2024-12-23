import { diminishedSeventhChord, dominantSeventhChord, halfDiminishedChord } from "../core/chord-constructors";
import { chordNotesToModN } from "../core/utils";
import { Tetrachord, TonnetzSpaces } from "../core/tonnetz-types";

export const boretzRegionsTwo = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5]): Map<Tetrachord, Tetrachord[]> => {
  const [a, b, c] = tonnetz;
  const diminished7Chord: Tetrachord = diminishedSeventhChord(rootNote, tonnetz);

  const arrayTargetSet: Tetrachord[] = [];
  const childChord1 = chordNotesToModN(dominantSeventhChord(rootNote - (b - a), tonnetz));
  const childChord2 = chordNotesToModN(halfDiminishedChord(rootNote + a, tonnetz));
  const childChord3 = chordNotesToModN(dominantSeventhChord(rootNote + (c - a), tonnetz));
  const childChord4 = chordNotesToModN(halfDiminishedChord(rootNote + (c + (b - a)), tonnetz));
  const childChord5 = chordNotesToModN(dominantSeventhChord(rootNote - (a + b), tonnetz));
  const childChord6 = chordNotesToModN(halfDiminishedChord(rootNote + -a, tonnetz));
  const childChord7 = chordNotesToModN(dominantSeventhChord(rootNote + -b, tonnetz));
  const childChord8 = chordNotesToModN(halfDiminishedChord(rootNote, tonnetz));
  arrayTargetSet.push(childChord1, childChord2, childChord3, childChord4, childChord5, childChord6, childChord7, childChord8);

  const treeChords: Map<Tetrachord, Tetrachord[]> = new Map();
  treeChords.set(diminished7Chord, arrayTargetSet);
  return treeChords;
};

export const boretzRegions = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5]): Tetrachord[] => {
  const [a, b, c] = tonnetz;
  const diminished7Chord: Tetrachord = diminishedSeventhChord(rootNote, tonnetz);

  const arrayTargetSet: Tetrachord[] = [];
  const childChord1 = chordNotesToModN(dominantSeventhChord(rootNote - (b - a), tonnetz));
  const childChord2 = chordNotesToModN(halfDiminishedChord(rootNote + a, tonnetz));
  const childChord3 = chordNotesToModN(dominantSeventhChord(rootNote + (c - a), tonnetz));
  const childChord4 = chordNotesToModN(halfDiminishedChord(rootNote + (c + (b - a)), tonnetz));
  const childChord5 = chordNotesToModN(dominantSeventhChord(rootNote - (a + b), tonnetz));
  const childChord6 = chordNotesToModN(halfDiminishedChord(rootNote + -a, tonnetz));
  const childChord7 = chordNotesToModN(dominantSeventhChord(rootNote + -b, tonnetz));
  const childChord8 = chordNotesToModN(halfDiminishedChord(rootNote, tonnetz));
  arrayTargetSet.push(diminished7Chord, childChord1, childChord2, childChord3, childChord4, childChord5, childChord6, childChord7, childChord8);

  return arrayTargetSet;
};
