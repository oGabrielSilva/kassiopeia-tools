"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KassiopeiaValidationTool = void 0;
var KassiopeiaValidationTool = /** @class */ (function () {
    function KassiopeiaValidationTool() {
    }
    KassiopeiaValidationTool.prototype.isURLValid = function (url) {
        return (typeof url === 'string' &&
            !url.startsWith('http:') &&
            KassiopeiaValidationTool.URLRegex.test(url));
    };
    KassiopeiaValidationTool.prototype.isNameValid = function (name) {
        return typeof name === 'string' && name.trim().length >= 2;
    };
    KassiopeiaValidationTool.prototype.isEmailValid = function (email) {
        return typeof email === 'string' && KassiopeiaValidationTool.emailRegex.test(email);
    };
    KassiopeiaValidationTool.prototype.isPasswordValid = function (password) {
        if (typeof password !== 'string') {
            return false;
        }
        var minLength = 8;
        var hasUpperCase = /[A-Z]/.test(password);
        var hasLowerCase = /[a-z]/.test(password);
        var hasNumber = /[0-9]/.test(password);
        return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber;
    };
    KassiopeiaValidationTool.prototype.normalizeText = function (text) {
        return String(text).trim();
    };
    KassiopeiaValidationTool.prototype.normalizeURI = function (uri) {
        return encodeURI(uri);
    };
    KassiopeiaValidationTool.get = function () {
        if (!(KassiopeiaValidationTool.instance instanceof KassiopeiaValidationTool)) {
            KassiopeiaValidationTool.instance = new KassiopeiaValidationTool();
        }
        return KassiopeiaValidationTool.instance;
    };
    KassiopeiaValidationTool.instance = null;
    KassiopeiaValidationTool.emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    KassiopeiaValidationTool.URLRegex = /(https:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
    return KassiopeiaValidationTool;
}());
exports.KassiopeiaValidationTool = KassiopeiaValidationTool;
//# sourceMappingURL=KassiopeiaValidationTool.js.map