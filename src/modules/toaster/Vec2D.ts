export class Vec2D {
  constructor(public readonly x: number, public readonly y: number) {}

  public static get ZERO() {
    return new Vec2D(0, 0);
  }

  public static of(x: number, y: number) {
    return new Vec2D(x, y);
  }
}
