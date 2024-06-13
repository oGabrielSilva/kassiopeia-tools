import { KassiopeiaAnimationTool } from '../animation/KassiopeiaAnimationTool';
import { Toaster } from './Toaster';
import type { IToasterConfig, IToasterCustomConfig, IToasterSpecificConfig } from './types';
export declare class KassiopeiaToasterTool {
    protected static instance: KassiopeiaToasterTool;
    static readonly toasters: Toaster[];
    readonly animationTool: KassiopeiaAnimationTool;
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
     * const toaster = new KassiopeiaToasterTool(config);
     *
     * // Recommended usage
     * const toaster = KassiopeiaToasterTool.get();
     *
     * //OR
     * const toaster = KassiopeiaToasterTool.getConfigured(config);
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
    static get(): KassiopeiaToasterTool;
    static getConfigured(config: IToasterConfig): KassiopeiaToasterTool;
}
