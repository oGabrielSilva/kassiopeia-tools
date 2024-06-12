import { KassiopeiaAnimationTool } from '../animation/KassiopeiaAnimationTool';
import { generateHTML } from '../html';
import { Vec2D } from './Vec2D';
import { Vec3D } from './Vec3D';
import { dangerIcon } from './icons/danger';
import { infoIcon } from './icons/info';
import { successIcon } from './icons/success';
import { warnIcon } from './icons/warn';
import type {
  IToasterBG,
  IToasterBar,
  IToasterConfig,
  IToasterCustomConfig,
  IToasterFont,
  IToasterIcon,
} from './types';

export class KassiopeiaToasterTool {
  protected static instance: KassiopeiaToasterTool = null;
  protected readonly defaultMaxWidth = '70vw';

  protected readonly anim = KassiopeiaAnimationTool.get();
  protected config;

  protected container: HTMLElement = null;
  protected background: HTMLElement = null;
  protected text: HTMLSpanElement = null;
  protected icon: HTMLElement = null;
  protected progressBar: HTMLElement = null;

  protected onClick: (e: Event, target: HTMLElement) => void = null;
  protected onHide: (e: Event) => void = null;

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
  constructor(config: IToasterConfig) {
    this.config = config;
  }

  protected configure(
    bg: IToasterBG,
    font: IToasterFont,
    icon: IToasterIcon,
    bar: IToasterBar,
    container?: IToasterConfig['container']
  ) {
    if (document.body.contains(this.container)) {
      this.destroy();
    }

    const { useVectorWithPercentage, vec, border, maxWidth, boundary, centerOnScreen } = container
      ? container
      : this.config.container;

    this.container = generateHTML({
      tag: 'div',
      css: {
        zIndex: vec.z,
        position: 'fixed',
        cursor: 'default',
        maxWidth: typeof maxWidth === 'string' ? maxWidth : this.defaultMaxWidth,
        ...(typeof border === 'object'
          ? {
              border: `${border.size}px solid ${border.color}`,
            }
          : {}),
        ...(boundary.x === 'start'
          ? {
              left: useVectorWithPercentage ? `${vec.x}%` : String(vec.x) + 'px',
            }
          : {
              right: useVectorWithPercentage ? `${vec.x}%` : String(vec.x) + 'px',
            }),
        ...(boundary.y === 'start'
          ? {
              top: useVectorWithPercentage ? `${vec.y}%` : String(vec.y) + 'px',
            }
          : {
              bottom: useVectorWithPercentage ? `${vec.y}%` : String(vec.y) + 'px',
            }),
        ...(centerOnScreen
          ? {
              transform: `translate(${boundary.x === 'end' ? '50' : '-50'}%, ${
                boundary.y === 'end' ? '50' : '-50'
              }%)`,
            }
          : {}),
      },
      onClick: (event, elm) => {
        if (typeof this.onClick === 'function') this.onClick(event, elm);
        if (this.config.hideOnClick) this.destroy();
      },
    });

    (this.container.style as any)['-webkit-box-shadow'] = '2px 3px 5px 0px rgba(0,0,0,0.75)';
    (this.container.style as any)['-moz-box-shadow'] = '2px 3px 5px 0px rgba(0,0,0,0.75)';
    (this.container.style as any)['box-shadow'] = '2px 3px 5px 0px rgba(0,0,0,0.75)';

    const bgPaddingFix = bg.useVectorWithRem ? 'rem' : 'px';
    this.background = generateHTML({
      tag: 'div',
      css: {
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        background: bg.color,
        padding: `${bg.padding.y}${bgPaddingFix} ${bg.padding.x}${bgPaddingFix}`,
        ...(typeof bg.opacity === 'number'
          ? {
              opacity: String(bg.opacity),
            }
          : {}),
      },
    });

    this.text = generateHTML({
      tag: 'p',
      css: {
        ...(typeof font.font === 'string' ? { fontFamily: font.font } : {}),
        ...(typeof font.size === 'number' ? { fontSize: font.size.toString() } : {}),
        ...(typeof font.weight === 'string' ? { fontWeight: font.weight } : {}),
        ...(font.isItalic ? { fontStyle: 'italic' } : {}),
        color: font.color,
      },
    });

    if (icon.type === 'innerHTML') {
      this.icon = document.createElement('div');
      this.icon.replaceWith(icon.source as string);
    } else if (icon.source instanceof HTMLElement) this.icon = icon.source;

    this.progressBar = generateHTML({
      tag: 'div',
      css: {
        borderTop: `${bar.height}px solid ${bar.color}`,
        width: '100%',
      },
    });

    if (this.icon instanceof HTMLElement) this.background.appendChild(this.icon);
    this.background.appendChild(this.text);
    this.container.appendChild(this.background);
    this.container.appendChild(this.progressBar);
  }

  protected updateBarAnimationTime(time: number) {
    if (time && this.progressBar instanceof HTMLElement)
      this.progressBar.style.animationDuration = time.toString() + 'ms';
  }

  protected show() {
    this.container.style.visibility = 'hidden';
    setTimeout(() => (this.container.style.visibility = ''), 10);
    document.body.appendChild(this.container);
    this.anim.backInDown(this.container);
  }

