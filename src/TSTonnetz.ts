import { Graphs } from "./graphs/Graphs";
import { Cycles } from "./cycles/Cycles";
import { TriadTransformations } from "./transformation-groups/TriadTransformations";
import { SeventhsTransformations } from "./transformation-groups/SeventhsTransformations";

export class TSTonnetz {
  static Graphs: typeof Graphs = Graphs;
  static Cycles: typeof Cycles = Cycles;
  static TriadTransformations: typeof TriadTransformations = TriadTransformations;
  static SeventhsTransformations: typeof SeventhsTransformations = SeventhsTransformations;
}
