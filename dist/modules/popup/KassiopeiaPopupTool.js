"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KassiopeiaPopupTool = void 0;
var KassiopeiaPopupTool = /** @class */ (function () {
    function KassiopeiaPopupTool() {
    }
    KassiopeiaPopupTool.prototype.generate = function (uri, width, height) {
        if (width === void 0) { width = 420; }
        if (height === void 0) { height = 580; }
        return window.open(uri, '_blank', "width=".concat(width, ",height=").concat(height, ",left=").concat((window.innerWidth - width) / 2, ",top=").concat((window.innerHeight - height) / 2));
    };
    KassiopeiaPopupTool.get = function () {
        if (!(KassiopeiaPopupTool.instance instanceof KassiopeiaPopupTool)) {
            KassiopeiaPopupTool.instance = new KassiopeiaPopupTool();
        }
        return KassiopeiaPopupTool.instance;
    };
    KassiopeiaPopupTool.instance = null;
    return KassiopeiaPopupTool;
}());
exports.KassiopeiaPopupTool = KassiopeiaPopupTool;
//# sourceMappingURL=KassiopeiaPopupTool.js.map