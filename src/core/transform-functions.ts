import type { Tetrachord, TonnetzSpaces, TriadChord, ConstructorTetraChord } from "../tonnetz-types";
import { majorChordFromTonnetz, minorChordFromTonnetz } from "./chord-constructors";
import { chordComparison, chordNotesToModN, sortingTriadChord } from "./utils";

export const triadTransformationFn = (chordFromTonnetz: TriadChord, tonnetz: TonnetzSpaces, x: number, y: number): TriadChord => {
  const modulo = tonnetz.reduce((acc, value) => acc + value, 0);
  const reduceModN = chordNotesToModN(chordFromTonnetz);
  let rootPositionTriad: TriadChord = sortingTriadChord(reduceModN, tonnetz);

  const equalToChordOne = chordComparison(rootPositionTriad, majorChordFromTonnetz(rootPositionTriad[0], tonnetz));
  const equalToChordTwo = chordComparison(rootPositionTriad, minorChordFromTonnetz(rootPositionTriad[0], tonnetz));

  if (equalToChordOne === equalToChordTwo) return rootPositionTriad;

  if (equalToChordOne) {
    rootPositionTriad = minorChordFromTonnetz(rootPositionTriad[0] + x, tonnetz);
  } else if (equalToChordTwo) {
    rootPositionTriad = majorChordFromTonnetz(rootPositionTriad[0] + y, tonnetz);
  }
  const targetTriadChord = chordNotesToModN(rootPositionTriad, modulo);
  return targetTriadChord;
};

export const tetraTransformationFn = (chordFromTonnetz: Tetrachord, tonnetz: TonnetzSpaces, chordTypeOne: ConstructorTetraChord, chordTypeTwo: ConstructorTetraChord, x: number, y: number): Tetrachord => {
  const modulo = tonnetz.reduce((acc, value) => acc + value, 0);

  const reduceModN = chordNotesToModN(chordFromTonnetz);

  const equalToChordOne = chordComparison(reduceModN, chordTypeOne(reduceModN[0], tonnetz));
  const equalToChordTwo = chordComparison(reduceModN, chordTypeTwo(reduceModN[0], tonnetz));

  if (equalToChordOne === equalToChordTwo) return reduceModN;

  let transformedChord: Tetrachord = [...reduceModN];
  if (equalToChordOne) {
    transformedChord = chordTypeTwo(transformedChord[0] + x, tonnetz);
  } else {
    transformedChord = chordTypeOne(transformedChord[0] + y, tonnetz);
  }
  const targetTetraChord = chordNotesToModN(transformedChord, modulo);
  return targetTetraChord;
};
