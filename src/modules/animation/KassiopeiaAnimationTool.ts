import { generateHTML } from '../html';
import { shakeCSS } from './cssString';

export class KassiopeiaAnimationTool {
  protected static instance: KassiopeiaAnimationTool = null;

  protected readonly principalClassName = 'animate__animated';
  protected readonly animateTemplate = 'animate__';

  protected readonly animateCSS = generateHTML({
    tag: 'link',
    attributes: {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
    },
  });

  protected cssHtmlShake: HTMLStyleElement = null;
  protected htmlShakeClassName = 'kassiopeia-anim-shake';

  //methods

  protected configureShake() {
    this.cssHtmlShake = generateHTML<HTMLStyleElement>({
      tag: 'style',
      innerHTML: shakeCSS,
    });

    document.head.appendChild(this.cssHtmlShake);
  }

  protected configure() {
    this.configureShake();
    document.head.appendChild(this.animateCSS);
  }

  protected byAnimateCSS(element: HTMLElement, animationName: string) {
    setTimeout(() => {
      element.classList.add(this.principalClassName);
      element.classList.add(`${this.animateTemplate}${animationName}`);
    }, 10);
  }

  protected cleanAnimateCSS(element: HTMLElement, animationName: string, event?: () => void) {
    if (event && typeof event === 'function') event();
    element.classList.remove(this.principalClassName);
    element.classList.remove(`${this.animateTemplate}${animationName}`);
  }

  public clean(element: HTMLElement) {
    if (element.classList.contains(this.principalClassName)) {
      element.classList.remove(this.principalClassName);
      element.classList.forEach((c) => {
        if (c.startsWith(this.animateTemplate)) element.classList.remove(c);
      });
    }
  }

  public shake(element: HTMLElement, focus = true, time = 500) {
    if (element instanceof HTMLElement) {
      if (focus) element.focus();

      if (element.classList.contains(this.htmlShakeClassName))
        element.classList.remove(this.htmlShakeClassName);

      element.classList.add(this.htmlShakeClassName);

      setTimeout(() => element.classList.remove(this.htmlShakeClassName), time);
    }
  }

  public bounce(element: HTMLElement, focus = true, time = 2000) {
    if (element instanceof HTMLElement) {
      const animationName = 'bounce';
      if (focus) element.focus();

      this.byAnimateCSS(element, animationName);

      let onComplete = () => {};
      setTimeout(() => {
        onComplete();
      }, time - 10);
      return { addEventOnCompletion: (cb: () => void) => (onComplete = cb) };
    }
  }

  public flash(element: HTMLElement, focus = true, time = 2000) {
    if (element instanceof HTMLElement) {
      const animationName = 'flash';
      if (focus) element.focus();

      this.byAnimateCSS(element, animationName);

      let onComplete = () => {};
      setTimeout(() => {
        onComplete();
      }, time - 10);
      return { addEventOnCompletion: (cb: () => void) => (onComplete = cb) };
    }
  }

  public shakeX(element: HTMLElement, focus = true, time = 2000) {
    if (element instanceof HTMLElement) {
      const animationName = 'shakeX';
      if (focus) element.focus();

      this.byAnimateCSS(element, animationName);

      let onComplete = () => {};
      setTimeout(() => {
        onComplete();
      }, time - 10);
      return { addEventOnCompletion: (cb: () => void) => (onComplete = cb) };
    }
  }

  public shakeY(element: HTMLElement, focus = true, time = 2000) {
    if (element instanceof HTMLElement) {
      const animationName = 'shakeY';
      if (focus) element.focus();

      this.byAnimateCSS(element, animationName);

      let onComplete = () => {};
      setTimeout(() => {
        onComplete();
      }, time - 10);
      return { addEventOnCompletion: (cb: () => void) => (onComplete = cb) };
    }
  }

  public heartBeat(element: HTMLElement, focus = true, time = 2000) {
    if (element instanceof HTMLElement) {
      const animationName = 'heartBeat';
      if (focus) element.focus();

      this.byAnimateCSS(element, animationName);

      let onComplete = () => {};
      setTimeout(() => {
        onComplete();
      }, time - 10);
      return { addEventOnCompletion: (cb: () => void) => (onComplete = cb) };
    }
  }

