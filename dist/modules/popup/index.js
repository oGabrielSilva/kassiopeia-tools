"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePopup = void 0;
var PopupKassiopeiaTool_1 = require("./PopupKassiopeiaTool");
function generatePopup(uri, width, height) {
    return PopupKassiopeiaTool_1.PopupKassiopeiaTool.get().generate(uri, width, height);
}
exports.generatePopup = generatePopup;
//# sourceMappingURL=index.js.map