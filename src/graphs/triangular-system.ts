import { majorChordFromTonnetz, minorChordFromTonnetz } from "../core/chord-constructors";
import { chordNotesToModN } from "../core/utils";
import { TonnetzSpaces, TriadChord } from "../core/tonnetz-types";

export const surrealCardinalPoints = (
  rootNote: number,
  clockwise: number = -1,
  tonnetz: TonnetzSpaces = [3, 4, 5],
  elements: number = 4
): TriadChord[] => {
  const [a] = tonnetz;
  const cardinalArray: TriadChord[] = [];

  if (clockwise === -1) {
    for (let index = 0; index < elements * a; index += a) {
      const majorTriadsGroup = chordNotesToModN(majorChordFromTonnetz(rootNote + index, tonnetz));
      cardinalArray.push(majorTriadsGroup);
    }
  } else if (clockwise === 1) {
    for (let index = 0; index > elements * -a; index -= a) {
      const majorTriadsGroup = chordNotesToModN(majorChordFromTonnetz(rootNote + index, tonnetz));
      cardinalArray.push(majorTriadsGroup);
    }
  }
  return cardinalArray;
};

export const scienceFictionCardinalPoints = (
  rootNote: number,
  clockwise = -1,
  tonnetz: TonnetzSpaces = [3, 4, 5],
  elements: number = 4
): TriadChord[] => {
  const [a] = tonnetz;
  const cardinalArray: TriadChord[] = [];
  if (clockwise === -1) {
    for (let index = 0; index < elements * a; index += a) {
      const majorTriadsGroup = chordNotesToModN(minorChordFromTonnetz(rootNote + index, tonnetz));
      cardinalArray.push(majorTriadsGroup);
    }
  } else if (clockwise === 1) {
    for (let index = 0; index > elements * -a; index -= a) {
      const majorTriadsGroup = chordNotesToModN(minorChordFromTonnetz(rootNote + index, tonnetz));
      cardinalArray.push(majorTriadsGroup);
    }
  }
  return cardinalArray;
};

export const epicSurrealCardinalPoints = (
  rootNote: number,
  clockwise: number = -1,
  tonnetz: TonnetzSpaces = [3, 4, 5],
  elements: number = 4
): TriadChord[] => {
  const cardinalArray: TriadChord[] = [];
  const [north, west, south, east] = surrealCardinalPoints(rootNote, clockwise, tonnetz, elements);
  cardinalArray.push(north, south, west, east);
  return cardinalArray;
};

export const epicScienceFictionCardinalPoints = (
  rootNote: number,
  clockwise: number = -1,
  tonnetz: TonnetzSpaces = [3, 4, 5],
  elements: number = 4
): TriadChord[] => {
  const cardinalArray: TriadChord[] = [];
  const [north, west, south, east] = scienceFictionCardinalPoints(rootNote, clockwise, tonnetz, elements);
  cardinalArray.push(north, south, west, east);
  return cardinalArray;
};

export const magicCardinalPoints = (
  rootNote: number,
  clockwise: number = -1,
  tonnetz: TonnetzSpaces = [3, 4, 5],
  elements: number = 4
): TriadChord[] => {
  const [a] = tonnetz;
  const cardinalArray: TriadChord[] = [];
  let parity = 0;
  if (clockwise === -1) {
    for (let index = 0; index < elements * a; index += a) {
      if (parity % 2 == 0) {
        const majorTriadsGroup = chordNotesToModN(majorChordFromTonnetz(rootNote + index, tonnetz));
        cardinalArray.push(majorTriadsGroup);
      } else if (parity % 2 !== 0) {
        const minorTriadsGroup = chordNotesToModN(minorChordFromTonnetz(rootNote + index, tonnetz));
        cardinalArray.push(minorTriadsGroup);
      }
      ++parity;
    }
  } else if (clockwise === 1) {
    for (let index = 0; index > elements * -a; index -= a) {
      if (parity % 2 == 0) {
        const majorTriadsGroup = chordNotesToModN(majorChordFromTonnetz(rootNote + index, tonnetz));
        cardinalArray.push(majorTriadsGroup);
      } else if (parity % 2 !== 0) {
        const minorTriadsGroup = chordNotesToModN(minorChordFromTonnetz(rootNote + index, tonnetz));
        cardinalArray.push(minorTriadsGroup);
      }
      ++parity;
    }
  }
  return cardinalArray;
};

