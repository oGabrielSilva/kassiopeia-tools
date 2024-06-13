"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageProcessingTool = void 0;
var ImageProcessingTool = /** @class */ (function () {
    function ImageProcessingTool() {
    }
    ImageProcessingTool.prototype.convertFileToWebpBlobWithClipping = function (file, width, height, quality) {
        var _this = this;
        if (width === void 0) { width = 192; }
        if (height === void 0) { height = 192; }
        if (quality === void 0) { quality = 0.9; }
        return new Promise(function (resolve) {
            try {
                if (!file)
                    return resolve(null);
                var url_1 = URL.createObjectURL(file);
                var img_1 = new Image();
                img_1.onload = function () { return __awaiter(_this, void 0, void 0, function () {
                    var w, h, canvas, ctx, newImage, _a, _b, _c;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0:
                                w = img_1.width;
                                h = img_1.height;
                                canvas = document.createElement('canvas');
                                ctx = canvas.getContext('2d');
                                _a = (width !== w || height !== h);
                                if (!_a) return [3 /*break*/, 7];
                                if (!(w < h)) return [3 /*break*/, 2];
                                return [4 /*yield*/, this.resizeHeight(img_1, w, h)];
                            case 1:
                                _b = _d.sent();
                                return [3 /*break*/, 6];
                            case 2:
                                if (!(w > h)) return [3 /*break*/, 4];
                                return [4 /*yield*/, this.resizeWidth(img_1, w, h)];
                            case 3:
                                _c = _d.sent();
                                return [3 /*break*/, 5];
                            case 4:
                                _c = img_1;
                                _d.label = 5;
                            case 5:
                                _b = _c;
                                _d.label = 6;
                            case 6:
                                _a = (_b);
                                _d.label = 7;
                            case 7:
                                newImage = (_a) ||
                                    img_1;
                                ctx.canvas.width = width;
                                ctx.canvas.height = height;
                                ctx.drawImage(newImage, 0, 0, width, height);
                                quality = quality < 0.7 ? 0.7 : quality > 1 ? 1 : quality;
                                ctx.canvas.toBlob(function (b) {
                                    URL.revokeObjectURL(url_1);
                                    resolve(b);
                                }, 'image/webp', quality);
                                return [2 /*return*/];
                        }
                    });
                }); };
                img_1.crossOrigin = 'Anonymous';
                img_1.src = url_1;
            }
            catch (error) {
                resolve(null);
            }
        });
    };
    ImageProcessingTool.prototype.convertFileToWebpBlobWithoutClipping = function (file, quality) {
        var _this = this;
        if (quality === void 0) { quality = 0.9; }
        return new Promise(function (resolve) {
            try {
                if (!file)
                    return resolve(null);
                var url_2 = URL.createObjectURL(file);
                var img_2 = new Image();
                img_2.onload = function () { return __awaiter(_this, void 0, void 0, function () {
                    var w, h, canvas, ctx;
                    return __generator(this, function (_a) {
                        w = img_2.width;
                        h = img_2.height;
                        canvas = document.createElement('canvas');
                        ctx = canvas.getContext('2d');
                        ctx.canvas.width = w;
                        ctx.canvas.height = h;
                        ctx.drawImage(img_2, 0, 0, w, h);
                        quality = quality < 0.7 ? 0.7 : quality > 1 ? 1 : quality;
                        ctx.canvas.toBlob(function (b) {
                            URL.revokeObjectURL(url_2);
                            resolve(b);
                        }, 'image/webp', quality);
                        return [2 /*return*/];
                    });
                }); };
                img_2.crossOrigin = 'Anonymous';
                img_2.src = url_2;
            }
            catch (error) {
                resolve(null);
            }
        });
    };
    ImageProcessingTool.prototype.convertFileToJpegBlobWithClipping = function (file, width, height, quality) {
        var _this = this;
        if (width === void 0) { width = 192; }
        if (height === void 0) { height = 192; }
        if (quality === void 0) { quality = 0.9; }
        return new Promise(function (resolve) {
            try {
                if (!file)
                    return resolve(null);
                var url_3 = URL.createObjectURL(file);
                var img_3 = new Image();
                img_3.onload = function () { return __awaiter(_this, void 0, void 0, function () {
                    var w, h, canvas, ctx, newImage, _a, _b, _c;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0:
                                w = img_3.width;
                                h = img_3.height;
                                canvas = document.createElement('canvas');
                                ctx = canvas.getContext('2d');
                                _a = (width !== w || height !== h);
                                if (!_a) return [3 /*break*/, 7];
                                if (!(w < h)) return [3 /*break*/, 2];
                                return [4 /*yield*/, this.resizeHeight(img_3, w, h)];
                            case 1:
                                _b = _d.sent();
                                return [3 /*break*/, 6];
                            case 2:
                                if (!(w > h)) return [3 /*break*/, 4];
                                return [4 /*yield*/, this.resizeWidth(img_3, w, h)];
                            case 3:
                                _c = _d.sent();
                                return [3 /*break*/, 5];
                            case 4:
                                _c = img_3;
                                _d.label = 5;
                            case 5:
                                _b = _c;
                                _d.label = 6;
                            case 6:
                                _a = (_b);
                                _d.label = 7;
                            case 7:
                                newImage = (_a) ||
                                    img_3;
                                ctx.canvas.width = width;
                                ctx.canvas.height = height;
                                ctx.drawImage(newImage, 0, 0, width, height);
                                quality = quality < 0.7 ? 0.7 : quality > 1 ? 1 : quality;
                                ctx.canvas.toBlob(function (b) {
                                    URL.revokeObjectURL(url_3);
                                    resolve(b);
                                }, 'image/jpeg', quality);
                                return [2 /*return*/];
                        }
                    });
                }); };
                img_3.crossOrigin = 'Anonymous';
                img_3.src = url_3;
            }
            catch (error) {
                resolve(null);
            }
        });
    };
    ImageProcessingTool.prototype.convertFileToJpegBlobWithoutClipping = function (file, quality) {
        var _this = this;
        if (quality === void 0) { quality = 0.9; }
        return new Promise(function (resolve) {
            try {
                if (!file)
                    return resolve(null);
                var url_4 = URL.createObjectURL(file);
                var img_4 = new Image();
                img_4.onload = function () { return __awaiter(_this, void 0, void 0, function () {
                    var w, h, canvas, ctx;
                    return __generator(this, function (_a) {
                        w = img_4.width;
                        h = img_4.height;
                        canvas = document.createElement('canvas');
                        ctx = canvas.getContext('2d');
                        ctx.canvas.width = w;
                        ctx.canvas.height = h;
                        ctx.drawImage(img_4, 0, 0, w, h);
                        quality = quality < 0.7 ? 0.7 : quality > 1 ? 1 : quality;
                        ctx.canvas.toBlob(function (b) {
                            URL.revokeObjectURL(url_4);
                            resolve(b);
                        }, 'image/jpeg', quality);
                        return [2 /*return*/];
                    });
                }); };
                img_4.crossOrigin = 'Anonymous';
                img_4.src = url_4;
            }
            catch (error) {
                resolve(null);
            }
        });
    };
    ImageProcessingTool.prototype.blobToDataURL = function (blob, type) {
        var _this = this;
        if (!type)
            type = 'jpeg';
        return new Promise(function (resolve) {
            try {
                if (!blob)
                    return resolve(null);
                var url = URL.createObjectURL(blob);
                var img_5 = new Image();
                img_5.onload = function () { return __awaiter(_this, void 0, void 0, function () {
                    var w, h, canvas, ctx;
                    return __generator(this, function (_a) {
                        w = img_5.width;
                        h = img_5.height;
                        canvas = document.createElement('canvas');
                        ctx = canvas.getContext('2d');
                        ctx.canvas.width = w;
                        ctx.canvas.height = h;
                        ctx.drawImage(img_5, 0, 0, w, h);
                        resolve(ctx.canvas.toDataURL("image/".concat(type), 1));
                        return [2 /*return*/];
                    });
                }); };
                img_5.crossOrigin = 'Anonymous';
                img_5.src = url;
            }
            catch (error) {
                resolve(null);
            }
        });
    };
    ImageProcessingTool.prototype.resizeHeight = function (img, width, height) {
        return new Promise(function (resolve) {
            var cv = document.createElement('canvas');
            var context = cv.getContext('2d');
            context.canvas.width = width;
            context.canvas.height = width;
            context.drawImage(img, 0, height * 0.2, width, width, 0, 0, width, width);
            var image = new Image();
            image.onload = function () { return resolve(image); };
            image.src = context.canvas.toDataURL();
        });
    };
    ImageProcessingTool.prototype.resizeWidth = function (img, width, height) {
        return new Promise(function (resolve) {
            var cv = document.createElement('canvas');
            var context = cv.getContext('2d');
            context.canvas.width = height;
            context.canvas.height = height;
            context.drawImage(img, width * 0.2, 0, height, height, 0, 0, height, height);
            var image = new Image();
            image.onload = function () { return resolve(image); };
            image.src = context.canvas.toDataURL();
        });
    };
    ImageProcessingTool.get = function () {
        if (!(ImageProcessingTool.instance instanceof ImageProcessingTool)) {
            ImageProcessingTool.instance = new ImageProcessingTool();
        }
        return ImageProcessingTool.instance;
    };
    return ImageProcessingTool;
}());
exports.ImageProcessingTool = ImageProcessingTool;
//# sourceMappingURL=ImageProcessingTool.js.map