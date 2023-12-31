export type TonnetzSpaceConnected = [3, 4, 5] | [1, 1, 10] | [1, 2, 9] | [1, 3, 8] | [1, 4, 7] | [1, 5, 6] | [2, 3, 7] | [2, 5, 5]
export type TonnetzSpaceNonConnected = [2, 4, 6] | [2, 2, 8] | [3, 3, 6] | [4, 4, 4]

export type TonnetzSpaces = TonnetzSpaceConnected | TonnetzSpaceNonConnected

export type TriadChord = [number, number, number]
export type Tetrachord = [number, number, number, number]

export type TransformationFunctions = (triad: TriadChord, tonnetz: TonnetzSpaces) => TriadChord;

export type ObjectTransformations = {
    [key: string]: TransformationFunctions
}

export type TransformationFunctionsSeventhChords = (tetrachord: Tetrachord, tonnetz: TonnetzSpaces) => Tetrachord;

export type ObjectTransformationsSeventhChords = {
    [key: string]: TransformationFunctionsSeventhChords
}

export type TransformationTriadSeventhChords = (chord: TriadChord | Tetrachord, tonnetz: TonnetzSpaces) => TriadChord | Tetrachord;

export type ObjectTransformationsTriadSeventhChords = {
    [key: string]: TransformationTriadSeventhChords
}

export type ChordGenerationFunctions = (rootNote: number, tonnetz: TonnetzSpaces) => TriadChord | Tetrachord;

export type ChordGenerators = {
    [key: string]: ChordGenerationFunctions
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

export const augmentedTriadChord = (rootNote: number, tonnetz: TonnetzSpaces): TriadChord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;

    const firstNote = ((rootNote % modulo) + modulo) % modulo;
    const secondNote = ((rootNote + b % modulo) + modulo) % modulo;
    const thirdNote = ((rootNote + (2 * b) % modulo) + modulo) % modulo;

    const augmentedTriad: TriadChord = [firstNote, secondNote, thirdNote];
    return augmentedTriad;
}

export const diminishedTriadChord = (rootNote: number, tonnetz: TonnetzSpaces): TriadChord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;

    const firstNote = ((rootNote % modulo) + modulo) % modulo;
    const secondNote = ((rootNote + a % modulo) + modulo) % modulo;
    const thirdNote = ((rootNote + (2 * a) % modulo) + modulo) % modulo;

    const diminishedTriadChord: TriadChord = [firstNote, secondNote, thirdNote];
    return diminishedTriadChord;
}

export const dominantSeventhChord = (rootNote: number, tonnetz: TonnetzSpaces): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;

    const firstNote = ((rootNote % modulo) + modulo) % modulo;
    const secondNote = ((rootNote + b % modulo) + modulo) % modulo;
    const thirdNote = ((rootNote + (a + b) % modulo) + modulo) % modulo;
    const fourthNote = ((rootNote + (2 * a + b) % modulo) + modulo) % modulo;

    const dominant7: Tetrachord = [firstNote, secondNote, thirdNote, fourthNote];
    return dominant7;
}

export const majorSeventhChord = (rootNote: number, tonnetz: TonnetzSpaces): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;

    const firstNote = ((rootNote % modulo) + modulo) % modulo;
    const secondNote = ((rootNote + b % modulo) + modulo) % modulo;
    const thirdNote = ((rootNote + (a + b) % modulo) + modulo) % modulo;
    const fourthNote = ((rootNote + (2 * b + a) % modulo) + modulo) % modulo;

    const maj7: Tetrachord = [firstNote, secondNote, thirdNote, fourthNote];
    return maj7;
}

export const minorSeventhChord = (rootNote: number, tonnetz: TonnetzSpaces): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;

    const firstNote = ((rootNote % modulo) + modulo) % modulo;
    const secondNote = ((rootNote + a % modulo) + modulo) % modulo;
    const thirdNote = ((rootNote + (a + b) % modulo) + modulo) % modulo;
    const fourthNote = ((rootNote + (2 * a + b) % modulo) + modulo) % modulo;

    const min7: Tetrachord = [firstNote, secondNote, thirdNote, fourthNote];
    return min7;
}

export const halfDiminishedChord = (rootNote: number, tonnetz: TonnetzSpaces): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;

    const firstNote = ((rootNote % modulo) + modulo) % modulo;
    const secondNote = (rootNote + (a % modulo) + modulo) % modulo;
    const thirdNote = ((rootNote + (a + b - (b - a)) % modulo) + modulo) % modulo;
    const fourthNote = ((rootNote + (2 * a + b) % modulo) + modulo) % modulo;

    const halfdim7: Tetrachord = [firstNote, secondNote, thirdNote, fourthNote];
    return halfdim7;
}

export const diminishedSeventhChord = (rootNote: number, tonnetz: TonnetzSpaces): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;

    const firstNote = ((rootNote % modulo) + modulo) % modulo;
    const secondNote = ((rootNote + a % modulo) + modulo) % modulo;
    const thirdNote = ((rootNote + (2 * a) % modulo) + modulo) % modulo;
    const fourthNote = ((rootNote + (3 * a) % modulo) + modulo) % modulo;

    const dim7: Tetrachord = [firstNote, secondNote, thirdNote, fourthNote];
    return dim7;
}

export const minorMajorSeventhChord = (rootNote: number, tonnetz: TonnetzSpaces): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;

    const firstNote = ((rootNote % modulo) + modulo) % modulo;
    const secondNote = ((rootNote + a % modulo) + modulo) % modulo;
    const thirdNote = ((rootNote + (a + b) % modulo) + modulo) % modulo;
    const fourthNote = ((rootNote + (2 * b + a) % modulo) + modulo) % modulo;

    const minMaj7: Tetrachord = [firstNote, secondNote, thirdNote, fourthNote];
    return minMaj7;
}

export const augmentedMajorSeventhChord = (rootNote: number, tonnetz: TonnetzSpaces): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;

    const firstNote = ((rootNote % modulo) + modulo) % modulo;
    const secondNote = ((rootNote + b % modulo) + modulo) % modulo;
    const thirdNote = ((rootNote + (2 * b) % modulo) + modulo) % modulo;
    const fourthNote = ((rootNote + (2 * b + a) % modulo) + modulo) % modulo;

    const maj7aug5: Tetrachord = [firstNote, secondNote, thirdNote, fourthNote];
    return maj7aug5;
}

export const sharpFiveDominantSeventhChord = (rootNote: number, tonnetz: TonnetzSpaces): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;

    const firstNote = ((rootNote % modulo) + modulo) % modulo;
    const secondNote = ((rootNote + b % modulo) + modulo) % modulo;
    const thirdNote = ((rootNote + (2 * b) % modulo) + modulo) % modulo;
    const fourthNote = ((rootNote + (2 * a + b) % modulo) + modulo) % modulo;

    const dom7aug5: Tetrachord = [firstNote, secondNote, thirdNote, fourthNote];
    return dom7aug5;
}

export const flatFiveDominantSeventhChord = (rootNote: number, tonnetz: TonnetzSpaces): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;

    const firstNote = ((rootNote % modulo) + modulo) % modulo;
    const secondNote = ((rootNote + b % modulo) + modulo) % modulo;
    const thirdNote = ((rootNote + (2 * a) % modulo) + modulo) % modulo;
    const fourthNote = ((rootNote + (2 * a + b) % modulo) + modulo) % modulo;

    const Dom7b5: Tetrachord = [firstNote, secondNote, thirdNote, fourthNote];
    return Dom7b5;
}