export const epicMixtureMinMajCardinalPoints = (
  rootNote: number,
  clockwise: number = -1,
  tonnetz: TonnetzSpaces = [3, 4, 5],
  elements: number = 4
): TriadChord[] => {
  const cardinalArray: TriadChord[] = [];
  const [northMin, , westMin] = epicScienceFictionCardinalPoints(rootNote, clockwise, tonnetz, elements);
  const [, southMaj, , eastMaj] = epicSurrealCardinalPoints(rootNote, clockwise, tonnetz, elements);
  cardinalArray.push(northMin, southMaj, westMin, eastMaj);
  return cardinalArray;
};

export const epicMixtureMajMinCardinalPoints = (
  rootNote: number,
  clockwise: number = -1,
  tonnetz: TonnetzSpaces = [3, 4, 5],
  elements: number = 4
): TriadChord[] => {
  const cardinalArray: TriadChord[] = [];
  const [northMaj, , westMaj] = epicSurrealCardinalPoints(rootNote, clockwise, tonnetz, elements);
  const [, southMin, , eastMin] = epicScienceFictionCardinalPoints(rootNote, clockwise, tonnetz, elements);
  cardinalArray.push(northMaj, southMin, westMaj, eastMin);
  return cardinalArray;
};

export const poleBonding = (lastChord: TriadChord[]): number[] => {
  const size = lastChord.length - 1;
  const newRootNote = lastChord[size][0];
  const majorOrMinor = lastChord[size][1] - newRootNote;
  return [newRootNote, majorOrMinor];
};

type diagCrossEmotion = "surreal" | "scienceFiction" | "epicSurreal" | "epicScienceFiction" | "magic" | "epicMajMin" | "epicMinMaj";
type fnsCardinalOrTriangularPoints = (rootNote: number, clockwise: number, tonnetz: TonnetzSpaces, elements: number) => TriadChord[];

type objectCardinalPoints = {
  surreal: fnsCardinalOrTriangularPoints;
  scienceFiction: fnsCardinalOrTriangularPoints;
  magic: fnsCardinalOrTriangularPoints;
  epicSurreal: fnsCardinalOrTriangularPoints;
  epicScienceFiction: fnsCardinalOrTriangularPoints;
  epicMajMin: fnsCardinalOrTriangularPoints;
  epicMinMaj: fnsCardinalOrTriangularPoints;
};

const applyCardinalFn: objectCardinalPoints = {
  surreal: surrealCardinalPoints,
  scienceFiction: scienceFictionCardinalPoints,
  magic: magicCardinalPoints,
  epicSurreal: epicSurrealCardinalPoints,
  epicScienceFiction: surrealCardinalPoints,
  epicMajMin: epicMixtureMajMinCardinalPoints,
  epicMinMaj: epicMixtureMinMajCardinalPoints,
};

export const genCardinalPoints = (
  rootNote: number,
  diagCross: diagCrossEmotion = "surreal",
  clockwise: number = -1,
  tonnetz: TonnetzSpaces = [3, 4, 5],
  elements: number = 4
): TriadChord[] => {
  return applyCardinalFn[diagCross](rootNote, clockwise, tonnetz, elements);
};

export const surrealTriangularPoints = (
  rootNote: number,
  clockwise: number = -1,
  tonnetz: TonnetzSpaces = [3, 4, 5],
  elements: number = 3
): TriadChord[] => {
  const [, b] = tonnetz;
  const triangularArray: TriadChord[] = [];
  if (clockwise === -1) {
    for (let index = 0; index < elements * b; index += b) {
      const majorTriadsGroup = chordNotesToModN(majorChordFromTonnetz(rootNote + index, tonnetz));
      triangularArray.push(majorTriadsGroup);
    }
  } else if (clockwise === 1) {
    for (let index = 0; index > elements * -b; index -= b) {
      const majorTriadsGroup = chordNotesToModN(majorChordFromTonnetz(rootNote + index, tonnetz));
      triangularArray.push(majorTriadsGroup);
    }
  }
  return triangularArray;
};

