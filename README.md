# TypeScript Tonnetz

![NPM Version](https://img.shields.io/npm/v/ts-tonnetz)

TypeScript Tonnetz is a set of functions and operations from Mathematical Music Theory (transformational approach). Specifically, it deals with Tonnetz spaces and functions related to the topic.
The objective is not musicological analysis itself, but the application of these tools born from analysis for algorithmic composition and live coding.

It emerged as a development branch to contribute to Miika Alonen's phenomenal [ZifferJS](https://github.com/amiika/zifferjs) project.

## Features Implemented

Transformations and functions follow the edge flip between triangles and their geometries (so far), so they maintain two common notes (not necessarily voice-leading considerations). In other words, diferent Tonnetz Spaces follow the voice-leading space geometry of the conventional Tonnetz.

- [x] PRL functions and compositions of any length, cardinal transformations
- [x] Film music transformations: `f(), n(), s(), h(), t6()`
- [x] HexaCycles, OctaCycles, EnneaCycles, Hamiltonian Cycles
- [x] Weitzmann Regions, Boretz Regions, OctaTowers
- [x] Cube Dance, Power Towers

Mathematical inspiration (`Trajectoires`) in the Doctoral thesis written by [**Louis Bigo**](https://theses.hal.science/tel-01326827):

```text
Représentations symboliques musicales et calcul spatial (2013).
```

## Dual geometry of the Tonnetz

We have implemented all the Neo-Riemannian functions developed in the Doctoral thesis written by [**Sonia Cannas**](https://publication-theses.unistra.fr/public/theses_doctorat/2018/CANNAS_Sonia_2018_ED269.pdf):

```text
GEOMETRIC REPRESENTATION AND
ALGEBRAIC FORMALIZATION OF
MUSICAL STRUCTURES (2018)
```

Each of these new transformations from the generalized transformational theory for seventh chords is enabled for the Tonnetz you want to explore.

### PLRQ-group

- [x] `p12, p14, p23, p35`
- [x] `r12, r23, r42, r35, r53`
- [x] `l13, l15, l42`
- [x] `q43, q15, rr35, qq51, n51`

### PLRQ-group extended

Includes more types of seventh chords and their transformations between them.

- [x] `p18, p19, p26, p39, p47, p64, p87, p98`
- [x] `r63, r76, r86, l71, l89, q62, q76`
- [x] `rr19, rr39, rr98, qq38, qq98`

### PLR*-group

Transformations with augmented and diminished triads.

- [x] `p, r, l, p32, p41, lt13, l41, l14, rt23, rt42, q13, q42, n42`

### ST-group

Transformations between triad chords and different types of seventh chords. The groups `PLRQ` and `PLR*` must be included.

- [x]  `p1M, l1d, p2m, r2M, p3d, r3m, p4M, l4m, p5d, r5d, rr5d, z5d`

Mathematical inspiration in the paper:

```text
A Generalized Dual of the Tonnetz for Seventh Chords:
Mathematical, Computational and Compositional Aspects
(Sonia Cannas and Moreno Andreatta, 2018).
```
### Extensions of the Axis System in Béla Bartók

Generalized implementation on any Tonnetz of the harmonic groups of **axis system** ideaded by [**Ernő Lendvai**](http://www.harmonicwheel.com/bartok_axes.pdf): Tonic (8 chords), Subdominant (8 chords), and Dominant (8 chords). The parameters specify two directions, sought emotion (based on the ideas of [**Mauro de Maria**](https://www.youtube.com/watch?v=EhmbTaEKUZo)), cross or diagonal movement. Major-minor and minor-major alternation available for cross path.

The manipulation can be done using a single function:
* `genCardinalPoints()`

Groups with chord roots separated by major thirds (which we will call triangular) are also added.
* `genTriangularPoints()`

We added **six new graphs** generalized inspired by the idea of cardinal points (extension of the axial system) for film music by Mauro de Maria. These graphs link the groups of cardinal points with the groups of three chords.

Each graph can be manipulated from a single function:
* `genCardinalTriangularGraph()`

## Contributing

- New features (`feat: <...>` )
- Fix errors and bugs (`fix: <...>`)
- Refactor (`refactor: <...>`)
- Testing (`test: <...>`)
- Documentation (`docs: <...>`)

## License

[MIT License](https://github.com/edelveart/TypeScriptTonnetz/blob/main/LICENSE)