export const chordNotesToModN = <T extends number[]> (chord: T, modulo: number = 12): T => {
    const notesModN: number[] = [];
    for (let i = 0; i < chord.length; i++) {
        const noteComponents = ((chord[i] % modulo) + modulo) % modulo;
        notesModN.push(noteComponents);
    }
    return notesModN as T;
}

export const sortingTriadChord = (disorderedTriad: TriadChord, tonnetz: TonnetzSpaces): TriadChord => {
    const [, , c] = tonnetz;
    disorderedTriad.sort((x, y) => x - y);
    const temp: TriadChord = [...disorderedTriad];

    if (Math.abs(disorderedTriad[1] - disorderedTriad[0]) === (c)) {
        disorderedTriad[0] = temp[1];
        disorderedTriad[1] = temp[2];
        disorderedTriad[2] = temp[0];
    }
    if (Math.abs(disorderedTriad[2] - disorderedTriad[1]) === (c)) {
        disorderedTriad[0] = temp[2];
        disorderedTriad[1] = temp[0];
        disorderedTriad[2] = temp[1];
    }
    return disorderedTriad;
}

export const firstChordComparison = (reduceModN: TriadChord | Tetrachord, compareOne: TriadChord | Tetrachord): boolean => {
    if (reduceModN.length !== compareOne.length) {
        return false;
    }
    const firstChordCompare = reduceModN.map((item, index) => item === compareOne[index]);
    const equalFirstChord: boolean = firstChordCompare.every(item => item === true);
    return equalFirstChord;
}

export const secondChordComparison = (reduceModN: TriadChord | Tetrachord, compareTwo: TriadChord | Tetrachord): boolean => {
    if (reduceModN.length !== compareTwo.length) {
        return false;
    }
    const secondChordCompare = reduceModN.map((item, index) => item === compareTwo[index]);
    const equalSecondChord: boolean = secondChordCompare.every(item => item === true);
    return equalSecondChord;
}

