import { KassiopeiaAnimationTool } from '../animation/KassiopeiaAnimationTool';
import { generateHTML } from '../html';
import { KassiopeiaToasterTool } from './KassiopeiaToasterTool';
import type { IToasterSpecificConfig } from './types';

export class Toaster {
  protected readonly id =
    Date.now().toString(36) + Date.now().toString() + Math.random().toString(36);
  protected readonly createdTime = new Date();

  protected readonly defaultMaxWidth = '70vw';

  protected isOnScreen = false;
  protected container: HTMLElement = null;
  protected background: HTMLElement = null;
  protected text: HTMLSpanElement = null;
  protected icon: HTMLElement = null;
  protected progressBar: HTMLElement = null;

  protected clicked = false;

  constructor(
    protected readonly message: string,
    protected readonly config: IToasterSpecificConfig,

    protected onClick: (event: Event, target: HTMLElement, context: Toaster) => void = null,
    protected onHide: (context: Toaster) => void = null,

    protected readonly anim = KassiopeiaAnimationTool.get()
  ) {}

  protected configureYourself() {
    const { useVectorWithPercentage, position3D, border, maxWidth, boundary, centerOnScreen } =
      this.config.container;

    let len = KassiopeiaToasterTool.toasters.filter(
      (toaster) =>
        toaster &&
        toaster.isOnScreen &&
        toaster.id !== this.id &&
        toaster.config.container.boundary.x === boundary.x &&
        toaster.config.container.boundary.y === boundary.y
    ).length;

    if (len > 0) len += 1;

    this.container = generateHTML({
      tag: 'div',
      css: {
        overflow: 'hidden',
        zIndex: position3D.z,
        position: 'fixed',
        cursor: 'default',
        maxWidth: typeof maxWidth === 'string' ? maxWidth : this.defaultMaxWidth,
        ...(typeof border === 'object'
          ? {
              border: `${border.size}px solid ${border.color}`,
            }
          : {}),

        ...(centerOnScreen
          ? {
              transform: `translate(${boundary.x === 'end' ? '50' : '-50'}%, ${
                boundary.y === 'bottom' ? '50' : '-50'
              }%)`,
            }
          : {}),
      },
      onClick: (event, elm) => {
        if (this.clicked) return;
        this.clicked = true;
        if (typeof this.onClick === 'function') this.onClick(event, elm, this);
        if (this.config.hideOnClick) this.destroy();
      },
    });

    if (
      boundary &&
      ['start', 'end'].includes(boundary.x) &&
      ['top', 'bottom'].includes(boundary.y)
    ) {
      if (boundary.x === 'start')
        this.container.style.left = useVectorWithPercentage
          ? `${position3D.x}%`
          : String(position3D.x) + 'px';
      else
        this.container.style.right = useVectorWithPercentage
          ? `${position3D.x}%`
          : String(position3D.x) + 'px';

      if (boundary.y === 'top')
        this.container.style.top = useVectorWithPercentage
          ? `${position3D.y + len}%`
          : String(position3D.y + len) + 'px';
      else
        this.container.style.bottom = useVectorWithPercentage
          ? `${position3D.y}%`
          : String(position3D.y) + 'px';
    }

    (this.container.style as any)['-webkit-box-shadow'] = '2px 3px 5px 0px rgba(0,0,0,0.75)';
    (this.container.style as any)['-moz-box-shadow'] = '2px 3px 5px 0px rgba(0,0,0,0.75)';
    (this.container.style as any)['box-shadow'] = '2px 3px 5px 0px rgba(0,0,0,0.75)';

    const bg = this.config.background;

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

    const font = this.config.text;

    if (this.config.icon) {
      if (this.config.icon.type === 'innerHTML') {
        this.icon = document.createElement('span');

        if (typeof this.config.icon.source === 'string')
          this.icon.innerHTML = this.config.icon.source as string;
      } else if (this.config.icon.source instanceof HTMLElement) {
        this.icon = this.config.icon.source;
      }

      if (this.icon instanceof HTMLElement) {
        this.icon.style.display = 'flex';
        this.icon.style.color = this.config.text.color;
        this.background.appendChild(this.icon);
      }
    }

    this.text = generateHTML({
      tag: 'p',
      css: {
        ...(typeof font.font === 'string' ? { fontFamily: font.font } : {}),
        ...(typeof font.size === 'number' ? { fontSize: font.size.toString() } : {}),
        ...(typeof font.weight === 'string' ? { fontWeight: font.weight } : {}),
        ...(font.isItalic ? { fontStyle: 'italic' } : {}),
        color: font.color,
      },
      textContent: this.message,
    });

    this.background.appendChild(this.text);
    this.container.appendChild(this.background);

    if (this.config.bar) {
      const bar = this.config.bar;

      this.progressBar = generateHTML({
        tag: 'div',
        css: {
          borderTop: `${bar.height}px solid ${bar.color}`,
          width: '100%',
          position: 'absolute',
          bottom: '0',
          transition: `all ${bar.time}ms`,
        },
      });

      this.container.appendChild(this.progressBar);

      setTimeout(() => {
        this.progressBar.style.transform = 'translateX(-105%)';
        setTimeout(() => {
          this.destroy();
        }, bar.time);
      }, 100);
    }
  }

  protected show() {
    this.isOnScreen = true;
    this.container.style.opacity = '0';

    setTimeout(() => (this.container.style.opacity = ''), 10);

    const elm = document.body.appendChild(this.container);

    this.anim.bounceInDown(elm);
  }

  protected destroy() {
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
          if (typeof this.onHide === 'function') this.onHide(this);

          this.container = null;
          this.background = null;
          this.text = null;
          this.icon = null;
          this.progressBar = null;

          this.onClick = null;
          this.onHide = null;

          this.isOnScreen = false;
          resolve(null);
        });
      }
    });
  }

  public listeners(onClickEvent?: typeof this.onClick, onHideEvent?: typeof this.onHide) {
    this.onClick = onClickEvent;
    this.onHide = onHideEvent;
    return this as Omit<Toaster, 'listeners'>;
  }

  public root() {
    return {
      id: this.id,
      createdTime: this.createdTime,
      isOnScreen: this.isOnScreen,

      configureYourself: () => this.configureYourself(),

      show: () => this.show(),

      destroy: () => this.destroy(),
    };
  }
}