export const scienceFictionTriangularPoints = (
  rootNote: number,
  clockwise: number = -1,
  tonnetz: TonnetzSpaces = [3, 4, 5],
  elements: number = 3
): TriadChord[] => {
  const [, b] = tonnetz;
  const triangularArray: TriadChord[] = [];
  if (clockwise === -1) {
    for (let index = 0; index < elements * b; index += b) {
      const majorTriadsGroup = chordNotesToModN(minorChordFromTonnetz(rootNote + index, tonnetz));
      triangularArray.push(majorTriadsGroup);
    }
  } else if (clockwise === 1) {
    for (let index = 0; index > elements * -b; index -= b) {
      const majorTriadsGroup = chordNotesToModN(minorChordFromTonnetz(rootNote + index, tonnetz));
      triangularArray.push(majorTriadsGroup);
    }
  }
  return triangularArray;
};

export const magicTriangularPoints = (
  rootNote: number,
  clockwise: number = -1,
  tonnetz: TonnetzSpaces = [3, 4, 5],
  elements: number = 3
): TriadChord[] => {
  const [, b] = tonnetz;
  const triangularArray: TriadChord[] = [];
  let parity = 0;
  if (clockwise === -1) {
    for (let index = 0; index < elements * b; index += b) {
      if (parity % 2 == 0) {
        const majorTriadsGroup = chordNotesToModN(minorChordFromTonnetz(rootNote + index, tonnetz));
        triangularArray.push(majorTriadsGroup);
      } else if (parity % 2 !== 0) {
        const minorTriadsGroup = chordNotesToModN(majorChordFromTonnetz(rootNote + index, tonnetz));
        triangularArray.push(minorTriadsGroup);
      }
      ++parity;
    }
  } else if (clockwise === 1) {
    for (let index = 0; index > elements * -b; index -= b) {
      if (parity % 2 == 0) {
        const majorTriadsGroup = chordNotesToModN(minorChordFromTonnetz(rootNote + index, tonnetz));
        triangularArray.push(majorTriadsGroup);
      } else if (parity % 2 !== 0) {
        const minorTriadsGroup = chordNotesToModN(majorChordFromTonnetz(rootNote + index, tonnetz));
        triangularArray.push(minorTriadsGroup);
      }
      ++parity;
    }
  }
  return triangularArray;
};

type objectTriangularPoints = Pick<objectCardinalPoints, "surreal" | "scienceFiction" | "magic">;
type diagEmotion = "surreal" | "scienceFiction" | "magic";
const applyTriangularFn: objectTriangularPoints = {
  surreal: surrealTriangularPoints,
  scienceFiction: scienceFictionTriangularPoints,
  magic: magicTriangularPoints,
};

export const genTriangularPoints = (
  rootNote: number,
  diag: diagEmotion = "surreal",
  clockwise: number = -1,
  tonnetz: TonnetzSpaces = [3, 4, 5],
  elements: number = 3
): TriadChord[] => {
  return applyTriangularFn[diag](rootNote, clockwise, tonnetz, elements);
};

export const cardinalSFTriangularSurrealGraph = (
  rootNote: number,
  clockwise: number = -1,
  tonnetz: TonnetzSpaces = [3, 4, 5],
  elements: number = 4,
  reps: number = 7
): TriadChord[] => {
  const [a, b] = tonnetz;
  const graphArray: TriadChord[][] = [];

  const minorTriadsGroup = scienceFictionCardinalPoints(rootNote, clockwise, tonnetz, elements);
  graphArray.push(minorTriadsGroup);
  for (let index = 0; index < reps; ++index) {
    if (index % 2 === 0) {
      if (clockwise === -1) rootNote -= a;
      else if (clockwise === 1) rootNote += a;
      const majorTriadsGroup = surrealTriangularPoints(rootNote, clockwise, tonnetz, elements - 1);
      graphArray.push(majorTriadsGroup);
    } else {
      if (clockwise === -1) rootNote -= b;
      else if (clockwise === 1) rootNote += b;
      const minorTriadsGroup = scienceFictionCardinalPoints(rootNote, clockwise, tonnetz, elements);
      graphArray.push(minorTriadsGroup);
    }
  }
  return graphArray.flat();
};

