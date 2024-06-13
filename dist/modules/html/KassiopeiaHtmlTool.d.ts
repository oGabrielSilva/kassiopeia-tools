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
export declare class KassiopeiaHtmlTool {
    protected static instance: KassiopeiaHtmlTool;
    generateHTML<T = HTMLElement>(options: IGen): T;
    static get(): KassiopeiaHtmlTool;
}
