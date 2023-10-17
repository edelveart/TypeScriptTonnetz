export type TonnetzSpaceConnected = [3, 4, 5] | [1, 1, 10] | [1, 2, 9] | [1, 4, 7] | [1, 5, 6] | [2, 3, 7] | [2, 5, 5]
export type TonnetzSpaceNonConnected = [2, 4, 6] | [2, 2, 8] | [3, 3, 6] | [4, 4, 4]

export type TonnetzSpaces = TonnetzSpaceConnected | TonnetzSpaceNonConnected

export type TriadChord = [number, number, number]
export type TransformationFunctions = (triad: TriadChord, tonnetz: TonnetzSpaces) => number[];

export type ObjectTransformations = {
    [key: string]: TransformationFunctions
}

export const majorChordFromTonnetz = (rootNote: number, tonnetz: TonnetzSpaces): TriadChord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;

    const firstNote = ((rootNote % modulo) + modulo) % modulo;
    const secondNote = ((rootNote + b % modulo) + modulo) % modulo;
    const thirdNote = ((rootNote + (a + b) % modulo) + modulo) % modulo;

    const majorTriad: TriadChord = [firstNote, secondNote, thirdNote];
    return majorTriad;
}

export const minorChordFromTonnetz = (rootNote: number, tonnetz: TonnetzSpaces): TriadChord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;

    const firstNote = ((rootNote % modulo) + modulo) % modulo;
    const secondNote = ((rootNote + a % modulo) + modulo) % modulo;
    const thirdNote = ((rootNote + (a + b) % modulo) + modulo) % modulo;

    const minorTriad: TriadChord = [firstNote, secondNote, thirdNote];
    return minorTriad;
}

export const chordNotesToModN = (chord: number[], modulo: number = 12): number[] => {
    const notesModN: number[] = [];
    for (let i = 0; i < chord.length; i++) {
        const noteComponents = ((chord[i] % modulo) + modulo) % modulo;
        notesModN.push(noteComponents);
    }
    return notesModN;
}

export const parallelTransform = (chordFromTonnetz: TriadChord, tonnetz: TonnetzSpaces): number[] => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const p: number = (a - b);

    const transformedChord: TriadChord = [...chordFromTonnetz];
    if (transformedChord[1] !== (transformedChord[0] + b)) {
        transformedChord[1] -= p;
    } else {
        transformedChord[1] += p;
    }
    const finalTriad = chordNotesToModN(transformedChord, modulo);
    return finalTriad;
}

export const leadingToneTransform = (chordFromTonnetz: TriadChord, tonnetz: TonnetzSpaces): number[] => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const l: number = (b - c);

    const transformedChord: TriadChord = [...chordFromTonnetz];
    if (transformedChord[1] !== (transformedChord[0] + b)) {
        transformedChord[2] -= l;
    } else {
        transformedChord[0] += l;
    }
    const finalTriad = chordNotesToModN(transformedChord, modulo);
    return finalTriad;
}

export const relativeTransform: TransformationFunctions = (chordFromTonnetz, tonnetz) => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const r: number = (a - c)

    const transformedChord: TriadChord = [...chordFromTonnetz]
    if (transformedChord[1] !== (transformedChord[0] + b)) {
        transformedChord[0] += r;
    } else {
        transformedChord[2] -= r;
    }
    const finalTriad = chordNotesToModN(transformedChord, modulo);
    return finalTriad;
}

export const TRANSFORMATIONS: ObjectTransformations = {
    "p": parallelTransform,
    "l": leadingToneTransform,
    "r": relativeTransform,
};

const traditionalTonnetz: TonnetzSpaces = [3, 4, 5];
const majorTriad: TriadChord = [2, 6, 9];
const tChord = TRANSFORMATIONS["p"](majorTriad, traditionalTonnetz);
console.log(tChord); ///  259

