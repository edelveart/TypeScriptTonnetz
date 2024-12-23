import type { TonnetzSpaces, TriadChord, Tetrachord, ChordGenerators, ObjectTransformations, ObjectTransformationsSeventhChords, ObjectTransformationsTriadSeventhChords } from "./core/tonnetz-types";

import {
  majorChordFromTonnetz,
  minorChordFromTonnetz,
  augmentedMajorSeventhChord,
  augmentedTriadChord,
  diminishedSeventhChord,
  diminishedTriadChord,
  dominantSeventhChord,
  flatFiveDominantSeventhChord,
  halfDiminishedChord,
  majorSeventhChord,
  minorMajorSeventhChord,
  minorSeventhChord,
  sharpFiveDominantSeventhChord,
} from "./core/chord-constructors";

import { parallelTransform, leadingToneTransform, relativeTransform, f, n, h, s, t6, northTransform, southTransform, eastTransform, westTransform } from "./transformation-groups/plr-film-transformations";

import { p12, p14, p23, p35, r12, r23, r42, r35, r53, l13, l15, l42, q43, q15, rr35, qq51, n51, p18, p19, p26, p39, p47, p64, p87, p98, r63, r76, r86, l71, l89, q62, q76, rr19, rr39, rr98, qq38, qq98 } from "./transformation-groups/plrq-extended-transformations";

import { l14, l41, lt13, n42, p32, p41, q13, q42, rt23, rt42 } from "./transformation-groups/plr-star-transformations";

import { l1d, p1M, l4m, p2m, p3d, p4M, p5d, r2M, r3m, r5d, rr5d, z5d } from "./transformation-groups/st-transformations";
import { safeMod, sortingTriadChord, chordNotesToModN } from "./core/utils";

export const CHORD_TYPES: ChordGenerators = {
  M: majorChordFromTonnetz,
  maj: majorChordFromTonnetz,
  m: minorChordFromTonnetz,
  min: minorChordFromTonnetz,
  maj7: majorSeventhChord,
  "7": dominantSeventhChord,
  m7: minorSeventhChord,
  hdim7: halfDiminishedChord,
  aug: augmentedTriadChord,
  augmented: augmentedTriadChord,
  diminished: diminishedTriadChord,
  dim7: diminishedSeventhChord,
  minMaj7: minorMajorSeventhChord,
  maj7aug5: augmentedMajorSeventhChord,
  dom7aug5: sharpFiveDominantSeventhChord,
  dom7b5: flatFiveDominantSeventhChord,
};

export const CHORD_TYPES_SEVENTHS: ChordGenerators = {
  maj7: majorSeventhChord,
  "7": dominantSeventhChord,
  m7: minorSeventhChord,
  hdim7: halfDiminishedChord,
  dim7: diminishedSeventhChord,
  minMaj7: minorMajorSeventhChord,
  maj7aug5: augmentedMajorSeventhChord,
  dom7aug5: sharpFiveDominantSeventhChord,
  dom7b5: flatFiveDominantSeventhChord,
};

export const chordFromTonnetz = (rootNote: number, chordType: string, tonnetz: TonnetzSpaces = [3, 4, 5]): TriadChord | Tetrachord => {
  return CHORD_TYPES[chordType](rootNote, tonnetz);
};

export const AVAILABLETRANSFORMATIONS: { readonly [key: string]: readonly string[] } = {
  p: ["p", "1", "2"],
  l: ["l", "3", "4", "5"],
  r: ["r", "6", "7"],
  f: ["f"],
  n: ["n", "0"],
  s: ["s"],
  h: ["h"],
  t: ["t6"],
  q: ["8", "9"],
  N: ["N"],
  S: ["S"],
  E: ["E"],
  W: ["W"],
};

export const TRANSFORMATIONS: ObjectTransformations = {
  p: parallelTransform,
  l: leadingToneTransform,
  r: relativeTransform,
  f: f,
  n: n,
  s: s,
  h: h,
  t: t6,

  "1": p32,
  "2": p41,
  "3": lt13,
  "4": l41,
  "5": rt23,
  "6": rt42,
  "7": q13,
  "8": q42,
  "9": l14,
  "0": n42,

  N: northTransform,
  S: southTransform,
  E: eastTransform,
  W: westTransform,
};

export const SEVENTHSTRANFORMATIONS: ObjectTransformationsSeventhChords = {
  p12: p12,
  p14: p14,
  p23: p23,
  p35: p35,
  r12: r12,
  r23: r23,
  r42: r42,
  r35: r35,
  r53: r53,
  l13: l13,
  l15: l15,
  l42: l42,
  q43: q43,
  q15: q15,
  rr35: rr35,
  qq51: qq51,
  n51: n51,
  p18: p18,
  p19: p19,
  p26: p26,
  p39: p39,
  p47: p47,
  p64: p64,
  p87: p87,
  p98: p98,
  r63: r63,
  r76: r76,
  r86: r86,
  l71: l71,
  l89: l89,
  q62: q62,
  q76: q76,
  rr19: rr19,
  rr39: rr39,
  rr98: rr98,
  qq38: qq38,
  qq98: qq98,
};

