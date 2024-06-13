"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KassiopeiaAnimationTool = void 0;
var html_1 = require("../html");
var KassiopeiaAnimationTool = /** @class */ (function () {
    function KassiopeiaAnimationTool() {
        this.principalClassName = 'animate__animated';
        this.animateTemplate = 'animate__';
        this.animateCSS = (0, html_1.generateHTML)({
            tag: 'link',
            attributes: {
                rel: 'stylesheet',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
            },
        });
    }
    KassiopeiaAnimationTool.prototype.configure = function () {
        document.head.appendChild(this.animateCSS);
    };
    KassiopeiaAnimationTool.prototype.byAnimateCSS = function (element, animationName, time) {
        element.style.animationDuration = time + 'ms';
        element.classList.add(this.principalClassName);
        element.classList.add("".concat(this.animateTemplate).concat(animationName));
    };
    KassiopeiaAnimationTool.prototype.cleanAnimateCSS = function (element, animationName, event) {
        if (event && typeof event === 'function')
            event();
        element.classList.remove(this.principalClassName);
        element.classList.remove("".concat(this.animateTemplate).concat(animationName));
    };
    KassiopeiaAnimationTool.prototype.clean = function (element) {
        var _this = this;
        if (element.classList.contains(this.principalClassName)) {
            element.classList.remove(this.principalClassName);
            element.classList.forEach(function (c) {
                if (c.startsWith(_this.animateTemplate))
                    element.classList.remove(c);
            });
        }
    };
    KassiopeiaAnimationTool.prototype.bounce = function (element, focus, time) {
        if (focus === void 0) { focus = true; }
        if (time === void 0) { time = 1010; }
        if (element instanceof HTMLElement) {
            this.clean(element);
            var animationName = 'bounce';
            if (focus)
                element.focus();
            this.byAnimateCSS(element, animationName, time);
            var onComplete_1 = function () { };
            setTimeout(function () {
                onComplete_1();
            }, time - 10);
            return { addEventOnCompletion: function (cb) { return (onComplete_1 = cb); } };
        }
    };
    KassiopeiaAnimationTool.prototype.bounceInDown = function (element, focus, time) {
        if (focus === void 0) { focus = true; }
        if (time === void 0) { time = 1010; }
        if (element instanceof HTMLElement) {
            this.clean(element);
            var animationName = 'bounceInDown';
            if (focus)
                element.focus();
            this.byAnimateCSS(element, animationName, time);
            var onComplete_2 = function () { };
            setTimeout(function () {
                onComplete_2();
            }, time - 10);
            return { addEventOnCompletion: function (cb) { return (onComplete_2 = cb); } };
        }
    };
    KassiopeiaAnimationTool.prototype.flash = function (element, focus, time) {
        if (focus === void 0) { focus = true; }
        if (time === void 0) { time = 1010; }
        if (element instanceof HTMLElement) {
            this.clean(element);
            var animationName = 'flash';
            if (focus)
                element.focus();
            this.byAnimateCSS(element, animationName, time);
            var onComplete_3 = function () { };
            setTimeout(function () {
                onComplete_3();
            }, time - 10);
            return { addEventOnCompletion: function (cb) { return (onComplete_3 = cb); } };
        }
    };
    KassiopeiaAnimationTool.prototype.shakeX = function (element, focus, time) {
        if (focus === void 0) { focus = true; }
        if (time === void 0) { time = 1010; }
        if (element instanceof HTMLElement) {
            this.clean(element);
            var animationName = 'shakeX';
            if (focus)
                element.focus();
            this.byAnimateCSS(element, animationName, time);
            var onComplete_4 = function () { };
            setTimeout(function () {
                onComplete_4();
            }, time - 10);
            return { addEventOnCompletion: function (cb) { return (onComplete_4 = cb); } };
        }
    };
    KassiopeiaAnimationTool.prototype.shakeY = function (element, focus, time) {
        if (focus === void 0) { focus = true; }
        if (time === void 0) { time = 1010; }
        if (element instanceof HTMLElement) {
            this.clean(element);
            var animationName = 'shakeY';
            if (focus)
                element.focus();
            this.byAnimateCSS(element, animationName, time);
            var onComplete_5 = function () { };
            setTimeout(function () {
                onComplete_5();
            }, time - 10);
            return { addEventOnCompletion: function (cb) { return (onComplete_5 = cb); } };
        }
    };
    KassiopeiaAnimationTool.prototype.heartBeat = function (element, focus, time) {
        if (focus === void 0) { focus = true; }
        if (time === void 0) { time = 1010; }
        if (element instanceof HTMLElement) {
            this.clean(element);
            var animationName = 'heartBeat';
            if (focus)
                element.focus();
            this.byAnimateCSS(element, animationName, time);
            var onComplete_6 = function () { };
            setTimeout(function () {
                onComplete_6();
            }, time - 10);
            return { addEventOnCompletion: function (cb) { return (onComplete_6 = cb); } };
        }
    };
    KassiopeiaAnimationTool.prototype.backInDown = function (element, focus, time) {
        if (focus === void 0) { focus = true; }
        if (time === void 0) { time = 1010; }
        if (element instanceof HTMLElement) {
            this.clean(element);
            var animationName = 'backInDown';
            if (focus)
                element.focus();
            this.byAnimateCSS(element, animationName, time);
            var onComplete_7 = function () { };
            setTimeout(function () {
                onComplete_7();
            }, time - 10);
            return { addEventOnCompletion: function (cb) { return (onComplete_7 = cb); } };
        }
    };
    KassiopeiaAnimationTool.prototype.backInLeft = function (element, focus, time) {
        if (focus === void 0) { focus = true; }
        if (time === void 0) { time = 1010; }
        if (element instanceof HTMLElement) {
            this.clean(element);
            var animationName = 'backInLeft';
            if (focus)
                element.focus();
            this.byAnimateCSS(element, animationName, time);
            var onComplete_8 = function () { };
            setTimeout(function () {
                onComplete_8();
            }, time - 10);
            return { addEventOnCompletion: function (cb) { return (onComplete_8 = cb); } };
        }
    };
    KassiopeiaAnimationTool.prototype.backInRight = function (element, focus, time) {
        if (focus === void 0) { focus = true; }
        if (time === void 0) { time = 1010; }
        if (element instanceof HTMLElement) {
            this.clean(element);
            var animationName = 'backInRight';
            if (focus)
                element.focus();
            this.byAnimateCSS(element, animationName, time);
            var onComplete_9 = function () { };
            setTimeout(function () {
                onComplete_9();
            }, time - 10);
            return { addEventOnCompletion: function (cb) { return (onComplete_9 = cb); } };
        }
    };
    KassiopeiaAnimationTool.prototype.backInUp = function (element, focus, time) {
        if (focus === void 0) { focus = true; }
        if (time === void 0) { time = 1010; }
        if (element instanceof HTMLElement) {
            this.clean(element);
            var animationName = 'backInUp';
            if (focus)
                element.focus();
            this.byAnimateCSS(element, animationName, time);
            var onComplete_10 = function () { };
            setTimeout(function () {
                onComplete_10();
            }, time - 10);
            return { addEventOnCompletion: function (cb) { return (onComplete_10 = cb); } };
        }
    };
    KassiopeiaAnimationTool.prototype.zoomOutDown = function (element, focus, time) {
        if (focus === void 0) { focus = true; }
        if (time === void 0) { time = 1010; }
        if (element instanceof HTMLElement) {
            this.clean(element);
            var animationName = 'zoomOutDown';
            if (focus)
                element.focus();
            this.byAnimateCSS(element, animationName, time);
            var onComplete_11 = function () { };
            setTimeout(function () {
                onComplete_11();
            }, time - 10);
            return { addEventOnCompletion: function (cb) { return (onComplete_11 = cb); } };
        }
    };
    KassiopeiaAnimationTool.prototype.zoomOutUp = function (element, focus, time) {
        if (focus === void 0) { focus = true; }
        if (time === void 0) { time = 1010; }
        if (element instanceof HTMLElement) {
            this.clean(element);
            var animationName = 'zoomOutUp';
            if (focus)
                element.focus();
            this.byAnimateCSS(element, animationName, time);
            var onComplete_12 = function () { };
            setTimeout(function () {
                onComplete_12();
            }, time - 10);
            return { addEventOnCompletion: function (cb) { return (onComplete_12 = cb); } };
        }
    };
    KassiopeiaAnimationTool.prototype.zoomOutStart = function (element, focus, time) {
        if (focus === void 0) { focus = true; }
        if (time === void 0) { time = 1010; }
        if (element instanceof HTMLElement) {
            this.clean(element);
            var animationName = 'zoomOutLeft';
            if (focus)
                element.focus();
            this.byAnimateCSS(element, animationName, time);
            var onComplete_13 = function () { };
            setTimeout(function () {
                onComplete_13();
            }, time - 10);
            return { addEventOnCompletion: function (cb) { return (onComplete_13 = cb); } };
        }
    };
    KassiopeiaAnimationTool.prototype.zoomOutEnd = function (element, focus, time) {
        if (focus === void 0) { focus = true; }
        if (time === void 0) { time = 1010; }
        if (element instanceof HTMLElement) {
            this.clean(element);
            var animationName = 'zoomOutRight';
            if (focus)
                element.focus();
            this.byAnimateCSS(element, animationName, time);
            var onComplete_14 = function () { };
            setTimeout(function () {
                onComplete_14();
            }, time - 10);
            return { addEventOnCompletion: function (cb) { return (onComplete_14 = cb); } };
        }
    };
    KassiopeiaAnimationTool.prototype.otherAnimationByName = function (element, name, focus, time) {
        if (focus === void 0) { focus = true; }
        if (time === void 0) { time = 1010; }
        this.clean(element);
        if (element instanceof HTMLElement) {
            if (focus)
                element.focus();
            var animationName = name.replace('animate__', '');
            this.byAnimateCSS(element, animationName, time);
            var onComplete_15 = function () { };
            setTimeout(function () {
                onComplete_15();
            }, time - 10);
            return { addEventOnCompletion: function (cb) { return (onComplete_15 = cb); } };
        }
    };
    KassiopeiaAnimationTool.prototype.destroy = function () {
        this.animateCSS.remove();
    };
    KassiopeiaAnimationTool.prototype.rebuild = function () {
        this.configure();
    };
    KassiopeiaAnimationTool.get = function () {
        if (!(KassiopeiaAnimationTool.instance instanceof KassiopeiaAnimationTool)) {
            KassiopeiaAnimationTool.instance = new KassiopeiaAnimationTool();
            KassiopeiaAnimationTool.instance.configure();
            console.log("Kassiopeia Tools' animation module uses Animate.css - See more at https://animate.style");
        }
        return KassiopeiaAnimationTool.instance;
    };
    KassiopeiaAnimationTool.instance = null;
    return KassiopeiaAnimationTool;
}());
exports.KassiopeiaAnimationTool = KassiopeiaAnimationTool;
//# sourceMappingURL=KassiopeiaAnimationTool.js.map