interface IScreenLockerBarConfig {
    width: string | number;
    color: string;
    speed: number;
    height: string | number;
}
interface IScreenLockerConfig {
    opacity: number;
    background: string;
    bars: IScreenLockerBarConfig[];
}
export declare class ScreenLocker {
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
    static get(): ScreenLocker;
    static getDefaultConfig(): IScreenLockerConfig;
}
export {};
