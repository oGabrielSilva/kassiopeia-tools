"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePopup = exports.generateHTML = exports.KassiopeiaToasterTool = exports.Vec3D = exports.KassiopeiaAnimationTool = exports.ImageProcessingTool = exports.KassiopeiaPopupTool = exports.KassiopeiaHtmlTool = exports.KassiopeiaTools = void 0;
var html_1 = require("./modules/html");
Object.defineProperty(exports, "generateHTML", { enumerable: true, get: function () { return html_1.generateHTML; } });
var KassiopeiaHtmlTool_1 = require("./modules/html/KassiopeiaHtmlTool");
Object.defineProperty(exports, "KassiopeiaHtmlTool", { enumerable: true, get: function () { return KassiopeiaHtmlTool_1.KassiopeiaHtmlTool; } });
var popup_1 = require("./modules/popup");
Object.defineProperty(exports, "generatePopup", { enumerable: true, get: function () { return popup_1.generatePopup; } });
var KassiopeiaPopupTool_1 = require("./modules/popup/KassiopeiaPopupTool");
Object.defineProperty(exports, "KassiopeiaPopupTool", { enumerable: true, get: function () { return KassiopeiaPopupTool_1.KassiopeiaPopupTool; } });
var ImageProcessingTool_1 = require("./modules/image/ImageProcessingTool");
Object.defineProperty(exports, "ImageProcessingTool", { enumerable: true, get: function () { return ImageProcessingTool_1.ImageProcessingTool; } });
var KassiopeiaValidationTool_1 = require("./modules/validation/KassiopeiaValidationTool");
var KassiopeiaAnimationTool_1 = require("./modules/animation/KassiopeiaAnimationTool");
Object.defineProperty(exports, "KassiopeiaAnimationTool", { enumerable: true, get: function () { return KassiopeiaAnimationTool_1.KassiopeiaAnimationTool; } });
var Vec3D_1 = require("./modules/toaster/Vec3D");
Object.defineProperty(exports, "Vec3D", { enumerable: true, get: function () { return Vec3D_1.Vec3D; } });
var KassiopeiaToasterTool_1 = require("./modules/toaster/KassiopeiaToasterTool");
Object.defineProperty(exports, "KassiopeiaToasterTool", { enumerable: true, get: function () { return KassiopeiaToasterTool_1.KassiopeiaToasterTool; } });
if (typeof window !== 'object' || typeof document !== 'object') {
    throw new Error('Kassiopeia tools needs to be run in the browser');
}
var KassiopeiaTools = {
    KassiopeiaHtmlTool: KassiopeiaHtmlTool_1.KassiopeiaHtmlTool,
    KassiopeiaPopupTool: KassiopeiaPopupTool_1.KassiopeiaPopupTool,
    ImageProcessingTool: ImageProcessingTool_1.ImageProcessingTool,
    KassiopeiaValidationTool: KassiopeiaValidationTool_1.KassiopeiaValidationTool,
    KassiopeiaAnimationTool: KassiopeiaAnimationTool_1.KassiopeiaAnimationTool,
    Vec3D: Vec3D_1.Vec3D,
    KassiopeiaToasterTool: KassiopeiaToasterTool_1.KassiopeiaToasterTool,
    generateHTML: html_1.generateHTML,
    generatePopup: popup_1.generatePopup,
};
exports.KassiopeiaTools = KassiopeiaTools;
//# sourceMappingURL=index.js.map