export const cardinalSurrealTriangularSFGraph = (
  rootNote: number,
  clockwise: number = -1,
  tonnetz: TonnetzSpaces = [3, 4, 5],
  elements: number = 4,
  reps: number = 7
): TriadChord[] => {
  const [a, b] = tonnetz;
  const graphArray: TriadChord[][] = [];

  const minorTriadsGroup = surrealCardinalPoints(rootNote, clockwise, tonnetz, elements);
  graphArray.push(minorTriadsGroup);
  for (let index = 0; index < reps; ++index) {
    if (index % 2 === 0) {
      if (clockwise === -1) rootNote -= a;
      else if (clockwise === 1) rootNote += a;
      const majorTriadsGroup = scienceFictionTriangularPoints(rootNote, clockwise, tonnetz, elements - 1);
      graphArray.push(majorTriadsGroup);
    } else {
      if (clockwise === -1) rootNote -= b;
      else if (clockwise === 1) rootNote += b;
      const minorTriadsGroup = surrealCardinalPoints(rootNote, clockwise, tonnetz, elements);
      graphArray.push(minorTriadsGroup);
    }
  }
  return graphArray.flat();
};

export const cardinalEpicSFTriangularSurrealGraph = (
  rootNote: number,
  clockwise: number = -1,
  tonnetz: TonnetzSpaces = [3, 4, 5],
  elements: number = 4,
  reps: number = 7
): TriadChord[] => {
  const [a, b] = tonnetz;
  const graphArray: TriadChord[][] = [];

  const minorTriadsGroup = epicScienceFictionCardinalPoints(rootNote, clockwise, tonnetz, elements);
  graphArray.push(minorTriadsGroup);
  for (let index = 0; index < reps; ++index) {
    if (index % 2 === 0) {
      if (clockwise === -1) rootNote -= a;
      else if (clockwise === 1) rootNote += a;
      const majorTriadsGroup = surrealTriangularPoints(rootNote, clockwise, tonnetz, elements - 1);
      graphArray.push(majorTriadsGroup);
    } else {
      if (clockwise === -1) rootNote -= b;
      else if (clockwise === 1) rootNote += b;
      const minorTriadsGroup = epicScienceFictionCardinalPoints(rootNote, clockwise, tonnetz, elements);
      graphArray.push(minorTriadsGroup);
    }
  }
  return graphArray.flat();
};

export const cardinalEpicSurrealTriangularSFGraph = (
  rootNote: number,
  clockwise: number = -1,
  tonnetz: TonnetzSpaces = [3, 4, 5],
  elements: number = 4,
  reps: number = 7
): TriadChord[] => {
  const [a, b] = tonnetz;
  const graphArray: TriadChord[][] = [];

  const minorTriadsGroup = epicSurrealCardinalPoints(rootNote, clockwise, tonnetz, elements);
  graphArray.push(minorTriadsGroup);
  for (let index = 0; index < reps; ++index) {
    if (index % 2 === 0) {
      if (clockwise === -1) rootNote -= a;
      else if (clockwise === 1) rootNote += a;
      const majorTriadsGroup = scienceFictionTriangularPoints(rootNote, clockwise, tonnetz, elements - 1);
      graphArray.push(majorTriadsGroup);
    } else {
      if (clockwise === -1) rootNote -= b;
      else if (clockwise === 1) rootNote += b;
      const minorTriadsGroup = epicSurrealCardinalPoints(rootNote, clockwise, tonnetz, elements);
      graphArray.push(minorTriadsGroup);
    }
  }
  return graphArray.flat();
};

