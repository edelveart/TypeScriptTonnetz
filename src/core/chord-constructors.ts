import { Tetrachord, TonnetzSpaces, TriadChord } from "../tonnetz-types";

export const majorChordFromTonnetz = (rootNote: number, tonnetz: TonnetzSpaces): TriadChord => {
  const [a, b, c] = tonnetz;
  const modulo = a + b + c;

  const firstNote = ((rootNote % modulo) + modulo) % modulo;
  const secondNote = (rootNote + (b % modulo) + modulo) % modulo;
  const thirdNote = (rootNote + ((a + b) % modulo) + modulo) % modulo;

  const majorTriad: TriadChord = [firstNote, secondNote, thirdNote];
  return majorTriad;
};

export const minorChordFromTonnetz = (rootNote: number, tonnetz: TonnetzSpaces): TriadChord => {
  const [a, b, c] = tonnetz;
  const modulo = a + b + c;

  const firstNote = ((rootNote % modulo) + modulo) % modulo;
  const secondNote = (rootNote + (a % modulo) + modulo) % modulo;
  const thirdNote = (rootNote + ((a + b) % modulo) + modulo) % modulo;

  const minorTriad: TriadChord = [firstNote, secondNote, thirdNote];
  return minorTriad;
};

export const augmentedTriadChord = (rootNote: number, tonnetz: TonnetzSpaces): TriadChord => {
  const [a, b, c] = tonnetz;
  const modulo = a + b + c;

  const firstNote = ((rootNote % modulo) + modulo) % modulo;
  const secondNote = (rootNote + (b % modulo) + modulo) % modulo;
  const thirdNote = (rootNote + ((2 * b) % modulo) + modulo) % modulo;

  const augmentedTriad: TriadChord = [firstNote, secondNote, thirdNote];
  return augmentedTriad;
};

export const diminishedTriadChord = (rootNote: number, tonnetz: TonnetzSpaces): TriadChord => {
  const [a, b, c] = tonnetz;
  const modulo = a + b + c;

  const firstNote = ((rootNote % modulo) + modulo) % modulo;
  const secondNote = (rootNote + (a % modulo) + modulo) % modulo;
  const thirdNote = (rootNote + ((2 * a) % modulo) + modulo) % modulo;

  const diminishedTriadChord: TriadChord = [firstNote, secondNote, thirdNote];
  return diminishedTriadChord;
};

export const dominantSeventhChord = (rootNote: number, tonnetz: TonnetzSpaces): Tetrachord => {
  const [a, b, c] = tonnetz;
  const modulo = a + b + c;

  const firstNote = ((rootNote % modulo) + modulo) % modulo;
  const secondNote = (rootNote + (b % modulo) + modulo) % modulo;
  const thirdNote = (rootNote + ((a + b) % modulo) + modulo) % modulo;
  const fourthNote = (rootNote + ((2 * a + b) % modulo) + modulo) % modulo;

  const dominant7: Tetrachord = [firstNote, secondNote, thirdNote, fourthNote];
  return dominant7;
};

export const majorSeventhChord = (rootNote: number, tonnetz: TonnetzSpaces): Tetrachord => {
  const [a, b, c] = tonnetz;
  const modulo = a + b + c;

  const firstNote = ((rootNote % modulo) + modulo) % modulo;
  const secondNote = (rootNote + (b % modulo) + modulo) % modulo;
  const thirdNote = (rootNote + ((a + b) % modulo) + modulo) % modulo;
  const fourthNote = (rootNote + ((2 * b + a) % modulo) + modulo) % modulo;

  const maj7: Tetrachord = [firstNote, secondNote, thirdNote, fourthNote];
  return maj7;
};

export const minorSeventhChord = (rootNote: number, tonnetz: TonnetzSpaces): Tetrachord => {
  const [a, b, c] = tonnetz;
  const modulo = a + b + c;

  const firstNote = ((rootNote % modulo) + modulo) % modulo;
  const secondNote = (rootNote + (a % modulo) + modulo) % modulo;
  const thirdNote = (rootNote + ((a + b) % modulo) + modulo) % modulo;
  const fourthNote = (rootNote + ((2 * a + b) % modulo) + modulo) % modulo;

  const min7: Tetrachord = [firstNote, secondNote, thirdNote, fourthNote];
  return min7;
};

