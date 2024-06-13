"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHTML = exports.generatePopup = exports.Vec3D = exports.Vec2D = exports.ToasterKassiopeiaTool = exports.ValidationKassiopeiaTool = exports.PopupKassiopeiaTool = exports.ImageKassiopeiaProcessingTool = exports.HTMLKassiopeiaTool = exports.AnimationKassiopeiaTool = exports.KassiopeiaTools = void 0;
//animation
var AnimationKassiopeiaTool_1 = require("./modules/animation/AnimationKassiopeiaTool");
Object.defineProperty(exports, "AnimationKassiopeiaTool", { enumerable: true, get: function () { return AnimationKassiopeiaTool_1.AnimationKassiopeiaTool; } });
//html
var html_1 = require("./modules/html");
Object.defineProperty(exports, "generateHTML", { enumerable: true, get: function () { return html_1.generateHTML; } });
var HTMLKassiopeiaTool_1 = require("./modules/html/HTMLKassiopeiaTool");
Object.defineProperty(exports, "HTMLKassiopeiaTool", { enumerable: true, get: function () { return HTMLKassiopeiaTool_1.HTMLKassiopeiaTool; } });
//image
var ImageKassiopeiaProcessingTool_1 = require("./modules/image/ImageKassiopeiaProcessingTool");
Object.defineProperty(exports, "ImageKassiopeiaProcessingTool", { enumerable: true, get: function () { return ImageKassiopeiaProcessingTool_1.ImageKassiopeiaProcessingTool; } });
//popup
var popup_1 = require("./modules/popup");
Object.defineProperty(exports, "generatePopup", { enumerable: true, get: function () { return popup_1.generatePopup; } });
var PopupKassiopeiaTool_1 = require("./modules/popup/PopupKassiopeiaTool");
Object.defineProperty(exports, "PopupKassiopeiaTool", { enumerable: true, get: function () { return PopupKassiopeiaTool_1.PopupKassiopeiaTool; } });
//toaster
var ToasterKassiopeiaTool_1 = require("./modules/toaster/ToasterKassiopeiaTool");
Object.defineProperty(exports, "ToasterKassiopeiaTool", { enumerable: true, get: function () { return ToasterKassiopeiaTool_1.ToasterKassiopeiaTool; } });
var Vec2D_1 = require("./modules/toaster/Vec2D");
Object.defineProperty(exports, "Vec2D", { enumerable: true, get: function () { return Vec2D_1.Vec2D; } });
var Vec3D_1 = require("./modules/toaster/Vec3D");
Object.defineProperty(exports, "Vec3D", { enumerable: true, get: function () { return Vec3D_1.Vec3D; } });
//validation
var ValidationKassiopeiaTool_1 = require("./modules/validation/ValidationKassiopeiaTool");
Object.defineProperty(exports, "ValidationKassiopeiaTool", { enumerable: true, get: function () { return ValidationKassiopeiaTool_1.ValidationKassiopeiaTool; } });
exports.KassiopeiaTools = {
    AnimationKassiopeiaTool: AnimationKassiopeiaTool_1.AnimationKassiopeiaTool,
    HTMLKassiopeiaTool: HTMLKassiopeiaTool_1.HTMLKassiopeiaTool,
    ImageKassiopeiaProcessingTool: ImageKassiopeiaProcessingTool_1.ImageKassiopeiaProcessingTool,
    PopupKassiopeiaTool: PopupKassiopeiaTool_1.PopupKassiopeiaTool,
    ValidationKassiopeiaTool: ValidationKassiopeiaTool_1.ValidationKassiopeiaTool,
    ToasterKassiopeiaTool: ToasterKassiopeiaTool_1.ToasterKassiopeiaTool,
    Vec2D: Vec2D_1.Vec2D,
    Vec3D: Vec3D_1.Vec3D,
    generatePopup: popup_1.generatePopup,
    generateHTML: html_1.generateHTML,
};
exports.default = exports.KassiopeiaTools;
//# sourceMappingURL=index.js.map