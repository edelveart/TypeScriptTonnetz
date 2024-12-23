export type TonnetzSpaceConnected = [3, 4, 5] | [1, 1, 10] | [1, 2, 9] | [1, 3, 8] | [1, 4, 7] | [1, 5, 6] | [2, 3, 7] | [2, 5, 5];
export type TonnetzSpaceNonConnected = [2, 4, 6] | [2, 2, 8] | [3, 3, 6] | [4, 4, 4];

export type TonnetzSpaces = TonnetzSpaceConnected | TonnetzSpaceNonConnected;

export type TriadChord = [number, number, number];
export type Tetrachord = [number, number, number, number];

export type TransformationFunctions = (triad: TriadChord, tonnetz: TonnetzSpaces) => TriadChord;

export type ObjectTransformations = {
  [key: string]: TransformationFunctions;
};

export type TransformationFunctionsSeventhChords = (tetrachord: Tetrachord, tonnetz: TonnetzSpaces) => Tetrachord;

export type ObjectTransformationsSeventhChords = {
  [key: string]: TransformationFunctionsSeventhChords;
};

export type TransformationTriadSeventhChords = (chord: TriadChord | Tetrachord, tonnetz: TonnetzSpaces) => TriadChord | Tetrachord;

export type ObjectTransformationsTriadSeventhChords = {
  [key: string]: TransformationTriadSeventhChords;
};

export type ChordGenerationFunctions = (rootNote: number, tonnetz: TonnetzSpaces) => TriadChord | Tetrachord;

export type ChordGenerators = {
  [key: string]: ChordGenerationFunctions;
};

export type ConstructorTriadChord = (rootNote: number, tonnetz: TonnetzSpaces) => TriadChord;
export type ConstructorTetraChord = (rootNote: number, tonnetz: TonnetzSpaces) => Tetrachord;
