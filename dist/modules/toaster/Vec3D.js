"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vec3D = void 0;
var Vec3D = /** @class */ (function () {
    function Vec3D(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Object.defineProperty(Vec3D, "ZERO", {
        get: function () {
            return new Vec3D(0, 0, 0);
        },
        enumerable: false,
        configurable: true
    });
    Vec3D.of = function (x, y, z) {
        return new Vec3D(x, y, z);
    };
    return Vec3D;
}());
exports.Vec3D = Vec3D;
//# sourceMappingURL=Vec3D.js.map