  protected async destroy() {
    return new Promise((resolve, _) => {
      if (this.container instanceof HTMLElement) {
        this.anim.clean(this.container);
        const outAnimation = () =>
          this.config.container.outSide === 'bottom'
            ? this.anim.zoomOutDown(this.container)
            : this.config.container.outSide === 'top'
            ? this.anim.zoomOutUp(this.container)
            : this.config.container.outSide === 'end'
            ? this.anim.zoomOutEnd(this.container)
            : this.anim.zoomOutStart(this.container);

        outAnimation().addEventOnCompletion(() => {
          this.container.remove();

          this.container = null;
          this.background = null;
          this.text = null;
          this.icon = null;
          this.progressBar = null;

          this.onClick = null;
          this.onHide = null;
          resolve(null);
        });
      }
    });
  }

  public destroyInstance() {
    this.destroy();
    KassiopeiaToasterTool.instance = null;
  }

  public info(message = '', timeInMilliseconds = 5000) {
    this.configure(
      this.config.background.info,
      this.config.text.info,
      this.config.icon.info,
      this.config.progressBar.info
    );
    this.text.textContent = message;

    this.updateBarAnimationTime(timeInMilliseconds);
    this.show();
  }

  public success(message = '', timeInMilliseconds = 5000) {
    this.configure(
      this.config.background.success,
      this.config.text.success,
      this.config.icon.success,
      this.config.progressBar.success
    );
    this.text.textContent = message;

    this.updateBarAnimationTime(timeInMilliseconds);
    this.show();
  }

  public danger(message = '', timeInMilliseconds = 5000) {
    this.configure(
      this.config.background.danger,
      this.config.text.danger,
      this.config.icon.danger,
      this.config.progressBar.danger
    );
    this.text.textContent = message;

    this.updateBarAnimationTime(timeInMilliseconds);
    this.show();
  }

  public warn(message = '', timeInMilliseconds = 5000) {
    this.configure(
      this.config.background.warn,
      this.config.text.warn,
      this.config.icon.warn,
      this.config.progressBar.warn
    );
    this.text.textContent = message;

    this.updateBarAnimationTime(timeInMilliseconds);
    this.show();
  }

  public customToaster(message: string, conf: IToasterCustomConfig, timeInMilliseconds = 5000) {
    this.configure(conf.background, conf.text, conf.icon, conf.progressBar, conf.container);

    this.text.textContent = message;

    this.updateBarAnimationTime(timeInMilliseconds);
    this.show();
  }

  public before() {
    const master = this;
    const payload = {
      addClickListener: (cb: typeof master.onClick) => {
        master.onClick = typeof cb === 'function' ? cb : null;
        return payload;
      },
      addHideEvent: (cb: typeof master.onHide) => {
        master.onHide = typeof cb === 'function' ? cb : null;
        return payload;
      },
      continue: () => ({
        customToaster: master.customToaster,
        warn: master.warn,
        danger: master.danger,
        info: master.info,
        success: master.success,
      }),
      root: () => master as KassiopeiaToasterTool,
    };

    return payload;
  }

  public changeConfig(conf: IToasterConfig) {
    this.config = conf;
  }

  public static defaultConfiguration(): IToasterConfig {
    return {
      container: {
        vec: Vec3D.of(5, 5, 999),
        useVectorWithPercentage: true,
        centerOnScreen: false,
        boundary: { x: 'end', y: 'start' },
        outSide: 'end',
      },
      background: {
        info: { color: '#3c48af', useVectorWithRem: true, padding: Vec2D.of(1, 1) },
        success: { color: '#3dbe41', useVectorWithRem: true, padding: Vec2D.of(1, 1) },
        danger: { color: '#ca4141', useVectorWithRem: true, padding: Vec2D.of(1, 1) },
        warn: { color: '#d1c717', useVectorWithRem: true, padding: Vec2D.of(1, 1) },
      },
      text: {
        info: { color: '#ffffff', size: 14, font: 'JetBrains Mono' },
        success: { color: '#f9f9f9', size: 14, font: 'JetBrains Mono' },
        danger: { color: '#f5f5f5', size: 14, font: 'JetBrains Mono' },
        warn: { color: '#1c2003', size: 14, font: 'JetBrains Mono' },
      },
      icon: {
        info: { source: infoIcon('#ffffff'), type: 'html' },
        success: { source: successIcon('#f9f9f9'), type: 'html' },
        danger: { source: dangerIcon('#f5f5f5'), type: 'html' },
        warn: { source: warnIcon('#1c2003'), type: 'html' },
      },
      progressBar: {
        info: { color: '#ffffff', height: 2 },
        success: { color: '#f9f9f9', height: 2 },
        danger: { color: '#f5f5f5', height: 2 },
        warn: { color: '#1c2003', height: 2 },
      },
      hideOnClick: true,
    };
  }

  public static get() {
    if (!KassiopeiaToasterTool.instance) {
      KassiopeiaToasterTool.instance = new KassiopeiaToasterTool(
        KassiopeiaToasterTool.defaultConfiguration()
      );
    }

    KassiopeiaToasterTool.instance.changeConfig(KassiopeiaToasterTool.defaultConfiguration());
    return KassiopeiaToasterTool.instance;
  }

  public static getConfigured(config: IToasterConfig) {
    const instance = KassiopeiaToasterTool.get();
    instance.config = config;
    return instance;
  }
}
