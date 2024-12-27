import { PLR_STAR } from "./plr-star-group";
import { CARDINAL } from "./cardinal-group";
import { FILM } from "./film-group";
import { PLR } from "./plr-group";

export class TriadTransformations {
  static p = PLR.parallelTransform;
  static l = PLR.leadingToneTransform;
  static r = PLR.relativeTransform;

  static f = FILM.f;
  static n = FILM.n;
  static h = FILM.h;
  static s = FILM.s;
  static t = FILM.t6;

  static N = CARDINAL.northTransform;
  static S = CARDINAL.southTransform;
  static E = CARDINAL.eastTransform;
  static W = CARDINAL.westTransform;

  static l14 = PLR_STAR.l14;
  static l41 = PLR_STAR.l41;
  static lt13 = PLR_STAR.lt13;
  static n42 = PLR_STAR.n42;
  static p32 = PLR_STAR.p32;
  static p41 = PLR_STAR.p41;
  static q13 = PLR_STAR.q13;
  static q42 = PLR_STAR.q42;
  static rt23 = PLR_STAR.rt23;
  static rt42 = PLR_STAR.rt42;
}
