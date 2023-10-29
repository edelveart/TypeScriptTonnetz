# TypeScriptTonnetz

TypeScriptTonnetz is a set of functions and operations from Mathematical Music Theory (transformational approach) in Typescript. Specifically, it deals with Tonnetz spaces and functions related to the topic.
The objective is not musicological analysis itself, but the application of these tools born from analysis for free musical composition and live coding.

It emerged as a development branch to contribute to Miika Alonen's phenomenal [ZifferJS](https://github.com/amiika/zifferjs) project.

## Features Implemented

Transformations and functions follow the edge flip between triangles and their geometries (so far), so they maintain two common notes (not necessarily voice-leading considerations). In other words, diferent Tonnetz Spaces follow the voice-leading space geometry of the conventional Tonnetz.

-   [x] PRL functions and compositions of any length
-   [x] HexaCycles, OctaCycles, EnneaCycles
-   [x] Weitzmann Regions, Boretz Regions
-   [x] OctaTowers

Mathematical inspiration (`Trajectoires`) in the thesis:
```
Représentations symboliques musicales et calcul spatial.
(Louis Bigo, 2013)
```

## Dual geometry of the Tonnetz

Features currently in development. These functions belong to the branch of generalized transformational theory for seventh chords.

-   [x] `p12, p14, p23, p35`
-   [x] `r12, r23, r42, r35, r53`
-   [x] `l13, l15, l42`
-   [x] `q43, q15, rr35, qq51, n51`

Mathematical inspiration in the paper:

```
A Generalized Dual of the Tonnetz for Seventh Chords:
Mathematical, Computational and Compositional Aspects
(Sonia Cannas & Moreno Andreatta, 2018).
```

## Observation

```ts
COMMIT "cbd4f62" has code by Miika Alonen = {
-  Type: ChordGenerationFunction (line 15),
-  Type: ChordGenerators (line 17),
-  Object: CHORD_TYPES (line 150),
-  Function: chordFromTonnetz (line 162),
-  Function: transform (line 172)
}
```