export const getAvailableTransform = (transformations: ObjectTransformationsSeventhChords, availableString: string): string[] => {
  return Object.keys(transformations).filter((key) => key.includes(availableString));
};

export const AVAILABLESEVENTHSTRANSFORMATIONS: { readonly [key: string]: { readonly [key: string]: readonly string[] } } = {
  "7": {
    p: ["p12", "p14", "p18", "p19"],
    l: ["l13", "l15", "l71"],
    r: ["r12", "rr19"],
    q: ["q15", "qq51"],
    n: ["n51"],
  },
  m7: {
    p: ["p12", "p23", "p26"],
    l: ["l42"],
    r: ["r12", "r23", "r42"],
    q: ["q62"],
  },
  hdim7: {
    p: ["p23", "p35", "p39"],
    l: ["l13"],
    r: ["r23", "r35", "r53", "r63", "rr35", "rr39"],
    q: ["q43", "qq38"],
  },
  maj7: {
    p: ["p14", "p47", "p64"],
    l: ["l42"],
    r: ["r42"],
    q: ["q43"],
  },
  dim7: {
    p: ["p35"],
    l: ["l15"],
    r: ["r35", "r53"],
    q: ["q15", "qq51"],
    n: ["n51"],
  },
  minMaj7: {
    p: ["p26", "p64"],
    r: ["r63", "r76", "r86"],
    q: ["q62", "q76"],
  },
  maj7aug5: {
    p: ["p47", "p87"],
    l: ["l71"],
    r: ["r76"],
    q: ["q76"],
  },
  dom7aug5: {
    p: ["p18", "p87", "p98"],
    l: ["l89"],
    r: ["r86", "rr98"],
    q: ["qq38", "qq98"],
  },
  dom7b5: {
    p: ["p19", "p39", "p98"],
    l: ["l89"],
    r: ["rr19", "rr39", "rr98"],
    q: ["qq98"],
  },
};

export const getAvailableSeventhsTransformations = (chord: Tetrachord, tonnetz: TonnetzSpaces = [3, 4, 5]): { readonly [key: string]: readonly string[] } => {
  for (const chordFunction of Object.keys(CHORD_TYPES_SEVENTHS)) {
    let chordCompare = CHORD_TYPES_SEVENTHS[chordFunction](chord[0], tonnetz);
    let arrayOfComparedValues: boolean[] = chord.map((item, index) => item === chordCompare[index]);
    const isEachElementTrue: boolean = arrayOfComparedValues.every((item) => item === true);
    if (isEachElementTrue) {
      return AVAILABLESEVENTHSTRANSFORMATIONS[chordFunction];
    }
  }
  return {};
};

export const randomSeventhTransformation = (chord: Tetrachord, tonnetz: TonnetzSpaces = [3, 4, 5]): Tetrachord => {
  for (const chordFunction of Object.keys(CHORD_TYPES_SEVENTHS)) {
    let chordCompare = CHORD_TYPES_SEVENTHS[chordFunction](chord[0], tonnetz);
    let arrayOfComparedValues: boolean[] = chord.map((item, index) => item === chordCompare[index]);
    const isEachElementTrue: boolean = arrayOfComparedValues.every((item) => item === true);
    if (isEachElementTrue) {
      const transformations = AVAILABLESEVENTHSTRANSFORMATIONS[chordFunction];
      // Pick random key
      const transformKey = Object.keys(transformations)[Math.floor(Math.random() * Object.keys(transformations).length)];
      const randomTransformation = transformations[transformKey][Math.floor(Math.random() * transformations[transformKey].length)];
      return SEVENTHSTRANFORMATIONS[randomTransformation](chord, tonnetz);
    }
  }
  return chord;
};

export const STTRANSFORMATIONS: ObjectTransformationsTriadSeventhChords = {
  p1M: p1M,
  l1d: l1d,
  p2m: p2m,
  r2M: r2M,
  p3d: p3d,
  r3m: r3m,
  p4M: p4M,
  l4m: l4m,
  p5d: p5d,
  r5d: r5d,
  rr5d: rr5d,
  z5d: z5d,
};

