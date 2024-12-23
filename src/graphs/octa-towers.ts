import { dominantSeventhChord, halfDiminishedChord, minorSeventhChord } from "../core/chord-constructors";
import { chordNotesToModN } from "../core/utils";
import { Tetrachord, TonnetzSpaces } from "../core/tonnetz-types";

export const octaTower = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 3, components = 3): Tetrachord[] => {
  const [a, b] = tonnetz;
  const octaTowerMatrix: Tetrachord[] = [];
  for (let nexOctatonicTower = 0; nexOctatonicTower < components * (2 * b); nexOctatonicTower += 2 * b) {
    for (let index = 0; index >= -a * Math.abs(reps); index += -a) {
      const baseNote = rootNote + index + nexOctatonicTower;
      const leftHalfDim7 = chordNotesToModN(halfDiminishedChord(baseNote, tonnetz));
      const centerMinor7 = chordNotesToModN(minorSeventhChord(baseNote, tonnetz));
      const rightDominant7 = chordNotesToModN(dominantSeventhChord(baseNote, tonnetz));
      octaTowerMatrix.push(leftHalfDim7, centerMinor7, rightDominant7);
    }
  }
  return octaTowerMatrix;
};

export const octaTowers = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 3): Tetrachord[][] => {
  const [a] = tonnetz;
  const octaLeft: Tetrachord[] = [];
  const octaCenter: Tetrachord[] = [];
  const octaRight: Tetrachord[] = [];
  for (let index = 0; index >= -a * Math.abs(reps); index += -a) {
    const baseNote = rootNote + index;
    const leftHalfDim7 = chordNotesToModN(halfDiminishedChord(baseNote, tonnetz));
    const centerMinor7 = chordNotesToModN(minorSeventhChord(baseNote, tonnetz));
    const rightDominant7 = chordNotesToModN(dominantSeventhChord(baseNote, tonnetz));
    octaLeft.push(leftHalfDim7);
    octaCenter.push(centerMinor7);
    octaRight.push(rightDominant7);
  }
  const octaTowerMatrix: Tetrachord[][] = [];
  octaTowerMatrix.push(octaLeft, octaCenter, octaRight);
  return octaTowerMatrix;
};

export const diagAscOctaTower = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 3): Tetrachord[][] => {
  const [a] = tonnetz;
  const octaLeft: Tetrachord[] = [];
  const octaCenter: Tetrachord[] = [];
  const octaRight: Tetrachord[] = [];
  for (let index = 0; index >= -a * Math.abs(reps); index += -a) {
    const baseNote = rootNote + index;
    const leftHalfDim7 = chordNotesToModN(halfDiminishedChord(baseNote, tonnetz));
    const centerMinor7 = chordNotesToModN(minorSeventhChord(baseNote, tonnetz));
    const rightDominant7 = chordNotesToModN(dominantSeventhChord(baseNote, tonnetz));
    octaLeft.push(leftHalfDim7);
    octaCenter.push(centerMinor7);
    octaRight.push(rightDominant7);
  }
  const octaTowerMatrix: Tetrachord[][] = [];
  octaTowerMatrix.push(octaLeft, octaCenter, octaRight);
  return octaTowerMatrix;
};

export const diagDescOctaTower = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 3): Tetrachord[][] => {
  const [a] = tonnetz;
  const octaLeft: Tetrachord[] = [];
  const octaCenter: Tetrachord[] = [];
  const octaRight: Tetrachord[] = [];
  for (let index = 0; index >= -a * Math.abs(reps); index += -a) {
    const baseNote = rootNote + index;
    const leftDominant7 = chordNotesToModN(dominantSeventhChord(baseNote, tonnetz));
    const centerMinor7 = chordNotesToModN(minorSeventhChord(baseNote, tonnetz));
    const rightHalfDim7 = chordNotesToModN(halfDiminishedChord(baseNote, tonnetz));
    octaLeft.push(leftDominant7);
    octaCenter.push(centerMinor7);
    octaRight.push(rightHalfDim7);
  }
  const octaTowerMatrix: Tetrachord[][] = [];
  octaTowerMatrix.push(octaLeft, octaCenter, octaRight);
  return octaTowerMatrix;
};

export const octaTowerLeft = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 3): Tetrachord[] => {
  const [a] = tonnetz;
  const octaTowerMatrix: Tetrachord[] = [];
  for (let index = 0; index >= -a * Math.abs(reps); index += -a) {
    const baseNote = rootNote + index;
    const leftHalfDim7 = chordNotesToModN(halfDiminishedChord(baseNote, tonnetz));
    const centerMinor7 = chordNotesToModN(minorSeventhChord(baseNote, tonnetz));
    const rightDominant7 = chordNotesToModN(dominantSeventhChord(baseNote, tonnetz));
    octaTowerMatrix.push(leftHalfDim7, centerMinor7, rightDominant7);
  }
  return octaTowerMatrix;
};

export const octaTowerRight = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 3): Tetrachord[] => {
  const [a] = tonnetz;
  const octaTowerMatrix: Tetrachord[] = [];
  for (let index = 0; index >= -a * Math.abs(reps); index += -a) {
    const baseNote = rootNote + index;
    const leftDominant7 = chordNotesToModN(dominantSeventhChord(baseNote, tonnetz));
    const centerMinor7 = chordNotesToModN(minorSeventhChord(baseNote, tonnetz));
    const rightHalfDim7 = chordNotesToModN(halfDiminishedChord(baseNote, tonnetz));
    octaTowerMatrix.push(leftDominant7, centerMinor7, rightHalfDim7);
  }
  return octaTowerMatrix;
};
