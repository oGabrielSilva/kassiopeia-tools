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
exports.Toaster = void 0;
var KassiopeiaAnimationTool_1 = require("../animation/KassiopeiaAnimationTool");
var html_1 = require("../html");
var KassiopeiaToasterTool_1 = require("./KassiopeiaToasterTool");
var Toaster = /** @class */ (function () {
    function Toaster(message, config, onClick, onHide, anim) {
        if (onClick === void 0) { onClick = null; }
        if (onHide === void 0) { onHide = null; }
        if (anim === void 0) { anim = KassiopeiaAnimationTool_1.KassiopeiaAnimationTool.get(); }
        this.message = message;
        this.config = config;
        this.onClick = onClick;
        this.onHide = onHide;
        this.anim = anim;
        this.id = Date.now().toString(36) + Date.now().toString() + Math.random().toString(36);
        this.createdTime = new Date();
        this.defaultMaxWidth = '70vw';
        this.isOnScreen = false;
        this.container = null;
        this.background = null;
        this.text = null;
        this.icon = null;
        this.progressBar = null;
        this.clicked = false;
    }
    Toaster.prototype.configureYourself = function () {
        var _this = this;
        var _a = this.config.container, useVectorWithPercentage = _a.useVectorWithPercentage, position3D = _a.position3D, border = _a.border, maxWidth = _a.maxWidth, boundary = _a.boundary, centerOnScreen = _a.centerOnScreen;
        var len = KassiopeiaToasterTool_1.KassiopeiaToasterTool.toasters.filter(function (toaster) {
            return toaster &&
                toaster.isOnScreen &&
                toaster.id !== _this.id &&
                toaster.config.container.boundary.x === boundary.x &&
                toaster.config.container.boundary.y === boundary.y;
        }).length;
        if (len > 0)
            len += 1;
        this.container = (0, html_1.generateHTML)({
            tag: 'div',
            css: __assign(__assign({ overflow: 'hidden', zIndex: position3D.z, position: 'fixed', cursor: 'default', maxWidth: typeof maxWidth === 'string' ? maxWidth : this.defaultMaxWidth }, (typeof border === 'object'
                ? {
                    border: "".concat(border.size, "px solid ").concat(border.color),
                }
                : {})), (centerOnScreen
                ? {
                    transform: "translate(".concat(boundary.x === 'end' ? '50' : '-50', "%, ").concat(boundary.y === 'bottom' ? '50' : '-50', "%)"),
                }
                : {})),
            onClick: function (event, elm) {
                if (_this.clicked)
                    return;
                _this.clicked = true;
                if (typeof _this.onClick === 'function')
                    _this.onClick(event, elm, _this);
                if (_this.config.hideOnClick)
                    _this.destroy();
            },
        });
        if (boundary &&
            ['start', 'end'].includes(boundary.x) &&
            ['top', 'bottom'].includes(boundary.y)) {
            if (boundary.x === 'start')
                this.container.style.left = useVectorWithPercentage
                    ? "".concat(position3D.x, "%")
                    : String(position3D.x) + 'px';
            else
                this.container.style.right = useVectorWithPercentage
                    ? "".concat(position3D.x, "%")
                    : String(position3D.x) + 'px';
            if (boundary.y === 'top')
                this.container.style.top = useVectorWithPercentage
                    ? "".concat(position3D.y + len, "%")
                    : String(position3D.y + len) + 'px';
            else
                this.container.style.bottom = useVectorWithPercentage
                    ? "".concat(position3D.y, "%")
                    : String(position3D.y) + 'px';
        }
        this.container.style['-webkit-box-shadow'] = '2px 3px 5px 0px rgba(0,0,0,0.75)';
        this.container.style['-moz-box-shadow'] = '2px 3px 5px 0px rgba(0,0,0,0.75)';
        this.container.style['box-shadow'] = '2px 3px 5px 0px rgba(0,0,0,0.75)';
        var bg = this.config.background;
        var bgPaddingFix = bg.useVectorWithRem ? 'rem' : 'px';
        this.background = (0, html_1.generateHTML)({
            tag: 'div',
            css: __assign({ display: 'flex', gap: '1rem', alignItems: 'center', background: bg.color, padding: "".concat(bg.padding.y).concat(bgPaddingFix, " ").concat(bg.padding.x).concat(bgPaddingFix) }, (typeof bg.opacity === 'number'
                ? {
                    opacity: String(bg.opacity),
                }
                : {})),
        });
        var font = this.config.text;
        if (this.config.icon) {
            if (this.config.icon.type === 'innerHTML') {
                this.icon = document.createElement('span');
                if (typeof this.config.icon.source === 'string')
                    this.icon.innerHTML = this.config.icon.source;
            }
            else if (this.config.icon.source instanceof HTMLElement) {
                this.icon = this.config.icon.source;
            }
            if (this.icon instanceof HTMLElement) {
                this.icon.style.display = 'flex';
                this.icon.style.color = this.config.text.color;
                this.background.appendChild(this.icon);
            }
        }
        this.text = (0, html_1.generateHTML)({
            tag: 'p',
            css: __assign(__assign(__assign(__assign(__assign({}, (typeof font.font === 'string' ? { fontFamily: font.font } : {})), (typeof font.size === 'number' ? { fontSize: font.size.toString() } : {})), (typeof font.weight === 'string' ? { fontWeight: font.weight } : {})), (font.isItalic ? { fontStyle: 'italic' } : {})), { color: font.color }),
            textContent: this.message,
        });
        this.background.appendChild(this.text);
        this.container.appendChild(this.background);
        if (this.config.bar) {
            var bar_1 = this.config.bar;
            this.progressBar = (0, html_1.generateHTML)({
                tag: 'div',
                css: {
                    borderTop: "".concat(bar_1.height, "px solid ").concat(bar_1.color),
                    width: '100%',
                    position: 'absolute',
                    bottom: '0',
                    transition: "all ".concat(bar_1.time, "ms"),
                },
            });
            this.container.appendChild(this.progressBar);
            setTimeout(function () {
                _this.progressBar.style.transform = 'translateX(-105%)';
                setTimeout(function () {
                    _this.destroy();
                }, bar_1.time);
            }, 100);
        }
    };
    Toaster.prototype.show = function () {
        var _this = this;
        this.isOnScreen = true;
        this.container.style.opacity = '0';
        setTimeout(function () { return (_this.container.style.opacity = ''); }, 10);
        var elm = document.body.appendChild(this.container);
        this.anim.bounceInDown(elm);
    };
    Toaster.prototype.destroy = function () {
        var _this = this;
        return new Promise(function (resolve, _) {
            if (_this.container instanceof HTMLElement) {
                _this.anim.clean(_this.container);
                var outAnimation = function () {
                    return _this.config.container.outSide === 'bottom'
                        ? _this.anim.zoomOutDown(_this.container)
                        : _this.config.container.outSide === 'top'
                            ? _this.anim.zoomOutUp(_this.container)
                            : _this.config.container.outSide === 'end'
                                ? _this.anim.zoomOutEnd(_this.container)
                                : _this.anim.zoomOutStart(_this.container);
                };
                outAnimation().addEventOnCompletion(function () {
                    _this.container.remove();
                    if (typeof _this.onHide === 'function')
                        _this.onHide(_this);
                    _this.container = null;
                    _this.background = null;
                    _this.text = null;
                    _this.icon = null;
                    _this.progressBar = null;
                    _this.onClick = null;
                    _this.onHide = null;
                    _this.isOnScreen = false;
                    resolve(null);
                });
            }
        });
    };
    Toaster.prototype.listeners = function (onClickEvent, onHideEvent) {
        this.onClick = onClickEvent;
        this.onHide = onHideEvent;
        return this;
    };
    Toaster.prototype.root = function () {
        var _this = this;
        return {
            id: this.id,
            createdTime: this.createdTime,
            isOnScreen: this.isOnScreen,
            configureYourself: function () { return _this.configureYourself(); },
            show: function () { return _this.show(); },
            destroy: function () { return _this.destroy(); },
        };
    };
    return Toaster;
}());
exports.Toaster = Toaster;
//# sourceMappingURL=Toaster.js.map