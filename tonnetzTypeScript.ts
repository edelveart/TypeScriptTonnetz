export type TonnetzSpaceConnected = | [3, 4, 5] | [1, 1, 10] | [1, 2, 9] | [1, 4, 7] | [1, 3, 8] | [1, 5, 6] | [2, 3, 7] | [2, 5, 5];
export type TonnetzSpaceNonConnected = | [2, 4, 6] | [2, 2, 8] | [3, 3, 6] | [4, 4, 4];

export type TonnetzSpaces = TonnetzSpaceConnected | TonnetzSpaceNonConnected;

export type TriadChord = [number, number, number];
export type Tetrachord = [number, number, number, number]

export type TransformationFunctions = (triad: TriadChord, tonnetz: TonnetzSpaces) => number[];

export type ObjectTransformations = {
    [key: string]: TransformationFunctions;
};

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

export const dominantSeventChord = (rootNote: number, tonnetz: TonnetzSpaces): Tetrachord => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;

    const firstNote = ((rootNote % modulo) + modulo) % modulo;
    const secondNote = (rootNote + (b % modulo) + modulo) % modulo;
    const thirdNote = (rootNote + ((a + b) % modulo) + modulo) % modulo;
    const fourthNote = (rootNote + ((2 * a + b) % modulo) + modulo) % modulo;

    const dominant7: Tetrachord = [firstNote, secondNote, thirdNote, fourthNote];
    return dominant7;
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


export const chordNotesToModN = (chord: number[], modulo: number = 12): number[] => {
    const notesModN: number[] = [];
    for (let i = 0; i < chord.length; i++) {
        const noteComponents = ((chord[i] % modulo) + modulo) % modulo;
        notesModN.push(noteComponents);
    }
    return notesModN;
};

export const parallelTransform = (chordFromTonnetz: TriadChord, tonnetz: TonnetzSpaces): number[] => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const p: number = a - b;

    const transformedChord: TriadChord = [...chordFromTonnetz];
    if (transformedChord[1] !== transformedChord[0] + b) {
        transformedChord[1] -= p;
    } else {
        transformedChord[1] += p;
    }
    const finalTriad = chordNotesToModN(transformedChord, modulo);
    return finalTriad;
};

export const leadingToneTransform = (chordFromTonnetz: TriadChord, tonnetz: TonnetzSpaces): number[] => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const l: number = b - c;

    const transformedChord: TriadChord = [...chordFromTonnetz];
    if (transformedChord[1] !== transformedChord[0] + b) {
        transformedChord[2] -= l;
    } else {
        transformedChord[0] += l;
    }
    const finalTriad = chordNotesToModN(transformedChord, modulo);
    return finalTriad;
};

export const relativeTransform: TransformationFunctions = (chordFromTonnetz, tonnetz) => {
    const [a, b, c] = tonnetz;
    const modulo = a + b + c;
    const r: number = a - c;

    const transformedChord: TriadChord = [...chordFromTonnetz];
    if (transformedChord[1] !== transformedChord[0] + b) {
        transformedChord[0] += r;
    } else {
        transformedChord[2] -= r;
    }
    const finalTriad = chordNotesToModN(transformedChord, modulo);
    return finalTriad;
};

export const TRANSFORMATIONS: ObjectTransformations = {
    p: parallelTransform,
    l: leadingToneTransform,
    r: relativeTransform,
};

export const hexaCycles = (rootNote: number, tonnetz: TonnetzSpaces, reps: number = 3): number[][] => {
    const [, b,] = tonnetz;
    const arrayTargetSet: number[][] = [];
    for (let index = 0; index < Math.abs(reps); index++) {
        const baseNote = rootNote + ((-b) * index);
        const majorTriad = chordNotesToModN(majorChordFromTonnetz(baseNote, tonnetz));
        const minorTriad = chordNotesToModN(minorChordFromTonnetz(baseNote, tonnetz));
        arrayTargetSet.push(majorTriad, minorTriad)
    }
    return arrayTargetSet;
}

export const octaCycles = (rootNote: number, tonnetz: TonnetzSpaces, reps: number = 4): number[][] => {
    const [a] = tonnetz;
    const arrayTargetSet: number[][] = [];
    for (let index = 0; index < Math.abs(reps); index++) {
        const baseNote = rootNote + (a * index);
        const majorTriad = chordNotesToModN(majorChordFromTonnetz(baseNote, tonnetz));
        const minorTriad = chordNotesToModN(minorChordFromTonnetz(baseNote, tonnetz));
        arrayTargetSet.push(majorTriad, minorTriad)
    }
    return arrayTargetSet;
}

export const enneaCycle = (rootNote: number, tonnetz: TonnetzSpaces, reps: number = 3): number[][] => {
    const [, b,] = tonnetz;
    const arrayTargetSet: number[][] = [];
    for (let index = 0; index < Math.abs(reps); index++) {
        const baseNote = rootNote + ((-b) * index);
        const dominant7 = chordNotesToModN(dominantSeventChord(baseNote, tonnetz));
        const minor7 = chordNotesToModN(minorSeventhChord(baseNote, tonnetz));
        const halfdim7 = chordNotesToModN(halfDiminishedChord(baseNote, tonnetz));
        arrayTargetSet.push(dominant7, minor7, halfdim7);
    }
    return arrayTargetSet;
}
