import type * as CSS from 'csstype';

export interface IHTMLGenerator {
  tag: string;
  attributes?: Record<string, any>;
  textContent?: string;
  css?: CSS.Properties;
  onClick?: (event: Event, element: HTMLElement) => void;
  children?: IHTMLGenerator[];
  innerHTML?: string;
}

export class HTMLKassiopeiaTool {
  protected static instance: HTMLKassiopeiaTool = null;

  public generateHTML<T = HTMLElement>(options: IHTMLGenerator) {
    const { tag, attributes, css, onClick, textContent, children, innerHTML } = options;
    const element = document.createElement(tag);

    element.dataset.byHtmlKassiopeiaTool = '';

    if (textContent) {
      element.textContent = typeof textContent === 'string' ? textContent : String(textContent);
    }

    if (innerHTML) {
      element.innerHTML = typeof innerHTML === 'string' ? innerHTML : String(innerHTML);
    }

    if (attributes && typeof attributes === 'object') {
      Object.keys(attributes).forEach((attr) => {
        element.setAttribute(attr, attributes[attr]);
      });
    }

    if (css && typeof css === 'object') {
      Object.keys(css).forEach((cssKey) => {
        element.style[cssKey as any] = String((css as any)[cssKey]);
      });
    }

    if (onClick && typeof onClick === 'function') element.onclick = (e) => onClick(e, element);

    if (children && Array.isArray(children)) {
      children.forEach((childOptions) => {
        const child = this.generateHTML(childOptions);
        element.appendChild(child);
      });
    }

    return element as T;
  }

  public static get() {
    if (!(HTMLKassiopeiaTool.instance instanceof HTMLKassiopeiaTool)) {
      HTMLKassiopeiaTool.instance = new HTMLKassiopeiaTool();
    }
    return HTMLKassiopeiaTool.instance;
  }
}