export const transform = (chord: TriadChord, transformation: string, tonnetz: TonnetzSpaces = [3, 4, 5]): TriadChord => {
  const transformations = transformation.split("");
  let transformedChord: TriadChord = [...chord];
  for (let i = 0; i < transformations.length; i++) {
    const validTransformation = transformations[i];
    if (validTransformation) {
      const parsedTransform = TRANSFORMATIONS[validTransformation];
      if (parsedTransform) {
        transformedChord = parsedTransform(transformedChord, tonnetz);
      }
    }
  }
  return sortingTriadChord(transformedChord, tonnetz);
};

export const seventhsTransformWithoutRegex = (chord: Tetrachord, transformation: string, tonnetz: TonnetzSpaces = [3, 4, 5]): Tetrachord => {
  const transformations = transformation.split("-");
  let transformedChord: Tetrachord = [...chord];
  for (let i = 0; i < transformations.length; i++) {
    const validTransformation = transformations[i];
    if (validTransformation) {
      transformedChord = SEVENTHSTRANFORMATIONS[validTransformation](transformedChord, tonnetz);
    }
  }
  return transformedChord;
};

const keyFunctions = Object.keys(SEVENTHSTRANFORMATIONS);
const regexUnion = keyFunctions.join("|");

export const seventhsTransform = (chord: Tetrachord, transformation: string, tonnetz: TonnetzSpaces = [3, 4, 5]): Tetrachord => {
  const regexSearch = new RegExp(regexUnion, "g");
  const transformations = transformation.match(regexSearch);

  if (transformations === null || (transformations && transformations.length < 1)) {
    return chord;
  }
  let transformedChord: Tetrachord = [...chord];
  for (let i = 0; i < transformations.length; i++) {
    const validTransformation = transformations[i];
    if (validTransformation) {
      transformedChord = SEVENTHSTRANFORMATIONS[validTransformation](transformedChord, tonnetz);
    }
  }
  return transformedChord;
};

export const explorativeTransform = (chord: number[], transformation: string, tonnetz: TonnetzSpaces = [3, 4, 5]): number[] => {
  const regxp = new RegExp("([A-Za-z])([0-9]*)", "g");
  let operations = regxp.exec(transformation);
  if (!operations || (operations && operations.length < 1)) {
    return chord;
  }
  let transformedChord: number[] = [...chordNotesToModN(chord)];
  while (operations != null) {
    if (transformedChord.length === 4) {
      const chordTransformations = getAvailableSeventhsTransformations(transformedChord as Tetrachord);
      if (chordTransformations) {
        const transformOp = chordTransformations[operations[1]];
        if (transformOp) {
          let operationIndex = 0;
          if (operations[2].length > 0) operationIndex = parseInt(operations[2]) - 1;
          operationIndex = safeMod(operationIndex, transformOp.length);
          const parsedTransform = transformOp[operationIndex];
          transformedChord = SEVENTHSTRANFORMATIONS[parsedTransform](transformedChord as Tetrachord, tonnetz);
        }
      }
    } else if (transformedChord.length === 3) {
      const transformOp = AVAILABLETRANSFORMATIONS[operations[1]];
      if (transformOp) {
        if (operations[1] === "N" || operations[1] === "S" || operations[1] === "W" || operations[1] === "E") {
          // Handle cardinal operations
          let operationIndex = operations[2].length > 0 ? parseInt(operations[2]) : 1;
          operationIndex = operationIndex <= 0 ? 1 : operationIndex;
          for (let i = 0; i < operationIndex; i++) {
            transformedChord = TRANSFORMATIONS[operations[1]](transformedChord as TriadChord, tonnetz);
          }
        } else {
          // Handle normal
          let operationIndex = operations[2].length > 0 ? parseInt(operations[2]) - 1 : 0;
          operationIndex = safeMod(operationIndex, transformOp.length);
          const parsedTransform = transformOp[operationIndex];
          transformedChord = TRANSFORMATIONS[parsedTransform](transformedChord as TriadChord, tonnetz);
        }
      }
    }
    operations = regxp.exec(transformation);
  }
  return transformedChord;
};

export const AVAILABLESTTTRANSFORMATIONS: { readonly [key: string]: { readonly [key: string]: readonly string[] } } = {
  M: {
    p: ["p1M", "p4M"],
    r: ["r2M"],
  },
  m: {
    p: ["p2m"],
    r: ["r3m"],
    l: ["l4m"],
  },
  diminished: {
    p: ["p3d", "p5d"],
    r: ["r5d", "rr5d"],
    l: ["l1d"],
    z: ["z5d"],
  },
  "7": {
    p: ["p1M"],
    l: ["l1d"],
  },
  min7: {
    p: ["p2m"],
    r: ["r2M"],
  },
  hdim7: {
    p: ["p3d"],
    r: ["r3m"],
  },
  maj7: {
    p: ["p4m"],
    l: ["l4m"],
  },
  dim7: {
    p: ["p5d"],
    r: ["r5d", "rr5d"],
    z: ["z5d"],
  },
};
