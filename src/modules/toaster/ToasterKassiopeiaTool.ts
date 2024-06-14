import { AnimationKassiopeiaTool } from '../animation/AnimationKassiopeiaTool';
import { Toaster } from './Toaster';
import { Vec2D } from './Vec2D';
import { Vec3D } from './Vec3D';
import { dangerIcon } from './icons/danger';
import { infoIcon } from './icons/info';
import { successIcon } from './icons/success';
import { warnIcon } from './icons/warn';
import type { IToasterConfig, IToasterCustomConfig, IToasterSpecificConfig } from './types';

export class ToasterKassiopeiaTool {
  protected static instance: ToasterKassiopeiaTool = null;
  public static readonly toasters: Toaster[] = [];

  public readonly animationTool = AnimationKassiopeiaTool.get();
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
   * const toaster = new ToasterKassiopeiaTool(config);
   *
   * // Recommended usage
   * const toaster = ToasterKassiopeiaTool.get();
   *
   * //OR
   * const toaster = ToasterKassiopeiaTool.getConfigured(config);
   * ```
   */
  constructor(config: IToasterConfig) {
    this.config = config;
  }

  public destroyInstance() {
    ToasterKassiopeiaTool.toasters.forEach((toaster) => toaster.root().destroy());
    ToasterKassiopeiaTool.instance = null;
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
        ...(config.bar
          ? {
              bar: {
                ...config.bar,
                ...(timeInMilliseconds && typeof timeInMilliseconds === 'number'
                  ? { time: timeInMilliseconds }
                  : {}),
              },
            }
          : {}),
        hideOnClick: config.hideOnClick,
        icon: config.icon,
        text: config.text,
        container: config.container,
      },
      () => null,
      () => null,
      this.animationTool
    );
    ToasterKassiopeiaTool.toasters.push(toaster);

    toaster.root().configureYourself();
    toaster.root().show();

    return toaster;
  }

  public info(message = '', timeInMilliseconds?: number) {
    return this.createToaster(
      message,
      {
        background: this.config.background.info,
        hideOnClick: this.config.hideOnClick,
        text: this.config.text.info,
        container: this.config.container,
        ...(this.config.icon ? { icon: this.config.icon.info } : {}),
        ...(this.config.progressBar ? { bar: this.config.progressBar.info } : {}),
      },
      timeInMilliseconds
    );
  }

  public success(message = '', timeInMilliseconds?: number) {
    return this.createToaster(
      message,
      {
        background: this.config.background.success,
        hideOnClick: this.config.hideOnClick,
        text: this.config.text.success,
        container: this.config.container,
        ...(this.config.icon ? { icon: this.config.icon.success } : {}),
        ...(this.config.progressBar ? { bar: this.config.progressBar.success } : {}),
      },
      timeInMilliseconds
    );
  }

  public danger(message = '', timeInMilliseconds?: number) {
    return this.createToaster(
      message,
      {
        background: this.config.background.danger,
        hideOnClick: this.config.hideOnClick,
        text: this.config.text.danger,
        container: this.config.container,
        ...(this.config.icon ? { icon: this.config.icon.danger } : {}),
        ...(this.config.progressBar ? { bar: this.config.progressBar.danger } : {}),
      },
      timeInMilliseconds
    );
  }

  public warn(message = '', timeInMilliseconds?: number) {
    return this.createToaster(
      message,
      {
        background: this.config.background.warn,
        hideOnClick: this.config.hideOnClick,
        text: this.config.text.warn,
        container: this.config.container,
        ...(this.config.icon ? { icon: this.config.icon.warn } : {}),
        ...(this.config.progressBar ? { bar: this.config.progressBar.warn } : {}),
      },
      timeInMilliseconds
    );
  }

  public customToaster(message: string, conf: IToasterCustomConfig, timeInMilliseconds?: number) {
    return this.createToaster(
      message,
      {
        background: conf.background,

        hideOnClick: conf.hideOnClick,
        text: conf.text,
        container: conf.container,
        ...(this.config.icon ? { icon: conf.icon } : {}),
        ...(this.config.progressBar ? { bar: conf.progressBar } : {}),
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
        info: { source: infoIcon('#ffffff'), type: 'innerHTML' },
        success: { source: successIcon('#f9f9f9'), type: 'innerHTML' },
        danger: { source: dangerIcon('#f5f5f5'), type: 'innerHTML' },
        warn: { source: warnIcon('#1c2003'), type: 'innerHTML' },
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
    if (!ToasterKassiopeiaTool.instance) {
      ToasterKassiopeiaTool.instance = new ToasterKassiopeiaTool(
        ToasterKassiopeiaTool.defaultConfiguration()
      );
    }

    ToasterKassiopeiaTool.instance.changeConfig(ToasterKassiopeiaTool.defaultConfiguration());
    return ToasterKassiopeiaTool.instance;
  }

  public static getConfigured(config: IToasterConfig) {
    const instance = ToasterKassiopeiaTool.get();
    instance.config = config;
    return instance;
  }
}
