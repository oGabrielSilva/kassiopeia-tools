import type * as CSS from 'csstype';

export interface IGen {
  tag: string;
  attributes?: Record<string, any>;
  textContent?: string;
  css?: CSS.Properties;
  onClick?: (event: Event, element: HTMLElement) => void;
  children?: IGen[];
  innerHTML?: string;
}

export class KassiopeiaHtmlTool {
  protected static instance: KassiopeiaHtmlTool = null;

  public generateHTML<T = HTMLElement>(options: IGen) {
    const { tag, attributes, css, onClick, textContent, children, innerHTML } = options;
    const element = document.createElement(tag);

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
    if (!(KassiopeiaHtmlTool.instance instanceof KassiopeiaHtmlTool)) {
      KassiopeiaHtmlTool.instance = new KassiopeiaHtmlTool();
    }
    return KassiopeiaHtmlTool.instance;
  }
}
