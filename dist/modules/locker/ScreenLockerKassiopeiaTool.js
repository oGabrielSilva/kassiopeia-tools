"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenLockerKassiopeiaTool = void 0;
var html_1 = require("../html");
var ScreenLockerKassiopeiaTool = /** @class */ (function () {
    function ScreenLockerKassiopeiaTool() {
        this.locker = null;
    }
    ScreenLockerKassiopeiaTool.prototype.configureLocker = function () {
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
    ScreenLockerKassiopeiaTool.prototype.configureBars = function () {
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
    ScreenLockerKassiopeiaTool.prototype.configureAnimationCSS = function () {
        this.styleElement = (0, html_1.generateHTML)({
            tag: 'style',
            innerHTML: "@keyframes anim-progress-screen-locker-bar { to { transform: translateX(calc(100vw + 100%)); } }",
        });
        document.head.appendChild(this.styleElement);
    };
    ScreenLockerKassiopeiaTool.prototype.reset = function () {
        this.config = ScreenLockerKassiopeiaTool.getDefaultConfig();
    };
    ScreenLockerKassiopeiaTool.prototype.configureTo = function (config) {
        this.config = config;
    };
    ScreenLockerKassiopeiaTool.prototype.isLocked = function () {
        return this.locker !== null && document.body.contains(this.locker);
    };
    ScreenLockerKassiopeiaTool.prototype.lock = function () {
        this.configureLocker();
        this.configureBars();
        this.configureAnimationCSS();
        document.body.appendChild(this.locker);
    };
    ScreenLockerKassiopeiaTool.prototype.unlock = function () {
        this.locker.remove();
        this.locker = null;
        this.styleElement.remove();
        this.styleElement = null;
    };
    ScreenLockerKassiopeiaTool.get = function () {
        if (!ScreenLockerKassiopeiaTool.instance)
            ScreenLockerKassiopeiaTool.instance = new ScreenLockerKassiopeiaTool();
        return ScreenLockerKassiopeiaTool.instance;
    };
    ScreenLockerKassiopeiaTool.getDefaultConfig = function () {
        return {
            background: '#000000',
            opacity: 0.8,
            bars: [
                { width: '35%', color: 'hsl(171, 100%, 41%)', height: 1, speed: 1500 },
                { width: '35%', color: 'hsl(171, 100%, 41%)', height: 1, speed: 1000 },
            ],
        };
    };
    return ScreenLockerKassiopeiaTool;
}());
exports.ScreenLockerKassiopeiaTool = ScreenLockerKassiopeiaTool;
//# sourceMappingURL=ScreenLockerKassiopeiaTool.js.map