  public backInDown(element: HTMLElement, focus = true, time = 2000) {
    if (element instanceof HTMLElement) {
      const animationName = 'backInDown';
      if (focus) element.focus();

      this.byAnimateCSS(element, animationName);

      let onComplete = () => {};
      setTimeout(() => {
        onComplete();
      }, time - 10);
      return { addEventOnCompletion: (cb: () => void) => (onComplete = cb) };
    }
  }

  public backInLeft(element: HTMLElement, focus = true, time = 2000) {
    if (element instanceof HTMLElement) {
      const animationName = 'backInLeft';
      if (focus) element.focus();

      this.byAnimateCSS(element, animationName);

      let onComplete = () => {};
      setTimeout(() => {
        onComplete();
      }, time - 10);
      return { addEventOnCompletion: (cb: () => void) => (onComplete = cb) };
    }
  }

  public backInRight(element: HTMLElement, focus = true, time = 2000) {
    if (element instanceof HTMLElement) {
      const animationName = 'backInRight';
      if (focus) element.focus();

      this.byAnimateCSS(element, animationName);

      let onComplete = () => {};
      setTimeout(() => {
        onComplete();
      }, time - 10);
      return { addEventOnCompletion: (cb: () => void) => (onComplete = cb) };
    }
  }

  public backInUp(element: HTMLElement, focus = true, time = 2000) {
    if (element instanceof HTMLElement) {
      const animationName = 'backInUp';
      if (focus) element.focus();

      this.byAnimateCSS(element, animationName);

      let onComplete = () => {};
      setTimeout(() => {
        onComplete();
      }, time - 10);
      return { addEventOnCompletion: (cb: () => void) => (onComplete = cb) };
    }
  }

  public zoomOutDown(element: HTMLElement, focus = true, time = 2000) {
    if (element instanceof HTMLElement) {
      const animationName = 'zoomOutDown';
      if (focus) element.focus();

      this.byAnimateCSS(element, animationName);

      let onComplete = () => {};
      setTimeout(() => {
        onComplete();
      }, time - 10);
      return { addEventOnCompletion: (cb: () => void) => (onComplete = cb) };
    }
  }

  public zoomOutUp(element: HTMLElement, focus = true, time = 2000) {
    if (element instanceof HTMLElement) {
      const animationName = 'zoomOutUp';
      if (focus) element.focus();

      this.byAnimateCSS(element, animationName);

      let onComplete = () => {};
      setTimeout(() => {
        onComplete();
      }, time - 10);
      return { addEventOnCompletion: (cb: () => void) => (onComplete = cb) };
    }
  }

  public zoomOutStart(element: HTMLElement, focus = true, time = 2000) {
    if (element instanceof HTMLElement) {
      const animationName = 'zoomOutLeft';
      if (focus) element.focus();

      this.byAnimateCSS(element, animationName);

      let onComplete = () => {};
      setTimeout(() => {
        onComplete();
      }, time - 10);
      return { addEventOnCompletion: (cb: () => void) => (onComplete = cb) };
    }
  }

  public zoomOutEnd(element: HTMLElement, focus = true, time = 2000) {
    if (element instanceof HTMLElement) {
      const animationName = 'zoomOutRight';
      if (focus) element.focus();

      this.byAnimateCSS(element, animationName);

      let onComplete = () => {};
      setTimeout(() => {
        onComplete();
      }, time - 10);
      return { addEventOnCompletion: (cb: () => void) => (onComplete = cb) };
    }
  }

  public otherAnimationByName(element: HTMLElement, name: string, focus = true, time = 2000) {
    if (element instanceof HTMLElement) {
      if (focus) element.focus();
      const animationName = name.replace('animate__', '');

      this.byAnimateCSS(element, animationName);

      let onComplete = () => {};
      setTimeout(() => {
        onComplete();
      }, time - 10);
      return { addEventOnCompletion: (cb: () => void) => (onComplete = cb) };
    }
  }

  public destroy() {
    this.cssHtmlShake.remove();
    this.animateCSS.remove();
  }

  public rebuild() {
    this.configure();
  }

  public static get() {
    if (!(KassiopeiaAnimationTool.instance instanceof KassiopeiaAnimationTool)) {
      KassiopeiaAnimationTool.instance = new KassiopeiaAnimationTool();
      KassiopeiaAnimationTool.instance.configure();

      console.log(
        "Kassiopeia Tools' animation module uses Animate.css - See more at https://animate.style"
      );
    }

    return KassiopeiaAnimationTool.instance;
  }
}
