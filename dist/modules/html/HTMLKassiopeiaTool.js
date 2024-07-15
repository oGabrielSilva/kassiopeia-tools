"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLKassiopeiaTool = void 0;
var HTMLKassiopeiaTool = /** @class */ (function () {
    function HTMLKassiopeiaTool() {
    }
    HTMLKassiopeiaTool.prototype.generateHTML = function (options) {
        var _this = this;
        var tag = options.tag, attributes = options.attributes, css = options.css, onClick = options.onClick, textContent = options.textContent, children = options.children, innerHTML = options.innerHTML;
        var element = document.createElement(tag);
        element.dataset.byHtmlKassiopeiaTool = '';
        if (textContent) {
            element.textContent = typeof textContent === 'string' ? textContent : String(textContent);
        }
        if (innerHTML) {
            element.innerHTML = typeof innerHTML === 'string' ? innerHTML : String(innerHTML);
        }
        if (attributes && typeof attributes === 'object') {
            Object.keys(attributes).forEach(function (attr) {
                element.setAttribute(attr, attributes[attr]);
            });
        }
        if (css && typeof css === 'object') {
            Object.keys(css).forEach(function (cssKey) {
                element.style[cssKey] = String(css[cssKey]);
            });
        }
        if (onClick && typeof onClick === 'function')
            element.onclick = function (e) { return onClick(e, element); };
        if (children && Array.isArray(children)) {
            children.forEach(function (childOptions) {
                var child = _this.generateHTML(childOptions);
                element.appendChild(child);
            });
        }
        return element;
    };
    HTMLKassiopeiaTool.get = function () {
        if (!(HTMLKassiopeiaTool.instance instanceof HTMLKassiopeiaTool)) {
            HTMLKassiopeiaTool.instance = new HTMLKassiopeiaTool();
        }
        return HTMLKassiopeiaTool.instance;
    };
    Object.defineProperty(HTMLKassiopeiaTool, "fast", {
        get: function () {
            return HTMLKassiopeiaTool.get();
        },
        enumerable: false,
        configurable: true
    });
    HTMLKassiopeiaTool.instance = null;
    return HTMLKassiopeiaTool;
}());
exports.HTMLKassiopeiaTool = HTMLKassiopeiaTool;
//# sourceMappingURL=HTMLKassiopeiaTool.js.map