export const epicMajMinCardinalTriangularGraph = (
  rootNote: number,
  clockwise: number = -1,
  tonnetz: TonnetzSpaces = [3, 4, 5],
  elements: number = 4,
  reps: number = 7
): TriadChord[] => {
  const [a, b] = tonnetz;
  const graphArray: TriadChord[][] = [];

  const minorTriadsGroup = epicMixtureMajMinCardinalPoints(rootNote, clockwise, tonnetz, elements);
  graphArray.push(minorTriadsGroup);
  let acc = 0;
  for (let index = 0; index < reps; ++index) {
    if (index % 2 === 0) {
      if (clockwise === -1) rootNote -= a;
      else if (clockwise === 1) rootNote += a;

      if (acc % 2 === 0) {
        const majorTriadsGroup = surrealTriangularPoints(rootNote, clockwise, tonnetz, elements - 1);
        graphArray.push(majorTriadsGroup);
      } else if (acc % 2 === 1) {
        const minorTriadsGroup = scienceFictionTriangularPoints(rootNote, clockwise, tonnetz, elements - 1);
        graphArray.push(minorTriadsGroup);
      }
    } else if (index % 2 === 1) {
      if (clockwise === -1) rootNote -= b;
      else if (clockwise === 1) rootNote += b;

      if (acc % 2 === 0) {
        const minorTriadsGroup = epicMixtureMinMajCardinalPoints(rootNote, clockwise, tonnetz, elements);
        graphArray.push(minorTriadsGroup);
      } else if (acc % 2 === 1) {
        const majorTriadsGroup = epicMixtureMajMinCardinalPoints(rootNote, clockwise, tonnetz, elements);
        graphArray.push(majorTriadsGroup);
      }
    }
    acc += index;
  }
  return graphArray.flat();
};

export const epicMinMajCardinalTriangularGraph = (
  rootNote: number,
  clockwise: number = -1,
  tonnetz: TonnetzSpaces = [3, 4, 5],
  elements: number = 4,
  reps: number = 7
): TriadChord[] => {
  const [a, b] = tonnetz;
  const graphArray: TriadChord[][] = [];

  const minorTriadsGroup = epicMixtureMinMajCardinalPoints(rootNote, clockwise, tonnetz, elements);
  graphArray.push(minorTriadsGroup);
  let acc = 0;
  for (let index = 0; index < reps; ++index) {
    if (index % 2 === 0) {
      if (clockwise === -1) rootNote -= a;
      else if (clockwise === 1) rootNote += a;

      if (acc % 2 === 0) {
        const minorTriadsGroup = scienceFictionTriangularPoints(rootNote, clockwise, tonnetz, elements - 1);
        graphArray.push(minorTriadsGroup);
      } else if (acc % 2 === 1) {
        const majorTriadsGroup = surrealTriangularPoints(rootNote, clockwise, tonnetz, elements - 1);
        graphArray.push(majorTriadsGroup);
      }
    } else if (index % 2 === 1) {
      if (clockwise === -1) rootNote -= b;
      else if (clockwise === 1) rootNote += b;

      if (acc % 2 === 0) {
        const majorTriadsGroup = epicMixtureMajMinCardinalPoints(rootNote, clockwise, tonnetz, elements);
        graphArray.push(majorTriadsGroup);
      } else if (acc % 2 === 1) {
        const minorTriadsGroup = epicMixtureMinMajCardinalPoints(rootNote, clockwise, tonnetz, elements);
        graphArray.push(minorTriadsGroup);
      }
    }
    acc += index;
  }
  return graphArray.flat();
};

type diagCrossGraphs = "Mm" | "mM" | "epicSFSurreal" | "epicSurrealSF" | "epicMixMajMin" | "epicMixMinMaj";
type graphFns = (rootNote: number, clockwise: number, tonnetz: TonnetzSpaces, elements: number, reps: number) => TriadChord[];
type cardTriaGraphsTypes = {
  Mm: graphFns;
  mM: graphFns;
  epicSFSurreal: graphFns;
  epicSurrealSF: graphFns;
  epicMixMajMin: graphFns;
  epicMixMinMaj: graphFns;
};

const cardinalTriangularGraphs: cardTriaGraphsTypes = {
  Mm: cardinalSurrealTriangularSFGraph,
  mM: cardinalSFTriangularSurrealGraph,
  epicSFSurreal: cardinalEpicSFTriangularSurrealGraph,
  epicSurrealSF: cardinalEpicSurrealTriangularSFGraph,
  epicMixMajMin: epicMajMinCardinalTriangularGraph,
  epicMixMinMaj: epicMinMajCardinalTriangularGraph,
};

export const genCardinalTriangularGraph = (
  rootNote: number,
  diagCross: diagCrossGraphs = "Mm",
  clockwise: number = -1,
  tonnetz: TonnetzSpaces = [3, 4, 5],
  elements: number = 4,
  reps: number = 7
): TriadChord[] => {
  return cardinalTriangularGraphs[diagCross](rootNote, clockwise, tonnetz, elements, reps);
};