export const halfDiminishedChord = (rootNote: number, tonnetz: TonnetzSpaces): Tetrachord => {
  const [a, b, c] = tonnetz;
  const modulo = a + b + c;

  const firstNote = ((rootNote % modulo) + modulo) % modulo;
  const secondNote = (rootNote + (a % modulo) + modulo) % modulo;
  const thirdNote = (rootNote + ((a + b - (b - a)) % modulo) + modulo) % modulo;
  const fourthNote = (rootNote + ((2 * a + b) % modulo) + modulo) % modulo;

  const halfdim7: Tetrachord = [firstNote, secondNote, thirdNote, fourthNote];
  return halfdim7;
};

export const diminishedSeventhChord = (rootNote: number, tonnetz: TonnetzSpaces): Tetrachord => {
  const [a, b, c] = tonnetz;
  const modulo = a + b + c;

  const firstNote = ((rootNote % modulo) + modulo) % modulo;
  const secondNote = (rootNote + (a % modulo) + modulo) % modulo;
  const thirdNote = (rootNote + ((2 * a) % modulo) + modulo) % modulo;
  const fourthNote = (rootNote + ((3 * a) % modulo) + modulo) % modulo;

  const dim7: Tetrachord = [firstNote, secondNote, thirdNote, fourthNote];
  return dim7;
};

export const minorMajorSeventhChord = (rootNote: number, tonnetz: TonnetzSpaces): Tetrachord => {
  const [a, b, c] = tonnetz;
  const modulo = a + b + c;

  const firstNote = ((rootNote % modulo) + modulo) % modulo;
  const secondNote = (rootNote + (a % modulo) + modulo) % modulo;
  const thirdNote = (rootNote + ((a + b) % modulo) + modulo) % modulo;
  const fourthNote = (rootNote + ((2 * b + a) % modulo) + modulo) % modulo;

  const minMaj7: Tetrachord = [firstNote, secondNote, thirdNote, fourthNote];
  return minMaj7;
};

export const augmentedMajorSeventhChord = (rootNote: number, tonnetz: TonnetzSpaces): Tetrachord => {
  const [a, b, c] = tonnetz;
  const modulo = a + b + c;

  const firstNote = ((rootNote % modulo) + modulo) % modulo;
  const secondNote = (rootNote + (b % modulo) + modulo) % modulo;
  const thirdNote = (rootNote + ((2 * b) % modulo) + modulo) % modulo;
  const fourthNote = (rootNote + ((2 * b + a) % modulo) + modulo) % modulo;

  const maj7aug5: Tetrachord = [firstNote, secondNote, thirdNote, fourthNote];
  return maj7aug5;
};

export const sharpFiveDominantSeventhChord = (rootNote: number, tonnetz: TonnetzSpaces): Tetrachord => {
  const [a, b, c] = tonnetz;
  const modulo = a + b + c;

  const firstNote = ((rootNote % modulo) + modulo) % modulo;
  const secondNote = (rootNote + (b % modulo) + modulo) % modulo;
  const thirdNote = (rootNote + ((2 * b) % modulo) + modulo) % modulo;
  const fourthNote = (rootNote + ((2 * a + b) % modulo) + modulo) % modulo;

  const dom7aug5: Tetrachord = [firstNote, secondNote, thirdNote, fourthNote];
  return dom7aug5;
};

export const flatFiveDominantSeventhChord = (rootNote: number, tonnetz: TonnetzSpaces): Tetrachord => {
  const [a, b, c] = tonnetz;
  const modulo = a + b + c;

  const firstNote = ((rootNote % modulo) + modulo) % modulo;
  const secondNote = (rootNote + (b % modulo) + modulo) % modulo;
  const thirdNote = (rootNote + ((2 * a) % modulo) + modulo) % modulo;
  const fourthNote = (rootNote + ((2 * a + b) % modulo) + modulo) % modulo;

  const Dom7b5: Tetrachord = [firstNote, secondNote, thirdNote, fourthNote];
  return Dom7b5;
};
