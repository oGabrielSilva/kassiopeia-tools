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
export declare class HTMLKassiopeiaTool {
    protected static instance: HTMLKassiopeiaTool;
    generateHTML<T = HTMLElement>(options: IHTMLGenerator): T;
    static get(): HTMLKassiopeiaTool;
    static get fast(): HTMLKassiopeiaTool;
}
