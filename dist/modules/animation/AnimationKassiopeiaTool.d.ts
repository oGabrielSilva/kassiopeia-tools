export declare class AnimationKassiopeiaTool {
    protected static instance: AnimationKassiopeiaTool;
    protected readonly principalClassName = "animate__animated";
    protected readonly animateTemplate = "animate__";
    protected readonly animateCSS: HTMLElement;
    protected configure(): void;
    protected byAnimateCSS(element: HTMLElement, animationName: string, time: number): void;
    protected cleanAnimateCSS(element: HTMLElement, animationName: string, event?: () => void): void;
    clean(element: HTMLElement): void;
    bounce(element: HTMLElement, focus?: boolean, time?: number): {
        addEventOnCompletion: (cb: () => void) => () => void;
    };
    bounceInDown(element: HTMLElement, focus?: boolean, time?: number): {
        addEventOnCompletion: (cb: () => void) => () => void;
    };
    flash(element: HTMLElement, focus?: boolean, time?: number): {
        addEventOnCompletion: (cb: () => void) => () => void;
    };
    shakeX(element: HTMLElement, focus?: boolean, time?: number): {
        addEventOnCompletion: (cb: () => void) => () => void;
    };
    shakeY(element: HTMLElement, focus?: boolean, time?: number): {
        addEventOnCompletion: (cb: () => void) => () => void;
    };
    heartBeat(element: HTMLElement, focus?: boolean, time?: number): {
        addEventOnCompletion: (cb: () => void) => () => void;
    };
    backInDown(element: HTMLElement, focus?: boolean, time?: number): {
        addEventOnCompletion: (cb: () => void) => () => void;
    };
    backInLeft(element: HTMLElement, focus?: boolean, time?: number): {
        addEventOnCompletion: (cb: () => void) => () => void;
    };
    backInRight(element: HTMLElement, focus?: boolean, time?: number): {
        addEventOnCompletion: (cb: () => void) => () => void;
    };
    backInUp(element: HTMLElement, focus?: boolean, time?: number): {
        addEventOnCompletion: (cb: () => void) => () => void;
    };
    zoomOutDown(element: HTMLElement, focus?: boolean, time?: number): {
        addEventOnCompletion: (cb: () => void) => () => void;
    };
    zoomOutUp(element: HTMLElement, focus?: boolean, time?: number): {
        addEventOnCompletion: (cb: () => void) => () => void;
    };
    zoomOutStart(element: HTMLElement, focus?: boolean, time?: number): {
        addEventOnCompletion: (cb: () => void) => () => void;
    };
    zoomOutEnd(element: HTMLElement, focus?: boolean, time?: number): {
        addEventOnCompletion: (cb: () => void) => () => void;
    };
    otherAnimationByName(element: HTMLElement, name: string, focus?: boolean, time?: number): {
        addEventOnCompletion: (cb: () => void) => () => void;
    };
    destroy(): void;
    rebuild(): void;
    static get(): AnimationKassiopeiaTool;
}