export const parallelTransform: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const p: number = (a + b + c);

    const reduceModN = chordNotesToModN(chordFromTonnetz);
    let rootPositionTriad: TriadChord = sortingTriadChord(reduceModN, tonnetz);

    const equalToChordOne = firstChordComparison(rootPositionTriad, majorChordFromTonnetz(rootPositionTriad[0], tonnetz))
    const equalToChordTwo = secondChordComparison(rootPositionTriad, minorChordFromTonnetz(rootPositionTriad[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return rootPositionTriad;

    if (equalToChordOne) {
        rootPositionTriad = minorChordFromTonnetz(rootPositionTriad[0], tonnetz)
    } else if (equalToChordTwo) {
        rootPositionTriad = majorChordFromTonnetz(rootPositionTriad[0], tonnetz)
    }
    const targetTriadChord = chordNotesToModN(rootPositionTriad, modulo);
    return targetTriadChord;
}

export const leadingToneTransform: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const l: number = b;

    const reduceModN = chordNotesToModN(chordFromTonnetz);
    let rootPositionTriad: TriadChord = sortingTriadChord(reduceModN, tonnetz);

    const equalToChordOne = firstChordComparison(rootPositionTriad, majorChordFromTonnetz(rootPositionTriad[0], tonnetz))
    const equalToChordTwo = secondChordComparison(rootPositionTriad, minorChordFromTonnetz(rootPositionTriad[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return rootPositionTriad;

    if (equalToChordOne) {
        rootPositionTriad = minorChordFromTonnetz(rootPositionTriad[0] + l, tonnetz)
    } else if (equalToChordTwo) {
        rootPositionTriad = majorChordFromTonnetz(rootPositionTriad[0] - l, tonnetz)
    }
    const targetTriadChord = chordNotesToModN(rootPositionTriad, modulo);
    return targetTriadChord;
}

export const relativeTransform: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const r: number = a

    const reduceModN = chordNotesToModN(chordFromTonnetz);
    let rootPositionTriad: TriadChord = sortingTriadChord(reduceModN, tonnetz);

    const equalToChordOne = firstChordComparison(rootPositionTriad, majorChordFromTonnetz(rootPositionTriad[0], tonnetz))
    const equalToChordTwo = secondChordComparison(rootPositionTriad, minorChordFromTonnetz(rootPositionTriad[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return rootPositionTriad;

    if (equalToChordOne) {
        rootPositionTriad = minorChordFromTonnetz(rootPositionTriad[0] - r, tonnetz)
    } else if (equalToChordTwo) {
        rootPositionTriad = majorChordFromTonnetz(rootPositionTriad[0] + r, tonnetz)
    }
    const targetTriadChord = chordNotesToModN(rootPositionTriad, modulo);
    return targetTriadChord;
}

export const f: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const f: number = (a + b)

    const reduceModN = chordNotesToModN(chordFromTonnetz);
    let rootPositionTriad: TriadChord = sortingTriadChord(reduceModN, tonnetz);

    const equalToChordOne = firstChordComparison(rootPositionTriad, majorChordFromTonnetz(rootPositionTriad[0], tonnetz))
    const equalToChordTwo = secondChordComparison(rootPositionTriad, minorChordFromTonnetz(rootPositionTriad[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return rootPositionTriad;

    if (equalToChordOne) {
        rootPositionTriad = minorChordFromTonnetz(rootPositionTriad[0] + f, tonnetz)
    } else if (equalToChordTwo) {
        rootPositionTriad = majorChordFromTonnetz(rootPositionTriad[0] - f, tonnetz)
    }
    const targetTriadChord = chordNotesToModN(rootPositionTriad, modulo);
    return targetTriadChord;
}

export const n: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const n: number = c;

    const reduceModN = chordNotesToModN(chordFromTonnetz);
    let rootPositionTriad: TriadChord = sortingTriadChord(reduceModN, tonnetz);

    const equalToChordOne = firstChordComparison(rootPositionTriad, majorChordFromTonnetz(rootPositionTriad[0], tonnetz))
    const equalToChordTwo = secondChordComparison(rootPositionTriad, minorChordFromTonnetz(rootPositionTriad[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return rootPositionTriad;

    if (equalToChordOne) {
        rootPositionTriad = minorChordFromTonnetz(rootPositionTriad[0] + n, tonnetz)
    } else if (equalToChordTwo) {
        rootPositionTriad = majorChordFromTonnetz(rootPositionTriad[0] - n, tonnetz)
    }
    const targetTriadChord = chordNotesToModN(rootPositionTriad, modulo);
    return targetTriadChord;
}

export const s: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const s: number = (b - a);

    const reduceModN = chordNotesToModN(chordFromTonnetz);
    let rootPositionTriad: TriadChord = sortingTriadChord(reduceModN, tonnetz);

    const equalToChordOne = firstChordComparison(rootPositionTriad, majorChordFromTonnetz(rootPositionTriad[0], tonnetz))
    const equalToChordTwo = secondChordComparison(rootPositionTriad, minorChordFromTonnetz(rootPositionTriad[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return rootPositionTriad;

    if (equalToChordOne) {
        rootPositionTriad = minorChordFromTonnetz(rootPositionTriad[0] + s, tonnetz)
    } else if (equalToChordTwo) {
        rootPositionTriad = majorChordFromTonnetz(rootPositionTriad[0] - s, tonnetz)
    }
    const targetTriadChord = chordNotesToModN(rootPositionTriad, modulo);
    return targetTriadChord;
}

export const h: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const h: number = (2 * b);

    const reduceModN = chordNotesToModN(chordFromTonnetz);
    let rootPositionTriad: TriadChord = sortingTriadChord(reduceModN, tonnetz);

    const equalToChordOne = firstChordComparison(rootPositionTriad, majorChordFromTonnetz(rootPositionTriad[0], tonnetz))
    const equalToChordTwo = secondChordComparison(rootPositionTriad, minorChordFromTonnetz(rootPositionTriad[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return rootPositionTriad;

    if (equalToChordOne) {
        rootPositionTriad = minorChordFromTonnetz(rootPositionTriad[0] + h, tonnetz)
    } else if (equalToChordTwo) {
        rootPositionTriad = majorChordFromTonnetz(rootPositionTriad[0] - h, tonnetz)
    }
    const targetTriadChord = chordNotesToModN(rootPositionTriad, modulo);
    return targetTriadChord;
}

export const t: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const t: number = (2 * a);
    const reduceModN = chordNotesToModN(chordFromTonnetz);
    let rootPositionTriad: TriadChord = sortingTriadChord(reduceModN, tonnetz);

    const equalToChordOne = firstChordComparison(rootPositionTriad, majorChordFromTonnetz(rootPositionTriad[0], tonnetz))
    const equalToChordTwo = secondChordComparison(rootPositionTriad, minorChordFromTonnetz(rootPositionTriad[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return rootPositionTriad;

    if (equalToChordOne) {
        rootPositionTriad = majorChordFromTonnetz(rootPositionTriad[0] + t, tonnetz)
    } else if (equalToChordTwo) {
        rootPositionTriad = minorChordFromTonnetz(rootPositionTriad[0] - t, tonnetz)
    }
    const targetTriadChord = chordNotesToModN(rootPositionTriad, modulo);
    return targetTriadChord;
}

export const northTransform: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;

    const reduceModN = chordNotesToModN(chordFromTonnetz);
    let rootPositionTriad: TriadChord = sortingTriadChord(reduceModN, tonnetz);

    const equalToChordOne = firstChordComparison(rootPositionTriad, majorChordFromTonnetz(rootPositionTriad[0], tonnetz))
    const equalToChordTwo = secondChordComparison(rootPositionTriad, minorChordFromTonnetz(rootPositionTriad[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return rootPositionTriad;

    if (equalToChordOne) {
        rootPositionTriad = minorChordFromTonnetz(rootPositionTriad[0] + b, tonnetz)
    } else if (equalToChordTwo) {
        rootPositionTriad = majorChordFromTonnetz(rootPositionTriad[0] + a, tonnetz)
    }
    const targetTriadChord = chordNotesToModN(rootPositionTriad, modulo);
    return targetTriadChord;
}

export const southTransform: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;

    const reduceModN = chordNotesToModN(chordFromTonnetz);
    let rootPositionTriad: TriadChord = sortingTriadChord(reduceModN, tonnetz);

    const equalToChordOne = firstChordComparison(rootPositionTriad, majorChordFromTonnetz(rootPositionTriad[0], tonnetz))
    const equalToChordTwo = secondChordComparison(rootPositionTriad, minorChordFromTonnetz(rootPositionTriad[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return rootPositionTriad;

    if (equalToChordOne) {
        rootPositionTriad = minorChordFromTonnetz(rootPositionTriad[0]  - a , tonnetz)
    } else if (equalToChordTwo) {
        rootPositionTriad = majorChordFromTonnetz(rootPositionTriad[0] - b, tonnetz)
    }
    const targetTriadChord = chordNotesToModN(rootPositionTriad, modulo);
    return targetTriadChord;
}

export const eastTransform: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;

    const reduceModN = chordNotesToModN(chordFromTonnetz);
    let rootPositionTriad: TriadChord = sortingTriadChord(reduceModN, tonnetz);

    const equalToChordOne = firstChordComparison(rootPositionTriad, majorChordFromTonnetz(rootPositionTriad[0], tonnetz))
    const equalToChordTwo = secondChordComparison(rootPositionTriad, minorChordFromTonnetz(rootPositionTriad[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return rootPositionTriad;

    if (equalToChordOne) {
        rootPositionTriad = minorChordFromTonnetz(rootPositionTriad[0]  + (b - a), tonnetz)
    } else if (equalToChordTwo) {
        rootPositionTriad = majorChordFromTonnetz(rootPositionTriad[0], tonnetz)
    }
    const targetTriadChord = chordNotesToModN(rootPositionTriad, modulo);
    return targetTriadChord;
}

export const westTransform: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;

    const reduceModN = chordNotesToModN(chordFromTonnetz);
    let rootPositionTriad: TriadChord = sortingTriadChord(reduceModN, tonnetz);

    const equalToChordOne = firstChordComparison(rootPositionTriad, majorChordFromTonnetz(rootPositionTriad[0], tonnetz))
    const equalToChordTwo = secondChordComparison(rootPositionTriad, minorChordFromTonnetz(rootPositionTriad[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return rootPositionTriad;

    if (equalToChordOne) {
        rootPositionTriad = minorChordFromTonnetz(rootPositionTriad[0], tonnetz)
    } else if (equalToChordTwo) {
        rootPositionTriad = majorChordFromTonnetz(rootPositionTriad[0] - (b - a), tonnetz)
    }
    const targetTriadChord = chordNotesToModN(rootPositionTriad, modulo);
    return targetTriadChord;
}

export const p12: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const p: number = (a - b);

    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, dominantSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, minorSeventhChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    const transformedChord: Tetrachord = [...reduceModN];
    if (transformedChord[1] % modulo !== (transformedChord[0] + b) % modulo) {
        transformedChord[1] -= p;
    } else {
        transformedChord[1] += p;
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const p14: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const p: number = (a - b);

    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, dominantSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, majorSeventhChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    const transformedChord: Tetrachord = [...reduceModN];
    if (transformedChord[3] % modulo !== (transformedChord[0] + (2 * b + a)) % modulo) {
        transformedChord[3] -= p;
    } else {
        transformedChord[3] += p;
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const p23: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const p: number = (a - b);

    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, minorSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, halfDiminishedChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    const transformedChord: Tetrachord = [...reduceModN];
    if (transformedChord[2] % modulo !== (transformedChord[0] + (a + b)) % modulo) {
        transformedChord[2] -= p;
    } else {
        transformedChord[2] += p;
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const p35: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const p: number = (a - b);

    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, halfDiminishedChord(reduceModN[0], tonnetz));
    const equalToChordTwo = secondChordComparison(reduceModN, diminishedSeventhChord(reduceModN[0], tonnetz));

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    const transformedChord: Tetrachord = [...reduceModN];
    if (transformedChord[3] % modulo !== (transformedChord[0] + (2 * a + b)) % modulo) {
        transformedChord[3] -= p;
    } else {
        transformedChord[3] += p;
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const r12: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, dominantSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, minorSeventhChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = minorSeventhChord(transformedChord[0] - a, tonnetz)
    } else {
        transformedChord = dominantSeventhChord(transformedChord[0] + a, tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const r23: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, minorSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, halfDiminishedChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = halfDiminishedChord(transformedChord[0] - a, tonnetz)
    } else {
        transformedChord = minorSeventhChord(transformedChord[0] + a, tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const r42: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, majorSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, minorSeventhChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = minorSeventhChord(transformedChord[0] - a, tonnetz)
    } else {
        transformedChord = majorSeventhChord(transformedChord[0] + a, tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const r35: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, halfDiminishedChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, diminishedSeventhChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = diminishedSeventhChord(transformedChord[0] - a, tonnetz)
    } else {
        transformedChord = halfDiminishedChord(transformedChord[0] + a, tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const r53: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, diminishedSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, halfDiminishedChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = halfDiminishedChord(transformedChord[0] - a, tonnetz)
    } else {
        transformedChord = diminishedSeventhChord(transformedChord[0] + a, tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const l13: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, dominantSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, halfDiminishedChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = halfDiminishedChord(transformedChord[0] + b, tonnetz)
    } else {
        transformedChord = dominantSeventhChord(transformedChord[0] - b, tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const l15: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, dominantSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, diminishedSeventhChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = diminishedSeventhChord(transformedChord[0] + b, tonnetz)
    } else {
        transformedChord = dominantSeventhChord(transformedChord[0] - b, tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const l42: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, majorSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, minorSeventhChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = minorSeventhChord(transformedChord[0] + b, tonnetz)
    } else {
        transformedChord = majorSeventhChord(transformedChord[0] - b, tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const q43: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, majorSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, halfDiminishedChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = halfDiminishedChord(transformedChord[0] + (b - a), tonnetz)
    } else {
        transformedChord = majorSeventhChord(transformedChord[0] - (b - a), tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const q15: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, dominantSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, diminishedSeventhChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = diminishedSeventhChord(transformedChord[0] + (b - a), tonnetz)
    } else {
        transformedChord = dominantSeventhChord(transformedChord[0] - (b - a), tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const rr35: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, halfDiminishedChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, diminishedSeventhChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = diminishedSeventhChord(transformedChord[0] + (2 * a), tonnetz)
    } else {
        transformedChord = halfDiminishedChord(transformedChord[0] - (2 * a), tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const qq51: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, diminishedSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, dominantSeventhChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = dominantSeventhChord(transformedChord[0] + (c - a), tonnetz)
    } else {
        transformedChord = diminishedSeventhChord(transformedChord[0] - (c - a), tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const n51: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, diminishedSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, dominantSeventhChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = dominantSeventhChord(transformedChord[0] + c, tonnetz)
    } else {
        transformedChord = diminishedSeventhChord(transformedChord[0] - c, tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const p18: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const p: number = (a - b);

    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, dominantSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, sharpFiveDominantSeventhChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    const transformedChord: Tetrachord = [...reduceModN];
    if (transformedChord[2] % modulo !== (transformedChord[0] + a + b) % modulo) {
        transformedChord[2] += p;
    } else {
        transformedChord[2] -= p;
    }

    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const p19: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const p: number = (a - b);

    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, dominantSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, flatFiveDominantSeventhChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    const transformedChord: Tetrachord = [...reduceModN];
    if (transformedChord[2] % modulo !== (transformedChord[0] + a + b) % modulo) {
        transformedChord[2] -= p;
    } else {
        transformedChord[2] += p;
    }

    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const p26: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const p: number = (a - b);

    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, minorSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, minorMajorSeventhChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    const transformedChord: Tetrachord = [...reduceModN];
    if (transformedChord[3] % modulo !== (transformedChord[0] + (2 * a) + b) % modulo) {
        transformedChord[3] += p;
    } else {
        transformedChord[3] -= p;
    }

    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const p39: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const p: number = (a - b);

    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, halfDiminishedChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, flatFiveDominantSeventhChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    const transformedChord: Tetrachord = [...reduceModN];
    if (transformedChord[1] % modulo !== (transformedChord[0] + b) % modulo) {
        transformedChord[1] -= p;
    } else {
        transformedChord[1] += p;
    }

    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const p47: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const p: number = (a - b);

    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, majorSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, augmentedMajorSeventhChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    const transformedChord: Tetrachord = [...reduceModN];
    if (transformedChord[2] % modulo !== (transformedChord[0] + a + b) % modulo) {
        transformedChord[2] += p;
    } else {
        transformedChord[2] -= p;
    }

    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const p64: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const p: number = (a - b);

    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, minorMajorSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, majorSeventhChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    const transformedChord: Tetrachord = [...reduceModN];
    if (transformedChord[1] % modulo !== (transformedChord[0] + b) % modulo) {
        transformedChord[1] -= p;
    } else {
        transformedChord[1] += p;
    }

    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const p87: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const p: number = (a - b);

    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, sharpFiveDominantSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, augmentedMajorSeventhChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    const transformedChord: Tetrachord = [...reduceModN];
    if (transformedChord[3] % modulo !== (transformedChord[0] + (2 * a) + b) % modulo) {
        transformedChord[3] += p;
    } else {
        transformedChord[3] -= p;
    }

    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const p98: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const p: number = (c - a);

    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, flatFiveDominantSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, sharpFiveDominantSeventhChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    const transformedChord: Tetrachord = [...reduceModN];
    if (transformedChord[2] % modulo !== (transformedChord[0] + (2 * a)) % modulo) {
        transformedChord[2] -= p;
    } else {
        transformedChord[2] += p;
    }

    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const r63: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, minorMajorSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, halfDiminishedChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = halfDiminishedChord(transformedChord[0] - a, tonnetz)
    } else {
        transformedChord = minorMajorSeventhChord(transformedChord[0] + a, tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const r76: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, augmentedMajorSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, minorMajorSeventhChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = minorMajorSeventhChord(transformedChord[0] - a, tonnetz)
    } else {
        transformedChord = augmentedMajorSeventhChord(transformedChord[0] + a, tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const r86: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, sharpFiveDominantSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, minorMajorSeventhChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = minorMajorSeventhChord(transformedChord[0] - a, tonnetz)
    } else {
        transformedChord = sharpFiveDominantSeventhChord(transformedChord[0] + a, tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const l71: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, augmentedMajorSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, dominantSeventhChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = dominantSeventhChord(transformedChord[0] + b, tonnetz)
    } else {
        transformedChord = augmentedMajorSeventhChord(transformedChord[0] - b, tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const l89: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, sharpFiveDominantSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, flatFiveDominantSeventhChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = flatFiveDominantSeventhChord(transformedChord[0] + b, tonnetz)
    } else {
        transformedChord = sharpFiveDominantSeventhChord(transformedChord[0] - b, tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const q62: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, augmentedMajorSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, minorSeventhChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = minorSeventhChord(transformedChord[0] + (b - a), tonnetz)
    } else {
        transformedChord = augmentedMajorSeventhChord(transformedChord[0] - (b - a), tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const q76: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, augmentedMajorSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, minorMajorSeventhChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = minorMajorSeventhChord(transformedChord[0] + (b - a), tonnetz)
    } else {
        transformedChord = augmentedMajorSeventhChord(transformedChord[0] - (b - a), tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const rr19: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, dominantSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, flatFiveDominantSeventhChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = flatFiveDominantSeventhChord(transformedChord[0] + (2 * a), tonnetz)
    } else {
        transformedChord = dominantSeventhChord(transformedChord[0] - (2 * a), tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const rr39: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, halfDiminishedChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, flatFiveDominantSeventhChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = flatFiveDominantSeventhChord(transformedChord[0] + (2 * a), tonnetz)
    } else {
        transformedChord = halfDiminishedChord(transformedChord[0] - (2 * a), tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const rr98: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, flatFiveDominantSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, sharpFiveDominantSeventhChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = sharpFiveDominantSeventhChord(transformedChord[0] + (2 * a), tonnetz)
    } else {
        transformedChord = flatFiveDominantSeventhChord(transformedChord[0] - (2 * a), tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const qq38: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, halfDiminishedChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, sharpFiveDominantSeventhChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = sharpFiveDominantSeventhChord(transformedChord[0] + (c - a), tonnetz)
    } else {
        transformedChord = halfDiminishedChord(transformedChord[0] - (c - a), tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const qq98: TransformationFunctionsSeventhChords = (chordFromTonnetz, tonnetz): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, flatFiveDominantSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, sharpFiveDominantSeventhChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = sharpFiveDominantSeventhChord(transformedChord[0] + (c - a), tonnetz)
    } else {
        transformedChord = flatFiveDominantSeventhChord(transformedChord[0] - (c - a), tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const q13: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, majorChordFromTonnetz(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, diminishedTriadChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: TriadChord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = diminishedTriadChord(transformedChord[0] + (b - a), tonnetz)
    } else {
        transformedChord = majorChordFromTonnetz(transformedChord[0] - (b - a), tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const q42: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, augmentedTriadChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, minorChordFromTonnetz(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: TriadChord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = minorChordFromTonnetz(transformedChord[0] + (b - a), tonnetz)
    } else {
        transformedChord = augmentedTriadChord(transformedChord[0] - (b - a), tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const l41: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, augmentedTriadChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, majorChordFromTonnetz(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: TriadChord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = majorChordFromTonnetz(transformedChord[0] + (b), tonnetz)
    } else {
        transformedChord = augmentedTriadChord(transformedChord[0] - (b), tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const n42: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, augmentedTriadChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, minorChordFromTonnetz(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: TriadChord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = minorChordFromTonnetz(transformedChord[0] + (c), tonnetz)
    } else {
        transformedChord = augmentedTriadChord(transformedChord[0] - (c), tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const l14: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, majorChordFromTonnetz(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, augmentedTriadChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: TriadChord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = augmentedTriadChord(transformedChord[0] + (b), tonnetz)
    } else {
        transformedChord = majorChordFromTonnetz(transformedChord[0] - (b), tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const p32: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, diminishedTriadChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, minorChordFromTonnetz(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: TriadChord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = minorChordFromTonnetz(transformedChord[0], tonnetz)
    } else {
        transformedChord = diminishedTriadChord(transformedChord[0], tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const rt42: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, augmentedTriadChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, minorChordFromTonnetz(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: TriadChord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = minorChordFromTonnetz(transformedChord[0] - a, tonnetz)
    } else {
        transformedChord = augmentedTriadChord(transformedChord[0] + a, tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const p41: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, augmentedTriadChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, majorChordFromTonnetz(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: TriadChord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = majorChordFromTonnetz(transformedChord[0], tonnetz)
    } else {
        transformedChord = augmentedTriadChord(transformedChord[0], tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const lt13: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, majorChordFromTonnetz(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, diminishedTriadChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: TriadChord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = diminishedTriadChord(transformedChord[0] + b, tonnetz)
    } else {
        transformedChord = majorChordFromTonnetz(transformedChord[0] - b, tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const rt23: TransformationFunctions = (chordFromTonnetz, tonnetz): TriadChord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, minorChordFromTonnetz(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, diminishedTriadChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: TriadChord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = diminishedTriadChord(transformedChord[0] - a, tonnetz)
    } else {
        transformedChord = minorChordFromTonnetz(transformedChord[0] + a, tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const p1M: TransformationTriadSeventhChords = (chordFromTonnetz, tonnetz): TriadChord | Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, dominantSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, majorChordFromTonnetz(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: TriadChord | Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = majorChordFromTonnetz(transformedChord[0], tonnetz)
    } else {
        transformedChord = dominantSeventhChord(transformedChord[0], tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const l1d: TransformationTriadSeventhChords = (chordFromTonnetz, tonnetz): TriadChord | Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, dominantSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, diminishedTriadChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: TriadChord | Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = diminishedTriadChord(transformedChord[0] + b, tonnetz)
    } else {
        transformedChord = dominantSeventhChord(transformedChord[0] - b, tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const p2m: TransformationTriadSeventhChords = (chordFromTonnetz, tonnetz): TriadChord | Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, minorSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, minorChordFromTonnetz(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: TriadChord | Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = minorChordFromTonnetz(transformedChord[0], tonnetz)
    } else {
        transformedChord = minorSeventhChord(transformedChord[0], tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const r2M: TransformationTriadSeventhChords = (chordFromTonnetz, tonnetz): TriadChord | Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, minorSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, majorChordFromTonnetz(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: TriadChord | Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = majorChordFromTonnetz(transformedChord[0] + a, tonnetz)
    } else {
        transformedChord = minorSeventhChord(transformedChord[0] - a, tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const p3d: TransformationTriadSeventhChords = (chordFromTonnetz, tonnetz): TriadChord | Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, halfDiminishedChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, diminishedTriadChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: TriadChord | Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = diminishedTriadChord(transformedChord[0], tonnetz)
    } else {
        transformedChord = halfDiminishedChord(transformedChord[0], tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const r3m: TransformationTriadSeventhChords = (chordFromTonnetz, tonnetz): TriadChord | Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, halfDiminishedChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, minorChordFromTonnetz(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: TriadChord | Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = minorChordFromTonnetz(transformedChord[0] + a, tonnetz)
    } else {
        transformedChord = halfDiminishedChord(transformedChord[0] - a, tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const p4M: TransformationTriadSeventhChords = (chordFromTonnetz, tonnetz): TriadChord | Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, majorSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, majorChordFromTonnetz(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: TriadChord | Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = majorChordFromTonnetz(transformedChord[0], tonnetz)
    } else {
        transformedChord = majorSeventhChord(transformedChord[0], tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const l4m: TransformationTriadSeventhChords = (chordFromTonnetz, tonnetz): TriadChord | Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, majorSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, minorChordFromTonnetz(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: TriadChord | Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = minorChordFromTonnetz(transformedChord[0] + b, tonnetz)
    } else {
        transformedChord = majorSeventhChord(transformedChord[0] - b, tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const p5d: TransformationTriadSeventhChords = (chordFromTonnetz, tonnetz): TriadChord | Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, diminishedSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, diminishedTriadChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: TriadChord | Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = diminishedTriadChord(transformedChord[0], tonnetz)
    } else {
        transformedChord = diminishedSeventhChord(transformedChord[0], tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const r5d: TransformationTriadSeventhChords = (chordFromTonnetz, tonnetz): TriadChord | Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, diminishedSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, diminishedTriadChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: TriadChord | Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = diminishedTriadChord(transformedChord[0] + a, tonnetz)
    } else {
        transformedChord = diminishedSeventhChord(transformedChord[0] - a, tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const rr5d: TransformationTriadSeventhChords = (chordFromTonnetz, tonnetz): TriadChord | Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, diminishedSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, diminishedTriadChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: TriadChord | Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = diminishedTriadChord(transformedChord[0] + 2 * a, tonnetz)
    } else {
        transformedChord = diminishedSeventhChord(transformedChord[0] - 2 * a, tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const z5d: TransformationTriadSeventhChords = (chordFromTonnetz, tonnetz): TriadChord | Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const reduceModN = chordNotesToModN(chordFromTonnetz);

    const equalToChordOne = firstChordComparison(reduceModN, diminishedSeventhChord(reduceModN[0], tonnetz))
    const equalToChordTwo = secondChordComparison(reduceModN, diminishedTriadChord(reduceModN[0], tonnetz))

    if (equalToChordOne === equalToChordTwo) return reduceModN;

    let transformedChord: TriadChord | Tetrachord = [...reduceModN];
    if (equalToChordOne) {
        transformedChord = diminishedTriadChord(transformedChord[0] - a, tonnetz)
    } else {
        transformedChord = diminishedSeventhChord(transformedChord[0] + a, tonnetz)
    }
    const targetTetraChord = chordNotesToModN(transformedChord, modulo);
    return targetTetraChord;
}

export const CHORD_TYPES: ChordGenerators = {
    "M": majorChordFromTonnetz,
    "maj": majorChordFromTonnetz,
    "m": minorChordFromTonnetz,
    "min": minorChordFromTonnetz,
    "maj7": majorSeventhChord,
    "7": dominantSeventhChord,
    "m7": minorSeventhChord,
    "hdim7": halfDiminishedChord,
    "aug": augmentedTriadChord,
    "augmented": augmentedTriadChord,
    "diminished": diminishedTriadChord,
    "dim7": diminishedSeventhChord,
    "minMaj7": minorMajorSeventhChord,
    "maj7aug5": augmentedMajorSeventhChord,
    "dom7aug5": sharpFiveDominantSeventhChord,
    "dom7b5": flatFiveDominantSeventhChord
}

export const CHORD_TYPES_SEVENTHS: ChordGenerators = {
    "maj7": majorSeventhChord,
    "7": dominantSeventhChord,
    "m7": minorSeventhChord,
    "hdim7": halfDiminishedChord,
    "dim7": diminishedSeventhChord,
    "minMaj7": minorMajorSeventhChord,
    "maj7aug5": augmentedMajorSeventhChord,
    "dom7aug5": sharpFiveDominantSeventhChord,
    "dom7b5": flatFiveDominantSeventhChord
}

export const chordFromTonnetz = (rootNote: number, chordType: string, tonnetz: TonnetzSpaces = [3, 4, 5]): TriadChord | Tetrachord => {
    return CHORD_TYPES[chordType](rootNote, tonnetz);
}

export const TRANSFORMATIONS: ObjectTransformations = {
    "p": parallelTransform,
    "l": leadingToneTransform,
    "r": relativeTransform,
    "f": f,
    "n": n,
    "s": s,
    "h": h,
    "t": t,

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

    "N": northTransform,
    "S": southTransform,
    "E": eastTransform,
    "W": westTransform
}

export const SEVENTHSTRANFORMATIONS: ObjectTransformationsSeventhChords = {
    "p12": p12,
    "p14": p14,
    "p23": p23,
    "p35": p35,
    "r12": r12,
    "r23": r23,
    "r42": r42,
    "r35": r35,
    "r53": r53,
    "l13": l13,
    "l15": l15,
    "l42": l42,
    "q43": q43,
    "q15": q15,
    "rr35": rr35,
    "qq51": qq51,
    "n51": n51,
    "p18": p18,
    "p19": p19,
    "p26": p26,
    "p39": p39,
    "p47": p47,
    "p64": p64,
    "p87": p87,
    "p98": p98,
    "r63": r63,
    "r76": r76,
    "r86": r86,
    "l71": l71,
    "l89": l89,
    "q62": q62,
    "q76": q76,
    "rr19": rr19,
    "rr39": rr39,
    "rr98": rr98,
    "qq38": qq38,
    "qq98": qq98
}

export const getAvailableTransform = (transformations: ObjectTransformationsSeventhChords, availableString: string): string[] => {
    return Object.keys(transformations).filter(key => key.includes(availableString));
}

export const AVAILABLESEVENTHSTRANSFORMATIONS: { readonly [key: string]: readonly string[] } = {
    "7": ['p12', 'p14', 'r12', 'l13', 'l15', 'q15', 'qq51', 'n51', 'p18', 'p19', 'l71', 'rr19'],
    "m7": ['p12', 'p23', 'r12', 'r23', 'r42', 'l42', 'p26', 'q62'],
    "hdim7": ['p23', 'p35', 'r23', 'r35', 'r53', 'rr39', 'l13', 'q43', 'rr35', 'p39', 'r63', 'qq38'],
    "maj7": ['p14', 'r42', 'l42', 'q43', 'p47', 'p64'],
    "dim7": ['p35', 'r35', 'r53', 'l15', 'q15', 'rr35', 'qq51', 'n51'],
    "minMaj7": ['p26', 'p64', 'r63', 'r76', 'r86', 'q62', 'q76'],
    "maj7aug5": ['p47', 'p87', 'r76', 'l71', 'q76'],
    "dom7aug5": ['p18', 'p87', 'p98', 'r86', 'l89', 'rr98', 'qq38', 'qq98'],
    "dom7b5": ['p19', 'p39', 'p98', 'l89', 'rr19', 'rr39', 'rr98', 'qq98']
};

export const getAvailableSeventhsTransformations = (chord: Tetrachord, tonnetz: TonnetzSpaces = [3, 4, 5]): readonly string[] | string => {
    for (const chordFunction of Object.keys(CHORD_TYPES_SEVENTHS)) {
        let chordCompare = CHORD_TYPES_SEVENTHS[chordFunction](chord[0], tonnetz);
        let arrayOfComparedValues: boolean[] = chord.map((item, index) => item === chordCompare[index]);
        const isEachElementTrue: boolean = arrayOfComparedValues.every(item => item === true);
        if (isEachElementTrue) {
            return AVAILABLESEVENTHSTRANSFORMATIONS[chordFunction]
        }
    }
    return `No transformations available`
}

export const randomSeventhTransformation = (chord: Tetrachord, tonnetz: TonnetzSpaces = [3, 4, 5]): Tetrachord => {
    for (const chordFunction of Object.keys(CHORD_TYPES_SEVENTHS)) {
        let chordCompare = CHORD_TYPES_SEVENTHS[chordFunction](chord[0], tonnetz);
        let arrayOfComparedValues: boolean[] = chord.map((item, index) => item === chordCompare[index]);
        const isEachElementTrue: boolean = arrayOfComparedValues.every(item => item === true);
        if (isEachElementTrue) {
            const transformations = AVAILABLESEVENTHSTRANSFORMATIONS[chordFunction]
            const randomTransformation = transformations[(Math.floor(Math.random() * transformations.length))]
            return SEVENTHSTRANFORMATIONS[randomTransformation](chord, tonnetz)
        }
    }
    return chord;
}

export const STTRANSFORMATIONS: ObjectTransformationsTriadSeventhChords = {
    "p1M": p1M,
    "l1d": l1d,
    "p2m": p2m,
    "r2M": r2M,
    "p3d": p3d,
    "r3m": r3m,
    "p4M": p4M,
    "l4m": l4m,
    "p5d": p5d,
    "r5d": r5d,
    "rr5d": rr5d,
    "z5d": z5d
}

export const transform = (chord: TriadChord, transformation: string, tonnetz: TonnetzSpaces = [3, 4, 5]): TriadChord => {
    const transformations = transformation.split("");
    let transformedChord: TriadChord = [...chord];
    for (let i = 0; i < transformations.length; i++) {
        const validTransformation = transformations[i];
        if (validTransformation) {
            transformedChord = TRANSFORMATIONS[validTransformation](transformedChord, tonnetz);
        }
    }
    return sortingTriadChord(transformedChord, tonnetz);
}

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
}

export const seventhsTransform = (chord: Tetrachord, transformation: string, tonnetz: TonnetzSpaces = [3, 4, 5]): Tetrachord => {
    const transformations = transformation.match(/([a-z]{1,2}[0-9]*)/g);
    if (!transformations || transformations && transformations.length < 1) {
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
}

export const hexaCycles = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 3): TriadChord[] => {
    const [, b,] = tonnetz;
    const arrayTargetSet: TriadChord[] = [];
    for (let index = 0; index < Math.abs(reps); index++) {
        const baseNote = rootNote + ((-b) * index);
        const majorTriad = chordNotesToModN(majorChordFromTonnetz(baseNote, tonnetz));
        const minorTriad = chordNotesToModN(minorChordFromTonnetz(baseNote, tonnetz));
        arrayTargetSet.push(majorTriad, minorTriad)
    }
    return arrayTargetSet;
}

export const cubeDance = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 3): TriadChord[] => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const arrayTargetSet: TriadChord[] = [];

    for (let index = 0; index <= 3; index++) {
        const nextHexaCycle = ((rootNote + index * (a + b) % modulo) + modulo) % modulo;
        for (let index = 0; index < Math.abs(reps); index++) {
            const baseNote = nextHexaCycle + ((-b) * index);
            const majorTriad = chordNotesToModN(majorChordFromTonnetz(baseNote, tonnetz));
            const minorTriad = chordNotesToModN(minorChordFromTonnetz(baseNote, tonnetz));
            arrayTargetSet.push(majorTriad, minorTriad);
        }
        const diff = rootNote + (a + 2 * b);
        const augChord = ((diff + index * (a) % modulo) + modulo) % modulo;
        arrayTargetSet.push(augmentedTriadChord(augChord, tonnetz));
    }
    return arrayTargetSet;
}

export const octaCycles = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 4): TriadChord[] => {
    const [a] = tonnetz;
    const arrayTargetSet: TriadChord[] = [];
    for (let index = 0; index < Math.abs(reps); index++) {
        const baseNote = rootNote + (a * index);
        const majorTriad = chordNotesToModN(majorChordFromTonnetz(baseNote, tonnetz));
        const minorTriad = chordNotesToModN(minorChordFromTonnetz(baseNote, tonnetz));
        arrayTargetSet.push(majorTriad, minorTriad)
    }
    return arrayTargetSet;
}

export const enneaCycles = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 3): Tetrachord[] => {
    const [, b,] = tonnetz;
    const arrayTargetSet: Tetrachord[] = [];
    for (let index = 0; index < Math.abs(reps); index++) {
        const baseNote = rootNote + ((-b) * index);
        const dominant7 = chordNotesToModN(dominantSeventhChord(baseNote, tonnetz));
        const minor7 = chordNotesToModN(minorSeventhChord(baseNote, tonnetz));
        const halfdim7 = chordNotesToModN(halfDiminishedChord(baseNote, tonnetz));
        arrayTargetSet.push(dominant7, minor7, halfdim7);
    }
    return arrayTargetSet;
}

export const weitzmannRegions = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5]): Map<TriadChord, TriadChord[]> => {
    const [a, b, c] = tonnetz;
    const augmentedTriadRoot: TriadChord = augmentedTriadChord(rootNote, tonnetz);

    const arrayTargetSet: TriadChord[] = [];
    const childChord1 = chordNotesToModN(minorChordFromTonnetz(rootNote + (b - a), tonnetz));
    const childChord2 = chordNotesToModN(minorChordFromTonnetz(rootNote + c, tonnetz))
    const childChord3 = chordNotesToModN(minorChordFromTonnetz(rootNote + b + c, tonnetz))
    const childChord4 = chordNotesToModN(majorChordFromTonnetz(rootNote, tonnetz));
    const childChord5 = chordNotesToModN(majorChordFromTonnetz(rootNote + (-b), tonnetz));
    const childChord6 = chordNotesToModN(majorChordFromTonnetz(rootNote + b, tonnetz));
    arrayTargetSet.push(childChord1, childChord2, childChord3, childChord4, childChord5, childChord6);

    const treeChords: Map<TriadChord, TriadChord[]> = new Map();
    treeChords.set(augmentedTriadRoot, arrayTargetSet)
    return treeChords;
}

export const weitzmannRegionsTwo = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5]): TriadChord[] => {
    const [a, b, c] = tonnetz;
    const augmentedTriadRoot: TriadChord = augmentedTriadChord(rootNote, tonnetz);

    const arrayTargetSet: TriadChord[] = [];
    const childChord1 = chordNotesToModN(minorChordFromTonnetz(rootNote + (b - a), tonnetz));
    const childChord2 = chordNotesToModN(minorChordFromTonnetz(rootNote + c, tonnetz))
    const childChord3 = chordNotesToModN(minorChordFromTonnetz(rootNote + b + c, tonnetz))
    const childChord4 = chordNotesToModN(majorChordFromTonnetz(rootNote, tonnetz));
    const childChord5 = chordNotesToModN(majorChordFromTonnetz(rootNote + (-b), tonnetz));
    const childChord6 = chordNotesToModN(majorChordFromTonnetz(rootNote + b, tonnetz));
    arrayTargetSet.push(augmentedTriadRoot, childChord6, childChord3, childChord4, childChord2, childChord5, childChord1);
    return arrayTargetSet;
}

export const octaTowers = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 3): Tetrachord[][] => {
    const [a] = tonnetz;
    const octaLeft: Tetrachord[] = [];
    const octaCenter: Tetrachord[] = [];
    const octaRight: Tetrachord[] = [];
    for (let index = 0; index >= (-a * Math.abs(reps)); index += (-a)) {
        const baseNote = rootNote + index;
        const leftHalfDim7 = chordNotesToModN(halfDiminishedChord(baseNote, tonnetz))
        const centerMinor7 = chordNotesToModN(minorSeventhChord(baseNote, tonnetz));
        const rightDominant7 = chordNotesToModN(dominantSeventhChord(baseNote + a, tonnetz));
        octaLeft.push(leftHalfDim7);
        octaCenter.push(centerMinor7);
        octaRight.push(rightDominant7);
    }
    const octaTowerMatrix: Tetrachord[][] = [];
    octaTowerMatrix.push(octaLeft, octaCenter, octaRight);
    return octaTowerMatrix;
}

export const octaTowersTwo = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 3): Tetrachord[] => {
    const [a] = tonnetz;
    const octaTowerMatrix: Tetrachord[] = [];
    for (let index = 0; index >= (-a * Math.abs(reps)); index += (-a)) {
        const baseNote = rootNote + index;
        const leftHalfDim7 = chordNotesToModN(halfDiminishedChord(baseNote, tonnetz));
        const centerMinor7 = chordNotesToModN(minorSeventhChord(baseNote, tonnetz));
        const rightDominant7 = chordNotesToModN(dominantSeventhChord(baseNote + a, tonnetz));
        octaTowerMatrix.push(leftHalfDim7, centerMinor7, rightDominant7);
    }
    return octaTowerMatrix;
}

export const powerTowers = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 3): Tetrachord[] => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const powerTowerMatrix: Tetrachord[] = [];
    for (let index = 0; index < 3; index++) {
        const nextOctaTower = ((rootNote + index * b % modulo) + modulo) % modulo;
        for (let index = 0; index >= (-a * Math.abs(reps)); index += (-a)) {
            const baseNote = nextOctaTower + index;
            const leftHalfDim7 = chordNotesToModN(halfDiminishedChord(baseNote, tonnetz));
            const centerMinor7 = chordNotesToModN(minorSeventhChord(baseNote, tonnetz));
            const rightDominant7 = chordNotesToModN(dominantSeventhChord(baseNote, tonnetz));
            powerTowerMatrix.push(leftHalfDim7, centerMinor7, rightDominant7);
        }
        powerTowerMatrix.push(chordNotesToModN(diminishedSeventhChord(nextOctaTower + (a - c), tonnetz)));
    }
    return powerTowerMatrix;
}

export const diagAscOctaTower = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 3): Tetrachord[][] => {
    const [a] = tonnetz;
    const octaLeft: Tetrachord[] = [];
    const octaCenter: Tetrachord[] = [];
    const octaRight: Tetrachord[] = [];
    for (let index = 0; index >= (-a * Math.abs(reps)); index += (-a)) {
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
}

export const diagDescOctaTower = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 3): Tetrachord[][] => {
    const [a] = tonnetz;
    const octaLeft: Tetrachord[] = [];
    const octaCenter: Tetrachord[] = [];
    const octaRight: Tetrachord[] = [];
    for (let index = 0; index >= (-a * Math.abs(reps)); index += (-a)) {
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
}

export const octaTowerLeft = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 3): Tetrachord[] => {
    const [a] = tonnetz;
    const octaTowerMatrix: Tetrachord[] = [];
    for (let index = 0; index >= (-a * Math.abs(reps)); index += (-a)) {
        const baseNote = rootNote + index;
        const leftHalfDim7 = chordNotesToModN(halfDiminishedChord(baseNote, tonnetz));
        const centerMinor7 = chordNotesToModN(minorSeventhChord(baseNote, tonnetz));
        const rightDominant7 = chordNotesToModN(dominantSeventhChord(baseNote, tonnetz));
        octaTowerMatrix.push(leftHalfDim7, centerMinor7, rightDominant7);
    }
    return octaTowerMatrix;
}

export const octaTowerRight = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 3): Tetrachord[] => {
    const [a] = tonnetz;
    const octaTowerMatrix: Tetrachord[] = [];
    for (let index = 0; index >= (-a * Math.abs(reps)); index += (-a)) {
        const baseNote = rootNote + index;
        const leftDominant7 = chordNotesToModN(dominantSeventhChord(baseNote, tonnetz));
        const centerMinor7 = chordNotesToModN(minorSeventhChord(baseNote, tonnetz));
        const rightHalfDim7 = chordNotesToModN(halfDiminishedChord(baseNote, tonnetz));
        octaTowerMatrix.push(leftDominant7, centerMinor7, rightHalfDim7);
    }
    return octaTowerMatrix;
}

export const boretzRegions = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5]): Map<Tetrachord, Tetrachord[]> => {
    const [a, b, c] = tonnetz;
    const diminished7Chord: Tetrachord = diminishedSeventhChord(rootNote, tonnetz);

    const arrayTargetSet: Tetrachord[] = [];
    const childChord1 = chordNotesToModN(dominantSeventhChord(rootNote - (b - a), tonnetz));
    const childChord2 = chordNotesToModN(halfDiminishedChord(rootNote + a, tonnetz));
    const childChord3 = chordNotesToModN(dominantSeventhChord(rootNote + (c - a), tonnetz));
    const childChord4 = chordNotesToModN(halfDiminishedChord(rootNote + (c + (b - a)), tonnetz));
    const childChord5 = chordNotesToModN(dominantSeventhChord(rootNote - (a + b), tonnetz));
    const childChord6 = chordNotesToModN(halfDiminishedChord(rootNote + (-a), tonnetz));
    const childChord7 = chordNotesToModN(dominantSeventhChord(rootNote + (-b), tonnetz));
    const childChord8 = chordNotesToModN(halfDiminishedChord(rootNote, tonnetz));
    arrayTargetSet.push(childChord1, childChord2, childChord3, childChord4, childChord5, childChord6, childChord7, childChord8);

    const treeChords: Map<Tetrachord, Tetrachord[]> = new Map();
    treeChords.set(diminished7Chord, arrayTargetSet)
    return treeChords;
}

export const boretzRegionsTwo = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5]): Tetrachord[] => {
    const [a, b, c] = tonnetz;
    const diminished7Chord: Tetrachord = diminishedSeventhChord(rootNote, tonnetz);

    const arrayTargetSet: Tetrachord[] = [];
    const childChord1 = chordNotesToModN(dominantSeventhChord(rootNote - (b - a), tonnetz));
    const childChord2 = chordNotesToModN(halfDiminishedChord(rootNote + a, tonnetz));
    const childChord3 = chordNotesToModN(dominantSeventhChord(rootNote + (c - a), tonnetz));
    const childChord4 = chordNotesToModN(halfDiminishedChord(rootNote + (c + (b - a)), tonnetz));
    const childChord5 = chordNotesToModN(dominantSeventhChord(rootNote - (a + b), tonnetz));
    const childChord6 = chordNotesToModN(halfDiminishedChord(rootNote + (-a), tonnetz));
    const childChord7 = chordNotesToModN(dominantSeventhChord(rootNote + (-b), tonnetz));
    const childChord8 = chordNotesToModN(halfDiminishedChord(rootNote, tonnetz));
    arrayTargetSet.push(diminished7Chord, childChord1, childChord2, childChord3, childChord4, childChord5, childChord6, childChord7, childChord8);

    return arrayTargetSet;
}

export const hamiltonianCycle1 = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 12): TriadChord[] => {
    const [a,b,] = tonnetz;
    const arrayTargetSet: TriadChord[] = [];
    for (let index = 0; index < Math.abs(reps); index++) {
        const baseNoteOne = rootNote + (a + b) * index;
        const majorTriad = chordNotesToModN(majorChordFromTonnetz(baseNoteOne, tonnetz));
        const minorTriad = chordNotesToModN(minorChordFromTonnetz(baseNoteOne + b, tonnetz));
        arrayTargetSet.push(majorTriad, minorTriad)
    }
    return arrayTargetSet;
}

export const hamiltonianCycle2 = (rootNote: number, tonnetz: TonnetzSpaces = [3, 4, 5], reps: number = 12): TriadChord[] => {
    const [a,b,] = tonnetz;
    const arrayTargetSet: TriadChord[] = [];
    for (let index = 0; index < Math.abs(reps); index++) {
        const baseNoteOne = rootNote  + (2 * a + b) * index;
        const majorTriad1 = chordNotesToModN(majorChordFromTonnetz(baseNoteOne, tonnetz));
        const minorTriad2 = chordNotesToModN(minorChordFromTonnetz(baseNoteOne, tonnetz));
        const majorTriad3 = chordNotesToModN(majorChordFromTonnetz(baseNoteOne + a, tonnetz));
        const minorTriad4 = chordNotesToModN(minorChordFromTonnetz(baseNoteOne + a + b, tonnetz));
        arrayTargetSet.push(majorTriad1, minorTriad2, majorTriad3, minorTriad4)
    }
    return arrayTargetSet;
}

export const AVAILABLESTTTRANSFORMATIONS: { readonly [key: string]: { readonly [key: string]: readonly string[] } } = {
    "M": {
        "p": ['p1M', 'p4M'],
        "r": ['r2M'],
    },
    "m": {
        "p": ['p2m'],
        "r": ['r3m'],
        "l": ['l4m']
    },
    "diminished": {
        "p": ['p3d', 'p5d'],
        "r": ['r5d', 'rr5d'],
        "l": ['l1d'],
        "z": ['z5d'],
    },
    "7": {
        "p": ['p1M'],
        "l": ['l1d']
    },
    "min7": {
        "p": ['p2m'],
        "r": ['r2M'],
    },
    "hdim7": {
        "p": ['p3d'],
        "r": ['r3m'],
    },
    "maj7": {
        "p": ['p4m'],
        "l": ['l4m']
    },
    "dim7": {
        "p": ["p5d"],
        "r": ['r5d', 'rr5d'],
        "z": ['z5d']
    }
}
