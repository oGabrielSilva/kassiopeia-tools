export class Vec3D {
  constructor(public readonly x: number, public readonly y: number, public readonly z: number) {}

  public static get ZERO() {
    return new Vec3D(0, 0, 0);
  }

  public static of(x: number, y: number, z: number) {
    return new Vec3D(x, y, z);
  }
}
