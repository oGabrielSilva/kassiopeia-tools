export declare class Vec2D {
    readonly x: number;
    readonly y: number;
    constructor(x: number, y: number);
    static get ZERO(): Vec2D;
    static of(x: number, y: number): Vec2D;
}
