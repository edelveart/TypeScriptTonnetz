import { Tetrachord, TonnetzSpaces, TriadChord } from "../tonnetz-types";

export const firstChordComparison = (reduceModN: TriadChord | Tetrachord, compareOne: TriadChord | Tetrachord): boolean => {
  if (reduceModN.length !== compareOne.length) {
    return false;
  }
  const firstChordCompare = reduceModN.map((item, index) => item === compareOne[index]);
  const equalFirstChord: boolean = firstChordCompare.every((item) => item === true);
  return equalFirstChord;
};

export const secondChordComparison = (reduceModN: TriadChord | Tetrachord, compareTwo: TriadChord | Tetrachord): boolean => {
  if (reduceModN.length !== compareTwo.length) {
    return false;
  }
  const secondChordCompare = reduceModN.map((item, index) => item === compareTwo[index]);
  const equalSecondChord: boolean = secondChordCompare.every((item) => item === true);
  return equalSecondChord;
};

export const safeMod = (value: number, n: number) => {
  if (value === 0 || n === 0) return 0;
  return ((value % n) + n) % n;
};

export const sortingTriadChord = (disorderedTriad: TriadChord, tonnetz: TonnetzSpaces): TriadChord => {
  const [, , c] = tonnetz;
  disorderedTriad.sort((x, y) => x - y);
  const temp: TriadChord = [...disorderedTriad];

  if (Math.abs(disorderedTriad[1] - disorderedTriad[0]) === c) {
    disorderedTriad[0] = temp[1];
    disorderedTriad[1] = temp[2];
    disorderedTriad[2] = temp[0];
  }
  if (Math.abs(disorderedTriad[2] - disorderedTriad[1]) === c) {
    disorderedTriad[0] = temp[2];
    disorderedTriad[1] = temp[0];
    disorderedTriad[2] = temp[1];
  }
  return disorderedTriad;
};

export const chordNotesToModN = <T extends number[]>(chord: T, modulo: number = 12): T => {
  const notesModN: number[] = [];
  for (let i = 0; i < chord.length; i++) {
    const noteComponents = ((chord[i] % modulo) + modulo) % modulo;
    notesModN.push(noteComponents);
  }
  return notesModN as T;
};

export const chordComparison = (reduceModN: TriadChord | Tetrachord, compareChord: TriadChord | Tetrachord): boolean => {
  if (reduceModN.length !== compareChord.length) {
    return false;
  }
  const firstChordCompare = reduceModN.map((item, index) => item === compareChord[index]);
  const equalChord: boolean = firstChordCompare.every((item) => item === true);
  return equalChord;
};
