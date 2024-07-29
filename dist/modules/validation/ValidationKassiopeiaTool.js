"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationKassiopeiaTool = void 0;
var slug = require("slug");
var ValidationKassiopeiaTool = /** @class */ (function () {
    function ValidationKassiopeiaTool() {
    }
    ValidationKassiopeiaTool.prototype.isURLValid = function (url) {
        return (typeof url === 'string' &&
            !url.startsWith('http:') &&
            ValidationKassiopeiaTool.URLRegex.test(url));
    };
    ValidationKassiopeiaTool.prototype.isNameValid = function (name) {
        return typeof name === 'string' && name.trim().length >= 2;
    };
    ValidationKassiopeiaTool.prototype.isEmailValid = function (email) {
        return typeof email === 'string' && ValidationKassiopeiaTool.emailRegex.test(email);
    };
    ValidationKassiopeiaTool.prototype.isPasswordValid = function (password) {
        if (typeof password !== 'string') {
            return false;
        }
        var minLength = 8;
        var hasUpperCase = /[A-Z]/.test(password);
        var hasLowerCase = /[a-z]/.test(password);
        var hasNumber = /[0-9]/.test(password);
        return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber;
    };
    ValidationKassiopeiaTool.prototype.normalizeText = function (text) {
        return typeof text === 'string' ? text.trim() : '';
    };
    ValidationKassiopeiaTool.prototype.normalizeURI = function (uri) {
        return typeof uri === 'string' ? encodeURI(uri) : '';
    };
    ValidationKassiopeiaTool.prototype.slugify = function (txt, options) {
        if (options === void 0) { options = {
            lower: false,
            locale: 'en',
            trim: true,
            fallback: true,
            replacement: '-',
            charmap: slug.charmap,
            multicharmap: slug.multicharmap,
        }; }
        return slug(txt, options);
    };
    ValidationKassiopeiaTool.get = function () {
        if (!(ValidationKassiopeiaTool.instance instanceof ValidationKassiopeiaTool)) {
            ValidationKassiopeiaTool.instance = new ValidationKassiopeiaTool();
        }
        return ValidationKassiopeiaTool.instance;
    };
    Object.defineProperty(ValidationKassiopeiaTool, "fast", {
        get: function () {
            return ValidationKassiopeiaTool.get();
        },
        enumerable: false,
        configurable: true
    });
    ValidationKassiopeiaTool.instance = null;
    ValidationKassiopeiaTool.emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    ValidationKassiopeiaTool.URLRegex = /(https:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
    return ValidationKassiopeiaTool;
}());
exports.ValidationKassiopeiaTool = ValidationKassiopeiaTool;
//# sourceMappingURL=ValidationKassiopeiaTool.js.map