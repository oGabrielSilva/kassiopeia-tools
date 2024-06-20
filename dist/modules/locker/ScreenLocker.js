"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenLocker = void 0;
var html_1 = require("../html");
var ScreenLocker = /** @class */ (function () {
    function ScreenLocker() {
        this.locker = null;
    }
    ScreenLocker.prototype.configureLocker = function () {
        this.locker = (0, html_1.generateHTML)({
            tag: 'div',
            attributes: { 'data-nano': Date.now(), 'data-activated': 'true' },
            css: {
                opacity: this.config.opacity,
                background: this.config.background,
                zIndex: 99999,
                width: innerWidth + 'px',
                height: innerHeight + 'px',
                position: 'fixed',
                top: 0,
                left: 0,
                cursor: 'progress',
            },
        });
    };
    ScreenLocker.prototype.configureBars = function () {
        var _this = this;
        this.config.bars.forEach(function (_a) {
            var color = _a.color, height = _a.height, speed = _a.speed, width = _a.width;
            var bar = (0, html_1.generateHTML)({
                tag: 'div',
                css: {
                    width: typeof width === 'string' ? width : width + 'px',
                    borderTop: "".concat(typeof height === 'string' ? height : height + 'px', " solid ").concat(color),
                    position: 'absolute',
                    top: 0,
                    animation: "anim-progress-screen-locker-bar ".concat(speed, "ms ease infinite"),
                    left: '-' + (typeof width === 'number' ? width + 'px' : width),
                },
            });
            _this.locker.appendChild(bar);
        });
    };
    ScreenLocker.prototype.configureAnimationCSS = function () {
        this.styleElement = (0, html_1.generateHTML)({
            tag: 'style',
            innerHTML: "@keyframes anim-progress-screen-locker-bar { to { transform: translateX(calc(100vw + 100%)); } }",
        });
        document.head.appendChild(this.styleElement);
    };
    ScreenLocker.prototype.reset = function () {
        this.config = ScreenLocker.getDefaultConfig();
    };
    ScreenLocker.prototype.configureTo = function (config) {
        this.config = config;
    };
    ScreenLocker.prototype.isLocked = function () {
        return this.locker !== null && document.body.contains(this.locker);
    };
    ScreenLocker.prototype.lock = function () {
        this.configureLocker();
        this.configureBars();
        this.configureAnimationCSS();
        document.body.appendChild(this.locker);
    };
    ScreenLocker.prototype.unlock = function () {
        this.locker.remove();
        this.locker = null;
        this.styleElement.remove();
        this.styleElement = null;
    };
    ScreenLocker.get = function () {
        if (!ScreenLocker.instance)
            ScreenLocker.instance = new ScreenLocker();
        return ScreenLocker.instance;
    };
    ScreenLocker.getDefaultConfig = function () {
        return {
            background: '#000000',
            opacity: 0.8,
            bars: [
                { width: '35%', color: 'hsl(171, 100%, 41%)', height: 1, speed: 1500 },
                { width: '35%', color: 'hsl(171, 100%, 41%)', height: 1, speed: 1000 },
            ],
        };
    };
    return ScreenLocker;
}());
exports.ScreenLocker = ScreenLocker;
//# sourceMappingURL=ScreenLocker.js.map