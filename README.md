# TypeScript Tonnetz

TypeScriptTonnetz is a set of functions and operations from Mathematical Music Theory (transformational approach) in Typescript. Specifically, it deals with Tonnetz spaces and functions related to the topic.
The objective is not musicological analysis itself, but the application of these tools born from analysis for algorithmic composition and live coding.

It emerged as a development branch to contribute to Miika Alonen's phenomenal [ZifferJS](https://github.com/amiika/zifferjs) project.

## Features Implemented

Transformations and functions follow the edge flip between triangles and their geometries (so far), so they maintain two common notes (not necessarily voice-leading considerations). In other words, diferent Tonnetz Spaces follow the voice-leading space geometry of the conventional Tonnetz.

-   [x] PRL functions and compositions of any length, cardinal transformations
-   [x] Film music transformations: `f(), n(), s(), h(), t6()`
-   [x] HexaCycles, OctaCycles, EnneaCycles, Hamiltonian Cycles
-   [x] Weitzmann Regions, Boretz Regions, OctaTowers

Mathematical inspiration (`Trajectoires`) in the Doctoral thesis:
```
Représentations symboliques musicales et calcul spatial (Louis Bigo, 2013).
```

## Dual geometry of the Tonnetz

We have implemented all the Neo-Riemannian functions developed in the Doctoral thesis written by [**Sonia Cannas**](https://publication-theses.unistra.fr/public/theses_doctorat/2018/CANNAS_Sonia_2018_ED269.pdf):

```
GEOMETRIC REPRESENTATION AND
ALGEBRAIC FORMALIZATION OF
MUSICAL STRUCTURES (2018)
```

Each of these new transformations from the generalized transformational theory for seventh chords is enabled for the Tonnetz you want to explore.

### PLRQ-group

-   [x] `p12, p14, p23, p35`
-   [x] `r12, r23, r42, r35, r53`
-   [x] `l13, l15, l42`
-   [x] `q43, q15, rr35, qq51, n51`

### PLRQ-group extended

Includes more types of seventh chords and their transformations between them.

-   [x] `p18, p19, p26, p39, p47, p64, p87, p98`
-   [x] `r63, r76, r86, l71, l89, q62, q76`
-   [x] `rr19, rr39, rr98, qq38, qq98`

### PLR*-group

Transformations with augmented and diminished triads.

- [x] `p, r, l, p32, p41, lt13, l41, l14, rt23, rt42, q13, q42, n42`

### ST-group

Transformations between triad chords and different types of seventh chords. The groups `PLRQ` and `PLR*` must be included.

- [x]  `p1M, l1d, p2m, r2M, p3d, r3m, p4M, l4m, p5d, r5d, rr5d, z5d`

Mathematical inspiration in the paper:

```
A Generalized Dual of the Tonnetz for Seventh Chords:
Mathematical, Computational and Compositional Aspects
(Sonia Cannas and Moreno Andreatta, 2018).
```

## :construction: Cube Dance and Power Towers (23-12-2023)

I have implemented Cube Dance and Power Towers with repetitions for all types of Tonnetz. Only one of the possible paths has been chosen.

- [x] Cube Dance
- [x] Power Towers

## Remark

```ts
COMMIT "cbd4f62" has code by Miika Alonen = {
-  Type: ChordGenerationFunction (line 15),
-  Type: ChordGenerators (line 17),
-  Object: CHORD_TYPES (line 150),
-  Function: chordFromTonnetz (line 162),
}

COMMIT "f3b21a0" has code by Miika Alonen = {
-  Function: seventhsTransform (line 721,722,723)
}

I change the `RegExp: (/([a-z][0-9]*)/g)` of line `721` with the new one `(/([a-z]{1,2}[0-9]*)/g)`
```

## Contributing

-  New features (`feat: <...>` )
-  Fix errors and bugs (`fix: <...>`)
-  Refactor (`refactor: <...>`)
-  Testing (`test: <...>`)
-  Documentation (`docs: <...>`)
