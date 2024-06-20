export interface IScreenLockerBarConfig {
    width: string | number;
    color: string;
    speed: number;
    height: string | number;
}
export interface IScreenLockerConfig {
    opacity: number;
    background: string;
    bars: IScreenLockerBarConfig[];
}
export declare class ScreenLockerKassiopeiaTool {
    private static instance;
    private config;
    private locker;
    private styleElement;
    private configureLocker;
    private configureBars;
    private configureAnimationCSS;
    reset(): void;
    configureTo(config: IScreenLockerConfig): void;
    isLocked(): boolean;
    lock(): void;
    unlock(): void;
    static get(): ScreenLockerKassiopeiaTool;
    static getDefaultConfig(): IScreenLockerConfig;
}
