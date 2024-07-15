"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopupKassiopeiaTool = void 0;
var PopupKassiopeiaTool = /** @class */ (function () {
    function PopupKassiopeiaTool() {
    }
    PopupKassiopeiaTool.prototype.generate = function (uri, width, height) {
        if (width === void 0) { width = 420; }
        if (height === void 0) { height = 580; }
        return window.open(uri, '_blank', "width=".concat(width, ",height=").concat(height, ",left=").concat((window.innerWidth - width) / 2, ",top=").concat((window.innerHeight - height) / 2));
    };
    PopupKassiopeiaTool.get = function () {
        if (!(PopupKassiopeiaTool.instance instanceof PopupKassiopeiaTool)) {
            PopupKassiopeiaTool.instance = new PopupKassiopeiaTool();
        }
        return PopupKassiopeiaTool.instance;
    };
    Object.defineProperty(PopupKassiopeiaTool, "fast", {
        get: function () {
            return PopupKassiopeiaTool.get();
        },
        enumerable: false,
        configurable: true
    });
    PopupKassiopeiaTool.instance = null;
    return PopupKassiopeiaTool;
}());
exports.PopupKassiopeiaTool = PopupKassiopeiaTool;
//# sourceMappingURL=PopupKassiopeiaTool.js.map