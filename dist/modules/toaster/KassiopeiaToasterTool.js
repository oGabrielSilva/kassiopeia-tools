"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KassiopeiaToasterTool = void 0;
var KassiopeiaAnimationTool_1 = require("../animation/KassiopeiaAnimationTool");
var Toaster_1 = require("./Toaster");
var Vec2D_1 = require("./Vec2D");
var Vec3D_1 = require("./Vec3D");
var danger_1 = require("./icons/danger");
var info_1 = require("./icons/info");
var success_1 = require("./icons/success");
var warn_1 = require("./icons/warn");
var KassiopeiaToasterTool = /** @class */ (function () {
    /**
     * @deprecated This constructor is deprecated.
     * Please use the static `get` or `getConfigured` method instead to create an instance.
     *
     * @param {IToasterConfig} config - The configuration object for the toaster.
     *
     * Example usage:
     * ```typescript
     * // Deprecated usage
     * const toaster = new KassiopeiaToasterTool(config);
     *
     * // Recommended usage
     * const toaster = KassiopeiaToasterTool.get();
     *
     * //OR
     * const toaster = KassiopeiaToasterTool.getConfigured(config);
     * ```
     */
    function KassiopeiaToasterTool(config) {
        this.animationTool = KassiopeiaAnimationTool_1.KassiopeiaAnimationTool.get();
        this.config = config;
    }
    KassiopeiaToasterTool.prototype.destroyInstance = function () {
        KassiopeiaToasterTool.toasters.forEach(function (toaster) { return toaster.root().destroy(); });
        KassiopeiaToasterTool.instance = null;
    };
    KassiopeiaToasterTool.prototype.createToaster = function (message, config, timeInMilliseconds) {
        var toaster = new Toaster_1.Toaster(message, __assign(__assign({ background: config.background }, (config.bar
            ? {
                bar: __assign(__assign({}, config.bar), (timeInMilliseconds && typeof timeInMilliseconds === 'number'
                    ? { time: timeInMilliseconds }
                    : {})),
            }
            : {})), { hideOnClick: config.hideOnClick, icon: config.icon, text: config.text, container: config.container }), function () { return null; }, function () { return null; }, this.animationTool);
        KassiopeiaToasterTool.toasters.push(toaster);
        toaster.root().configureYourself();
        toaster.root().show();
        return toaster;
    };
    KassiopeiaToasterTool.prototype.info = function (message, timeInMilliseconds) {
        if (message === void 0) { message = ''; }
        return this.createToaster(message, {
            background: this.config.background.info,
            bar: this.config.progressBar.info,
            hideOnClick: this.config.hideOnClick,
            icon: this.config.icon.info,
            text: this.config.text.info,
            container: this.config.container,
        }, timeInMilliseconds);
    };
    KassiopeiaToasterTool.prototype.success = function (message, timeInMilliseconds) {
        if (message === void 0) { message = ''; }
        return this.createToaster(message, {
            background: this.config.background.success,
            bar: this.config.progressBar.success,
            hideOnClick: this.config.hideOnClick,
            icon: this.config.icon.success,
            text: this.config.text.success,
            container: this.config.container,
        }, timeInMilliseconds);
    };
    KassiopeiaToasterTool.prototype.danger = function (message, timeInMilliseconds) {
        if (message === void 0) { message = ''; }
        return this.createToaster(message, {
            background: this.config.background.danger,
            bar: this.config.progressBar.danger,
            hideOnClick: this.config.hideOnClick,
            icon: this.config.icon.danger,
            text: this.config.text.danger,
            container: this.config.container,
        }, timeInMilliseconds);
    };
    KassiopeiaToasterTool.prototype.warn = function (message, timeInMilliseconds) {
        if (message === void 0) { message = ''; }
        return this.createToaster(message, {
            background: this.config.background.warn,
            bar: this.config.progressBar.warn,
            hideOnClick: this.config.hideOnClick,
            icon: this.config.icon.warn,
            text: this.config.text.warn,
            container: this.config.container,
        }, timeInMilliseconds);
    };
    KassiopeiaToasterTool.prototype.customToaster = function (message, conf, timeInMilliseconds) {
        return this.createToaster(message, {
            background: conf.background,
            bar: conf.progressBar,
            hideOnClick: conf.hideOnClick,
            icon: conf.icon,
            text: conf.text,
            container: conf.container,
        }, timeInMilliseconds);
    };
    KassiopeiaToasterTool.prototype.changeConfig = function (conf) {
        this.config = conf;
    };
    KassiopeiaToasterTool.defaultConfiguration = function () {
        return {
            container: {
                position3D: Vec3D_1.Vec3D.of(5, 5, 999),
                useVectorWithPercentage: true,
                centerOnScreen: false,
                boundary: { x: 'end', y: 'top' },
                outSide: 'end',
            },
            background: {
                info: { color: '#3c48af', useVectorWithRem: true, padding: Vec2D_1.Vec2D.of(1, 1) },
                success: { color: '#3dbe41', useVectorWithRem: true, padding: Vec2D_1.Vec2D.of(1, 1) },
                danger: { color: '#ca4141', useVectorWithRem: true, padding: Vec2D_1.Vec2D.of(1, 1) },
                warn: { color: '#d1c717', useVectorWithRem: true, padding: Vec2D_1.Vec2D.of(1, 1) },
            },
            text: {
                info: { color: '#ffffff', size: 14, font: 'JetBrains Mono' },
                success: { color: '#f9f9f9', size: 14, font: 'JetBrains Mono' },
                danger: { color: '#f5f5f5', size: 14, font: 'JetBrains Mono' },
                warn: { color: '#1c2003', size: 14, font: 'JetBrains Mono' },
            },
            icon: {
                info: { source: (0, info_1.infoIcon)('#ffffff'), type: 'innerHTML' },
                success: { source: (0, success_1.successIcon)('#f9f9f9'), type: 'innerHTML' },
                danger: { source: (0, danger_1.dangerIcon)('#f5f5f5'), type: 'innerHTML' },
                warn: { source: (0, warn_1.warnIcon)('#1c2003'), type: 'innerHTML' },
            },
            progressBar: {
                info: { color: '#ffffff', height: 2, time: 10000 },
                success: { color: '#f9f9f9', height: 2, time: 10000 },
                danger: { color: '#f5f5f5', height: 2, time: 10000 },
                warn: { color: '#1c2003', height: 2, time: 10000 },
            },
            hideOnClick: true,
        };
    };
    KassiopeiaToasterTool.get = function () {
        if (!KassiopeiaToasterTool.instance) {
            KassiopeiaToasterTool.instance = new KassiopeiaToasterTool(KassiopeiaToasterTool.defaultConfiguration());
        }
        KassiopeiaToasterTool.instance.changeConfig(KassiopeiaToasterTool.defaultConfiguration());
        return KassiopeiaToasterTool.instance;
    };
    KassiopeiaToasterTool.getConfigured = function (config) {
        var instance = KassiopeiaToasterTool.get();
        instance.config = config;
        return instance;
    };
    KassiopeiaToasterTool.instance = null;
    KassiopeiaToasterTool.toasters = [];
    return KassiopeiaToasterTool;
}());
exports.KassiopeiaToasterTool = KassiopeiaToasterTool;
//# sourceMappingURL=KassiopeiaToasterTool.js.map