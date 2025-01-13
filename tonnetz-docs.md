# Tonnetz Typescript

Welcome to the documentation of some specialized mathematical and musical issues that arise in TypeScript Tonnetz.

## The beautiful problem of cycles

There is no gap between the source chord and the destination chord when we do a hexaCycle or an OctaCycle in a Tonnetz `[3, 4, 5]`. However, if we change to other Tonnetz, we will see that there are chords that do not complete a cycle (return to the starting chord by jumping).

In TypeScript Tonnetz I have implemented a parameter to control this geometric problem with a number of iteration repetitions as desired by the live coder. The funny thing is that, as you will see in the tables below, a hexaCycle will no longer necessarily have six chords, nor will an octaCycle have that counting feature. But, remember that the harmonious quality of both cycles is maintained.

### A. Complete HexaCycle

| Tonnetz Space | Iterations without gaps |
| :-----------: | :---------------------: |
|      156      |           24            |
|      110      |           24            |
|      255      |           24            |
|      237      |            8            |
|      138      |            8            |
|      336      |            8            |
|      129      |           12            |
|      228      |           12            |
|      345      |            6            |
|      147      |            6            |
|      246      |            6            |
|      444      |            6            |

* Tonnetz Spaces can be classified by `y` component of `[x, y, z]`.

```text
y = 5 => 24, y = 4 => 6, y = 3 => 8, y = 2 => 12
```

* **The formulas could have `x + z` as an invariant for each Tonnetz grouping.**
* I have found some complete formulas but so far they seem to be particular equations for iterations `8` and `6`.
* Tonnetz `[1, 1, 10]` is a strange case among all.

```text
// Formula
(x + z) - y + 2
```

### B. Complete OctaCycle

| Tonnetz Space | Iterations without gaps |
| :-----------: | :---------------------: |
|      345      |            8            |
|      336      |            8            |
|      147      |           24            |
|      138      |           24            |
|      156      |           24            |
|      129      |           24            |
|      110      |           24            |
|      444      |            6            |
|      228      |           12            |
|      237      |           12            |
|      246      |           12            |
|      255      |           12            |

* Tonnetz Spaces can be classified by `x` component of `[x, y, z]`.

```text
x = 3 => 8, x = 1 => 24, x = 2 => 12, x = 4 => 6
```

* **The formulas could have `y + z` as an invariant for each Tonnetz grouping.**
* Tonnetz `[4, 4, 4]` is a strange case among all.
