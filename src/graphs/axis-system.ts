import { majorChordFromTonnetz, minorChordFromTonnetz } from "../core/chord-constructors";
import { chordNotesToModN } from "../core/utils";
import { TonnetzSpaces, TriadChord } from "../core/tonnetz-types";

export const axisClockMajor = (rootNote: number, clockwise: number = -1, tonnetz: TonnetzSpaces = [3, 4, 5]): TriadChord[] => {
  const [a] = tonnetz;
  const cardinalArray: TriadChord[] = [];
  for (let index = 0; Math.abs(index) < 4 * a; index -= a * clockwise) {
    const majorTriadsGroup = chordNotesToModN(majorChordFromTonnetz(rootNote + index, tonnetz));
    cardinalArray.push(majorTriadsGroup);
  }
  return cardinalArray;
};

export const axisClockMinor = (rootNote: number, clockwise = -1, tonnetz: TonnetzSpaces = [3, 4, 5]): TriadChord[] => {
  const [a] = tonnetz;
  const cardinalArray: TriadChord[] = [];
  for (let index = 0; Math.abs(index) < 4 * a; index -= a * clockwise) {
    const minorTriadsGroup = chordNotesToModN(minorChordFromTonnetz(rootNote + index, tonnetz));
    cardinalArray.push(minorTriadsGroup);
  }
  return cardinalArray;
};

export const axisClockMajMin = (rootNote: number, clockwise: number = -1, tonnetz: TonnetzSpaces = [3, 4, 5]): TriadChord[] => {
  const [a] = tonnetz;
  const cardinalArray: TriadChord[] = [];
  for (let index = 0; Math.abs(index) < 4 * a; index -= a * clockwise) {
    const chord =
      (index / a) % 2 === 0
        ? chordNotesToModN(majorChordFromTonnetz(rootNote + index, tonnetz))
        : chordNotesToModN(minorChordFromTonnetz(rootNote + index, tonnetz));

    cardinalArray.push(chord);
  }
  return cardinalArray;
};

export const axisClockMinMaj = (rootNote: number, clockwise: number = -1, tonnetz: TonnetzSpaces = [3, 4, 5]): TriadChord[] => {
  const [a] = tonnetz;
  const cardinalArray: TriadChord[] = [];
  for (let index = 0; Math.abs(index) < 4 * a; index -= a * clockwise) {
    const chord =
      (index / a) % 2 === 0
        ? chordNotesToModN(minorChordFromTonnetz(rootNote + index, tonnetz))
        : chordNotesToModN(majorChordFromTonnetz(rootNote + index, tonnetz));

    cardinalArray.push(chord);
  }
  return cardinalArray;
};

export const axisCrossMaj = (rootNote: number, clockwise: number = -1, tonnetz: TonnetzSpaces = [3, 4, 5]): TriadChord[] => {
  const cardinalArray: TriadChord[] = [];
  const [north, west, south, east] = axisClockMajor(rootNote, clockwise, tonnetz);
  cardinalArray.push(north, south, west, east);
  return cardinalArray;
};

export const axisCrossMin = (rootNote: number, clockwise: number = -1, tonnetz: TonnetzSpaces = [3, 4, 5]): TriadChord[] => {
  const cardinalArray: TriadChord[] = [];
  const [north, west, south, east] = axisClockMinor(rootNote, clockwise, tonnetz);
  cardinalArray.push(north, south, west, east);
  return cardinalArray;
};

export const axisCrossMajMin = (rootNote: number, clockwise: number = -1, tonnetz: TonnetzSpaces = [3, 4, 5]): TriadChord[] => {
  const cardinalArray: TriadChord[] = [];
  const [northMaj, , westMaj] = axisCrossMaj(rootNote, clockwise, tonnetz);
  const [, southMin, , eastMin] = axisCrossMin(rootNote, clockwise, tonnetz);
  cardinalArray.push(northMaj, southMin, westMaj, eastMin);
  return cardinalArray;
};

export const axisCrossMinMaj = (rootNote: number, clockwise: number = -1, tonnetz: TonnetzSpaces = [3, 4, 5]): TriadChord[] => {
  const cardinalArray: TriadChord[] = [];
  const [northMin, , westMin] = axisCrossMin(rootNote, clockwise, tonnetz);
  const [, southMaj, , eastMaj] = axisCrossMaj(rootNote, clockwise, tonnetz);
  cardinalArray.push(northMin, southMaj, westMin, eastMaj);
  return cardinalArray;
};

type ExploreMapOfAxisFuncs = {
  [key: number]: ((rootNote: number, clockwise: number, tonnetz: TonnetzSpaces) => TriadChord[])[];
};

const EXPLORE_MAP: ExploreMapOfAxisFuncs = {
  0: [axisClockMajor, axisClockMinor],
  1: [axisClockMajor, axisClockMinor],
  2: [axisClockMinor, axisClockMajor],
  3: [axisClockMinor, axisClockMajor],
  4: [axisCrossMaj, axisCrossMin],
  5: [axisCrossMaj, axisCrossMin],
  6: [axisCrossMin, axisCrossMaj],
  7: [axisCrossMin, axisCrossMaj],
  8: [axisCrossMajMin, axisCrossMinMaj],
  9: [axisCrossMajMin, axisCrossMinMaj],
};

export const axisSystem = (rootNote: number, explore: number = 0, tonnetz: TonnetzSpaces = [3, 4, 5]): TriadChord[] => {
  const numOfMapOpts = Object.keys(EXPLORE_MAP).length;

  explore = ((explore % numOfMapOpts) + numOfMapOpts) % numOfMapOpts;
  const axisFuncs = EXPLORE_MAP[explore];

  const clockwise = explore % 2 === 0 ? -1 : 1;
  return [...axisFuncs[0](rootNote, clockwise, tonnetz), ...axisFuncs[1](rootNote, clockwise, tonnetz)];
};
