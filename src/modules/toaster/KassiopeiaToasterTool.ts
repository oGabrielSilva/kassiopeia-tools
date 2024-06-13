import { KassiopeiaAnimationTool } from '../animation/KassiopeiaAnimationTool';
import { Toaster } from './Toaster';
import { Vec2D } from './Vec2D';
import { Vec3D } from './Vec3D';
import { dangerIcon } from './icons/danger';
import { infoIcon } from './icons/info';
import { successIcon } from './icons/success';
import { warnIcon } from './icons/warn';
import type { IToasterConfig, IToasterCustomConfig, IToasterSpecificConfig } from './types';

export class KassiopeiaToasterTool {
  protected static instance: KassiopeiaToasterTool = null;
  public static readonly toasters: Toaster[] = [];

  public readonly animationTool = KassiopeiaAnimationTool.get();
  protected config;

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

  public destroyInstance() {
    KassiopeiaToasterTool.toasters.forEach((toaster) => toaster.root().destroy());
    KassiopeiaToasterTool.instance = null;
  }

  protected createToaster(
    message: string,
    config: IToasterSpecificConfig,
    timeInMilliseconds?: number
  ) {
    const toaster = new Toaster(
      message,
      {
        background: config.background,
        bar: {
          ...config.bar,
          ...(timeInMilliseconds && typeof timeInMilliseconds === 'number'
            ? { time: timeInMilliseconds }
            : {}),
        },
        hideOnClick: config.hideOnClick,
        icon: config.icon,
        text: config.text,
        container: config.container,
      },
      () => null,
      () => null,
      this.animationTool
    );
    KassiopeiaToasterTool.toasters.push(toaster);

    toaster.root().configureYourself();
    toaster.root().show();

    return toaster;
  }

  public info(message = '', timeInMilliseconds?: number) {
    return this.createToaster(
      message,
      {
        background: this.config.background.info,
        bar: this.config.progressBar.info,
        hideOnClick: this.config.hideOnClick,
        icon: this.config.icon.info,
        text: this.config.text.info,
        container: this.config.container,
      },
      timeInMilliseconds
    );
  }

  public success(message = '', timeInMilliseconds?: number) {
    return this.createToaster(
      message,
      {
        background: this.config.background.success,
        bar: this.config.progressBar.success,
        hideOnClick: this.config.hideOnClick,
        icon: this.config.icon.success,
        text: this.config.text.success,
        container: this.config.container,
      },
      timeInMilliseconds
    );
  }

  public danger(message = '', timeInMilliseconds?: number) {
    return this.createToaster(
      message,
      {
        background: this.config.background.danger,
        bar: this.config.progressBar.danger,
        hideOnClick: this.config.hideOnClick,
        icon: this.config.icon.danger,
        text: this.config.text.danger,
        container: this.config.container,
      },
      timeInMilliseconds
    );
  }

  public warn(message = '', timeInMilliseconds?: number) {
    return this.createToaster(
      message,
      {
        background: this.config.background.warn,
        bar: this.config.progressBar.warn,
        hideOnClick: this.config.hideOnClick,
        icon: this.config.icon.warn,
        text: this.config.text.warn,
        container: this.config.container,
      },
      timeInMilliseconds
    );
  }

  public customToaster(message: string, conf: IToasterCustomConfig, timeInMilliseconds?: number) {
    return this.createToaster(
      message,
      {
        background: conf.background,
        bar: conf.progressBar,
        hideOnClick: conf.hideOnClick,
        icon: conf.icon,
        text: conf.text,
        container: conf.container,
      },
      timeInMilliseconds
    );
  }

  public changeConfig(conf: IToasterConfig) {
    this.config = conf;
  }

  public static defaultConfiguration(): IToasterConfig {
    return {
      container: {
        position3D: Vec3D.of(5, 5, 999),
        useVectorWithPercentage: true,
        centerOnScreen: false,
        boundary: { x: 'end', y: 'top' },
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
        info: { color: '#ffffff', height: 2, time: 10000 },
        success: { color: '#f9f9f9', height: 2, time: 10000 },
        danger: { color: '#f5f5f5', height: 2, time: 10000 },
        warn: { color: '#1c2003', height: 2, time: 10000 },
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
