export declare class Vec3D {
    readonly x: number;
    readonly y: number;
    readonly z: number;
    constructor(x: number, y: number, z: number);
    static get ZERO(): Vec3D;
    static of(x: number, y: number, z: number): Vec3D;
}
