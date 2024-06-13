import { AnimationKassiopeiaTool } from '../animation/AnimationKassiopeiaTool';
import { Toaster } from './Toaster';
import type { IToasterConfig, IToasterCustomConfig, IToasterSpecificConfig } from './types';
export declare class ToasterKassiopeiaTool {
    protected static instance: ToasterKassiopeiaTool;
    static readonly toasters: Toaster[];
    readonly animationTool: AnimationKassiopeiaTool;
    protected config: IToasterConfig;
    /**
     * @deprecated This constructor is deprecated.
     * Please use the static `get` or `getConfigured` method instead to create an instance.
     *
     * @param {IToasterConfig} config - The configuration object for the toaster.
     *
     * Example usage:
     * ```typescript
     * // Deprecated usage
     * const toaster = new ToasterKassiopeiaTool(config);
     *
     * // Recommended usage
     * const toaster = ToasterKassiopeiaTool.get();
     *
     * //OR
     * const toaster = ToasterKassiopeiaTool.getConfigured(config);
     * ```
     */
    constructor(config: IToasterConfig);
    destroyInstance(): void;
    protected createToaster(message: string, config: IToasterSpecificConfig, timeInMilliseconds?: number): Toaster;
    info(message?: string, timeInMilliseconds?: number): Toaster;
    success(message?: string, timeInMilliseconds?: number): Toaster;
    danger(message?: string, timeInMilliseconds?: number): Toaster;
    warn(message?: string, timeInMilliseconds?: number): Toaster;
    customToaster(message: string, conf: IToasterCustomConfig, timeInMilliseconds?: number): Toaster;
    changeConfig(conf: IToasterConfig): void;
    static defaultConfiguration(): IToasterConfig;
    static get(): ToasterKassiopeiaTool;
    static getConfigured(config: IToasterConfig): ToasterKassiopeiaTool;
}
