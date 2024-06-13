"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePopup = void 0;
var KassiopeiaPopupTool_1 = require("./KassiopeiaPopupTool");
function generatePopup(uri, width, height) {
    return KassiopeiaPopupTool_1.KassiopeiaPopupTool.get().generate(uri, width, height);
}
exports.generatePopup = generatePopup;
//# sourceMappingURL=index.js.map