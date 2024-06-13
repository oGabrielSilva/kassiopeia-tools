"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KassiopeiaHtmlTool = void 0;
var KassiopeiaHtmlTool = /** @class */ (function () {
    function KassiopeiaHtmlTool() {
    }
    KassiopeiaHtmlTool.prototype.generateHTML = function (options) {
        var _this = this;
        var tag = options.tag, attributes = options.attributes, css = options.css, onClick = options.onClick, textContent = options.textContent, children = options.children, innerHTML = options.innerHTML;
        var element = document.createElement(tag);
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
    KassiopeiaHtmlTool.get = function () {
        if (!(KassiopeiaHtmlTool.instance instanceof KassiopeiaHtmlTool)) {
            KassiopeiaHtmlTool.instance = new KassiopeiaHtmlTool();
        }
        return KassiopeiaHtmlTool.instance;
    };
    KassiopeiaHtmlTool.instance = null;
    return KassiopeiaHtmlTool;
}());
exports.KassiopeiaHtmlTool = KassiopeiaHtmlTool;
//# sourceMappingURL=KassiopeiaHtmlTool.js.map