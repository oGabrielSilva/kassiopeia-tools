"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationKassiopeiaTool = void 0;
var html_1 = require("../html");
var AnimationKassiopeiaTool = /** @class */ (function () {
    function AnimationKassiopeiaTool() {
        this.principalClassName = 'animate__animated';
        this.animateTemplate = 'animate__';
        this.animateCSS = (0, html_1.generateHTML)({
            tag: 'link',
            attributes: {
                rel: 'stylesheet',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
                'data-animation-kassiopeia-tool-style-element': '',
            },
        });
    }
    AnimationKassiopeiaTool.prototype.configure = function () {
        document.head.appendChild(this.animateCSS);
    };
    AnimationKassiopeiaTool.prototype.byAnimateCSS = function (element, animationName, time) {
        var _this = this;
        element.style.animationDuration = time + 'ms';
        setTimeout(function () {
            element.classList.add(_this.principalClassName);
            element.classList.add("".concat(_this.animateTemplate).concat(animationName));
        }, 1);
    };
    AnimationKassiopeiaTool.prototype.cleanAnimateCSS = function (element, animationName, event) {
        if (event && typeof event === 'function')
            event();
        element.classList.remove(this.principalClassName);
        element.classList.remove("".concat(this.animateTemplate).concat(animationName));
    };
    AnimationKassiopeiaTool.prototype.causeFocus = function (element) {
        var _a;
        element.focus();
        if (!(element instanceof HTMLInputElement)) {
            (_a = element.querySelector('input')) === null || _a === void 0 ? void 0 : _a.focus();
        }
    };
    AnimationKassiopeiaTool.prototype.clean = function (element) {
        var _this = this;
        element.classList.remove(this.principalClassName);
        element.classList.forEach(function (c) {
            if (c.startsWith(_this.animateTemplate))
                element.classList.remove(c);
        });
    };
    AnimationKassiopeiaTool.prototype.bounce = function (element, focus, time) {
        if (focus === void 0) { focus = true; }
        if (time === void 0) { time = 810; }
        if (element instanceof HTMLElement) {
            this.clean(element);
            var animationName = 'bounce';
            if (focus)
                this.causeFocus(element);
            this.byAnimateCSS(element, animationName, time);
            var onComplete_1 = function () { };
            setTimeout(function () {
                onComplete_1();
            }, time - 10);
            return { addEventOnCompletion: function (cb) { return (onComplete_1 = cb); } };
        }
    };
    AnimationKassiopeiaTool.prototype.bounceInDown = function (element, focus, time) {
        if (focus === void 0) { focus = true; }
        if (time === void 0) { time = 810; }
        if (element instanceof HTMLElement) {
            this.clean(element);
            var animationName = 'bounceInDown';
            if (focus)
                this.causeFocus(element);
            this.byAnimateCSS(element, animationName, time);
            var onComplete_2 = function () { };
            setTimeout(function () {
                onComplete_2();
            }, time - 10);
            return { addEventOnCompletion: function (cb) { return (onComplete_2 = cb); } };
        }
    };
    AnimationKassiopeiaTool.prototype.flash = function (element, focus, time) {
        if (focus === void 0) { focus = true; }
        if (time === void 0) { time = 810; }
        if (element instanceof HTMLElement) {
            this.clean(element);
            var animationName = 'flash';
            if (focus)
                this.causeFocus(element);
            this.byAnimateCSS(element, animationName, time);
            var onComplete_3 = function () { };
            setTimeout(function () {
                onComplete_3();
            }, time - 10);
            return { addEventOnCompletion: function (cb) { return (onComplete_3 = cb); } };
        }
    };
    AnimationKassiopeiaTool.prototype.shakeX = function (element, focus, time) {
        if (focus === void 0) { focus = true; }
        if (time === void 0) { time = 810; }
        if (element instanceof HTMLElement) {
            this.clean(element);
            var animationName = 'shakeX';
            if (focus)
                this.causeFocus(element);
            this.byAnimateCSS(element, animationName, time);
            var onComplete_4 = function () { };
            setTimeout(function () {
                onComplete_4();
            }, time - 10);
            return { addEventOnCompletion: function (cb) { return (onComplete_4 = cb); } };
        }
    };
    AnimationKassiopeiaTool.prototype.shakeY = function (element, focus, time) {
        if (focus === void 0) { focus = true; }
        if (time === void 0) { time = 810; }
        if (element instanceof HTMLElement) {
            this.clean(element);
            var animationName = 'shakeY';
            if (focus)
                this.causeFocus(element);
            this.byAnimateCSS(element, animationName, time);
            var onComplete_5 = function () { };
            setTimeout(function () {
                onComplete_5();
            }, time - 10);
            return { addEventOnCompletion: function (cb) { return (onComplete_5 = cb); } };
        }
    };
    AnimationKassiopeiaTool.prototype.heartBeat = function (element, focus, time) {
        if (focus === void 0) { focus = true; }
        if (time === void 0) { time = 810; }
        if (element instanceof HTMLElement) {
            this.clean(element);
            var animationName = 'heartBeat';
            if (focus)
                this.causeFocus(element);
            this.byAnimateCSS(element, animationName, time);
            var onComplete_6 = function () { };
            setTimeout(function () {
                onComplete_6();
            }, time - 10);
            return { addEventOnCompletion: function (cb) { return (onComplete_6 = cb); } };
        }
    };
    AnimationKassiopeiaTool.prototype.backInDown = function (element, focus, time) {
        if (focus === void 0) { focus = true; }
        if (time === void 0) { time = 810; }
        if (element instanceof HTMLElement) {
            this.clean(element);
            var animationName = 'backInDown';
            if (focus)
                this.causeFocus(element);
            this.byAnimateCSS(element, animationName, time);
            var onComplete_7 = function () { };
            setTimeout(function () {
                onComplete_7();
            }, time - 10);
            return { addEventOnCompletion: function (cb) { return (onComplete_7 = cb); } };
        }
    };
    AnimationKassiopeiaTool.prototype.backInLeft = function (element, focus, time) {
        if (focus === void 0) { focus = true; }
        if (time === void 0) { time = 810; }
        if (element instanceof HTMLElement) {
            this.clean(element);
            var animationName = 'backInLeft';
            if (focus)
                this.causeFocus(element);
            this.byAnimateCSS(element, animationName, time);
            var onComplete_8 = function () { };
            setTimeout(function () {
                onComplete_8();
            }, time - 10);
            return { addEventOnCompletion: function (cb) { return (onComplete_8 = cb); } };
        }
    };
    AnimationKassiopeiaTool.prototype.backInRight = function (element, focus, time) {
        if (focus === void 0) { focus = true; }
        if (time === void 0) { time = 810; }
        if (element instanceof HTMLElement) {
            this.clean(element);
            var animationName = 'backInRight';
            if (focus)
                this.causeFocus(element);
            this.byAnimateCSS(element, animationName, time);
            var onComplete_9 = function () { };
            setTimeout(function () {
                onComplete_9();
            }, time - 10);
            return { addEventOnCompletion: function (cb) { return (onComplete_9 = cb); } };
        }
    };
    AnimationKassiopeiaTool.prototype.backInUp = function (element, focus, time) {
        if (focus === void 0) { focus = true; }
        if (time === void 0) { time = 810; }
        if (element instanceof HTMLElement) {
            this.clean(element);
            var animationName = 'backInUp';
            if (focus)
                this.causeFocus(element);
            this.byAnimateCSS(element, animationName, time);
            var onComplete_10 = function () { };
            setTimeout(function () {
                onComplete_10();
            }, time - 10);
            return { addEventOnCompletion: function (cb) { return (onComplete_10 = cb); } };
        }
    };
    AnimationKassiopeiaTool.prototype.zoomOutDown = function (element, focus, time) {
        if (focus === void 0) { focus = true; }
        if (time === void 0) { time = 810; }
        if (element instanceof HTMLElement) {
            this.clean(element);
            var animationName = 'zoomOutDown';
            if (focus)
                this.causeFocus(element);
            this.byAnimateCSS(element, animationName, time);
            var onComplete_11 = function () { };
            setTimeout(function () {
                onComplete_11();
            }, time - 10);
            return { addEventOnCompletion: function (cb) { return (onComplete_11 = cb); } };
        }
    };
    AnimationKassiopeiaTool.prototype.zoomOutUp = function (element, focus, time) {
        if (focus === void 0) { focus = true; }
        if (time === void 0) { time = 810; }
        if (element instanceof HTMLElement) {
            this.clean(element);
            var animationName = 'zoomOutUp';
            if (focus)
                this.causeFocus(element);
            this.byAnimateCSS(element, animationName, time);
            var onComplete_12 = function () { };
            setTimeout(function () {
                onComplete_12();
            }, time - 10);
            return { addEventOnCompletion: function (cb) { return (onComplete_12 = cb); } };
        }
    };
    AnimationKassiopeiaTool.prototype.zoomOutStart = function (element, focus, time) {
        if (focus === void 0) { focus = true; }
        if (time === void 0) { time = 810; }
        if (element instanceof HTMLElement) {
            this.clean(element);
            var animationName = 'zoomOutLeft';
            if (focus)
                this.causeFocus(element);
            this.byAnimateCSS(element, animationName, time);
            var onComplete_13 = function () { };
            setTimeout(function () {
                onComplete_13();
            }, time - 10);
            return { addEventOnCompletion: function (cb) { return (onComplete_13 = cb); } };
        }
    };
    AnimationKassiopeiaTool.prototype.zoomOutEnd = function (element, focus, time) {
        if (focus === void 0) { focus = true; }
        if (time === void 0) { time = 810; }
        if (element instanceof HTMLElement) {
            this.clean(element);
            var animationName = 'zoomOutRight';
            if (focus)
                this.causeFocus(element);
            this.byAnimateCSS(element, animationName, time);
            var onComplete_14 = function () { };
            setTimeout(function () {
                onComplete_14();
            }, time - 10);
            return { addEventOnCompletion: function (cb) { return (onComplete_14 = cb); } };
        }
    };
    AnimationKassiopeiaTool.prototype.otherAnimationByName = function (element, name, focus, time) {
        if (focus === void 0) { focus = true; }
        if (time === void 0) { time = 810; }
        this.clean(element);
        if (element instanceof HTMLElement) {
            if (focus)
                this.causeFocus(element);
            var animationName = name.replace('animate__', '');
            this.byAnimateCSS(element, animationName, time);
            var onComplete_15 = function () { };
            setTimeout(function () {
                onComplete_15();
            }, time - 10);
            return { addEventOnCompletion: function (cb) { return (onComplete_15 = cb); } };
        }
    };
    AnimationKassiopeiaTool.prototype.destroy = function () {
        this.animateCSS.remove();
    };
    AnimationKassiopeiaTool.prototype.rebuild = function () {
        this.configure();
    };
    AnimationKassiopeiaTool.get = function () {
        if (!(AnimationKassiopeiaTool.instance instanceof AnimationKassiopeiaTool)) {
            AnimationKassiopeiaTool.instance = new AnimationKassiopeiaTool();
            AnimationKassiopeiaTool.instance.configure();
            console.log("Kassiopeia Tools' animation module uses Animate.css - See more at https://animate.style");
        }
        return AnimationKassiopeiaTool.instance;
    };
    Object.defineProperty(AnimationKassiopeiaTool, "fast", {
        get: function () {
            return AnimationKassiopeiaTool.get();
        },
        enumerable: false,
        configurable: true
    });
    AnimationKassiopeiaTool.instance = null;
    return AnimationKassiopeiaTool;
}());
exports.AnimationKassiopeiaTool = AnimationKassiopeiaTool;
//# sourceMappingURL=AnimationKassiopeiaTool.js.map