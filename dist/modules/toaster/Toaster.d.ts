import { AnimationKassiopeiaTool } from '../animation/AnimationKassiopeiaTool';
import type { IToasterSpecificConfig } from './types';
export declare class Toaster {
    protected readonly message: string;
    protected readonly config: IToasterSpecificConfig;
    protected onClick: (event: Event, target: HTMLElement, context: Toaster) => void;
    protected onHide: (context: Toaster) => void;
    protected readonly anim: AnimationKassiopeiaTool;
    protected readonly id: string;
    protected readonly createdTime: Date;
    protected readonly defaultMaxWidth = "70vw";
    protected isOnScreen: boolean;
    protected container: HTMLElement;
    protected background: HTMLElement;
    protected text: HTMLSpanElement;
    protected icon: HTMLElement;
    protected progressBar: HTMLElement;
    protected clicked: boolean;
    constructor(message: string, config: IToasterSpecificConfig, onClick?: (event: Event, target: HTMLElement, context: Toaster) => void, onHide?: (context: Toaster) => void, anim?: AnimationKassiopeiaTool);
    protected configureYourself(): void;
    protected show(): void;
    protected destroy(): Promise<unknown>;
    listeners(onClickEvent?: typeof this.onClick, onHideEvent?: typeof this.onHide): Omit<Toaster, "listeners">;
    root(): {
        id: string;
        createdTime: Date;
        isOnScreen: boolean;
        configureYourself: () => void;
        show: () => void;
        destroy: () => Promise<unknown>;
    };
}
