"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KassiopeiaTools = void 0;
//animation
var AnimationKassiopeiaTool_1 = require("./modules/animation/AnimationKassiopeiaTool");
//html
var html_1 = require("./modules/html");
var HTMLKassiopeiaTool_1 = require("./modules/html/HTMLKassiopeiaTool");
//image
var ImageKassiopeiaProcessingTool_1 = require("./modules/image/ImageKassiopeiaProcessingTool");
//popup
var popup_1 = require("./modules/popup");
var PopupKassiopeiaTool_1 = require("./modules/popup/PopupKassiopeiaTool");
//toaster
var ToasterKassiopeiaTool_1 = require("./modules/toaster/ToasterKassiopeiaTool");
var Vec2D_1 = require("./modules/toaster/Vec2D");
var Vec3D_1 = require("./modules/toaster/Vec3D");
//validation
var ValidationKassiopeiaTool_1 = require("./modules/validation/ValidationKassiopeiaTool");
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
// (window as any).KassiopeiaTools = KassiopeiaTools;
// const toaster = KassiopeiaToasterTool.get();
// document.getElementById('toasteri').onclick = () =>
//   toaster.info('Testando o toaster info', 30000).listeners(console.log, console.log);
// document.getElementById('toasters').onclick = () => toaster.success('Testando o toaster success');
// document.getElementById('toasterd').onclick = () => toaster.danger('Testando o toaster danger');
// document.getElementById('toasterw').onclick = () => toaster.warn('Testando o toaster warn');
// document.getElementById('toasterc').onclick = () =>
//   toaster.customToaster(
//     'Testando o toaster warn',
//     {
//       background: { color: 'black', padding: Vec2D.of(8, 8), useVectorWithRem: false, opacity: 1 },
//       hideOnClick: true,
//       container: {
//         position3D: Vec3D.of(5, 5, 999),
//         outSide: 'top',
//         boundary: { x: 'start', y: 'top' },
//         useVectorWithPercentage: true,
//       },
//       // progressBar: { color: 'green', height: 4, time: 5000 },
//       text: { color: 'red' },
//       icon: {
//         type: 'html',
//         source: generateHTML({ tag: 'i', attributes: { class: 'bi bi-0-square-fill' } }),
//       },
//     },
//     12000
//   );
//# sourceMappingURL=index.js.map