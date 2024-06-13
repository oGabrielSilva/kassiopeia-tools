"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vec2D = void 0;
var Vec2D = /** @class */ (function () {
    function Vec2D(x, y) {
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(Vec2D, "ZERO", {
        get: function () {
            return new Vec2D(0, 0);
        },
        enumerable: false,
        configurable: true
    });
    Vec2D.of = function (x, y) {
        return new Vec2D(x, y);
    };
    return Vec2D;
}());
exports.Vec2D = Vec2D;
//# sourceMappingURL=Vec2D.js.map