import { generateHTML } from '../html';

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

export class ScreenLocker {
  private static instance: ScreenLocker;

  private config: IScreenLockerConfig;

  private locker: HTMLElement | null = null;

  private styleElement: HTMLStyleElement;

  private configureLocker() {
    this.locker = generateHTML({
      tag: 'div',
      attributes: { 'data-nano': Date.now(), 'data-activated': 'true' },
      css: {
        opacity: this.config.opacity,
        background: this.config.background,
        zIndex: 99999,
        width: innerWidth + 'px',
        height: innerHeight + 'px',
        position: 'fixed',
        top: 0,
        left: 0,
        cursor: 'progress',
      },
    });
  }

  private configureBars() {
    this.config.bars.forEach(({ color, height, speed, width }) => {
      const bar = generateHTML({
        tag: 'div',
        css: {
          width: typeof width === 'string' ? width : width + 'px',
          borderTop: `${typeof height === 'string' ? height : height + 'px'} solid ${color}`,
          position: 'absolute',
          top: 0,
          animation: `anim-progress-screen-locker-bar ${speed}ms ease infinite`,
          left: '-' + (typeof width === 'number' ? width + 'px' : width),
        },
      });
      this.locker.appendChild(bar);
    });
  }

  private configureAnimationCSS() {
    this.styleElement = generateHTML({
      tag: 'style',
      innerHTML: `@keyframes anim-progress-screen-locker-bar { to { transform: translateX(calc(100vw + 100%)); } }`,
    });

    document.head.appendChild(this.styleElement);
  }

  public reset() {
    this.config = ScreenLocker.getDefaultConfig();
  }

  public configureTo(config: IScreenLockerConfig) {
    this.config = config;
  }

  public isLocked() {
    return this.locker !== null && document.body.contains(this.locker);
  }

  public lock() {
    this.configureLocker();

    this.configureBars();

    this.configureAnimationCSS();

    document.body.appendChild(this.locker);
  }

  public unlock() {
    this.locker.remove();
    this.locker = null;

    this.styleElement.remove();
    this.styleElement = null;
  }

  public static get() {
    if (!ScreenLocker.instance) ScreenLocker.instance = new ScreenLocker();

    return ScreenLocker.instance;
  }

  public static getDefaultConfig(): IScreenLockerConfig {
    return {
      background: '#000000',
      opacity: 0.8,
      bars: [
        { width: '35%', color: 'hsl(171, 100%, 41%)', height: 1, speed: 1500 },
        { width: '35%', color: 'hsl(171, 100%, 41%)', height: 1, speed: 1000 },
      ],
    };
  }
}
