import { generateHTML } from '../html';

export class AnimationKassiopeiaTool {
  protected static instance: AnimationKassiopeiaTool = null;

  protected readonly principalClassName = 'animate__animated';
  protected readonly animateTemplate = 'animate__';

  protected readonly animateCSS = generateHTML({
    tag: 'link',
    attributes: {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
      'data-animation-kassiopeia-tool-style-element': '',
    },
  });

  protected configure() {
    document.head.appendChild(this.animateCSS);
  }

  protected byAnimateCSS(element: HTMLElement, animationName: string, time: number) {
    element.style.animationDuration = time + 'ms';
    setTimeout(() => {
      element.classList.add(this.principalClassName);
      element.classList.add(`${this.animateTemplate}${animationName}`);
    }, 1);
  }

  protected cleanAnimateCSS(element: HTMLElement, animationName: string, event?: () => void) {
    if (event && typeof event === 'function') event();
    element.classList.remove(this.principalClassName);
    element.classList.remove(`${this.animateTemplate}${animationName}`);
  }

  protected causeFocus(element: HTMLElement) {
    element.focus();
    if (!(element instanceof HTMLInputElement)) {
      element.querySelector('input')?.focus();
    }
  }

  public clean(element: HTMLElement) {
    element.classList.remove(this.principalClassName);
    element.classList.forEach((c) => {
      if (c.startsWith(this.animateTemplate)) element.classList.remove(c);
    });
  }

  public bounce(element: HTMLElement, focus = true, time = 810) {
    if (element instanceof HTMLElement) {
      this.clean(element);
      const animationName = 'bounce';
      if (focus) this.causeFocus(element);

      this.byAnimateCSS(element, animationName, time);

      let onComplete = () => {};
      setTimeout(() => {
        onComplete();
      }, time - 10);
      return { addEventOnCompletion: (cb: () => void) => (onComplete = cb) };
    }
  }

  public bounceInDown(element: HTMLElement, focus = true, time = 810) {
    if (element instanceof HTMLElement) {
      this.clean(element);
      const animationName = 'bounceInDown';
      if (focus) this.causeFocus(element);

      this.byAnimateCSS(element, animationName, time);

      let onComplete = () => {};
      setTimeout(() => {
        onComplete();
      }, time - 10);
      return { addEventOnCompletion: (cb: () => void) => (onComplete = cb) };
    }
  }

  public flash(element: HTMLElement, focus = true, time = 810) {
    if (element instanceof HTMLElement) {
      this.clean(element);
      const animationName = 'flash';
      if (focus) this.causeFocus(element);

      this.byAnimateCSS(element, animationName, time);

      let onComplete = () => {};
      setTimeout(() => {
        onComplete();
      }, time - 10);
      return { addEventOnCompletion: (cb: () => void) => (onComplete = cb) };
    }
  }

  public shakeX(element: HTMLElement, focus = true, time = 810) {
    if (element instanceof HTMLElement) {
      this.clean(element);
      const animationName = 'shakeX';
      if (focus) this.causeFocus(element);

      this.byAnimateCSS(element, animationName, time);

      let onComplete = () => {};
      setTimeout(() => {
        onComplete();
      }, time - 10);
      return { addEventOnCompletion: (cb: () => void) => (onComplete = cb) };
    }
  }

  public shakeY(element: HTMLElement, focus = true, time = 810) {
    if (element instanceof HTMLElement) {
      this.clean(element);
      const animationName = 'shakeY';
      if (focus) this.causeFocus(element);

      this.byAnimateCSS(element, animationName, time);

      let onComplete = () => {};
      setTimeout(() => {
        onComplete();
      }, time - 10);
      return { addEventOnCompletion: (cb: () => void) => (onComplete = cb) };
    }
  }

  public heartBeat(element: HTMLElement, focus = true, time = 810) {
    if (element instanceof HTMLElement) {
      this.clean(element);
      const animationName = 'heartBeat';
      if (focus) this.causeFocus(element);

      this.byAnimateCSS(element, animationName, time);

      let onComplete = () => {};
      setTimeout(() => {
        onComplete();
      }, time - 10);
      return { addEventOnCompletion: (cb: () => void) => (onComplete = cb) };
    }
  }

  public backInDown(element: HTMLElement, focus = true, time = 810) {
    if (element instanceof HTMLElement) {
      this.clean(element);
      const animationName = 'backInDown';
      if (focus) this.causeFocus(element);

      this.byAnimateCSS(element, animationName, time);

      let onComplete = () => {};
      setTimeout(() => {
        onComplete();
      }, time - 10);
      return { addEventOnCompletion: (cb: () => void) => (onComplete = cb) };
    }
  }

  public backInLeft(element: HTMLElement, focus = true, time = 810) {
    if (element instanceof HTMLElement) {
      this.clean(element);
      const animationName = 'backInLeft';
      if (focus) this.causeFocus(element);

      this.byAnimateCSS(element, animationName, time);

      let onComplete = () => {};
      setTimeout(() => {
        onComplete();
      }, time - 10);
      return { addEventOnCompletion: (cb: () => void) => (onComplete = cb) };
    }
  }

  public backInRight(element: HTMLElement, focus = true, time = 810) {
    if (element instanceof HTMLElement) {
      this.clean(element);
      const animationName = 'backInRight';
      if (focus) this.causeFocus(element);

      this.byAnimateCSS(element, animationName, time);

      let onComplete = () => {};
      setTimeout(() => {
        onComplete();
      }, time - 10);
      return { addEventOnCompletion: (cb: () => void) => (onComplete = cb) };
    }
  }

  public backInUp(element: HTMLElement, focus = true, time = 810) {
    if (element instanceof HTMLElement) {
      this.clean(element);
      const animationName = 'backInUp';
      if (focus) this.causeFocus(element);

      this.byAnimateCSS(element, animationName, time);

      let onComplete = () => {};
      setTimeout(() => {
        onComplete();
      }, time - 10);
      return { addEventOnCompletion: (cb: () => void) => (onComplete = cb) };
    }
  }

  public zoomOutDown(element: HTMLElement, focus = true, time = 810) {
    if (element instanceof HTMLElement) {
      this.clean(element);
      const animationName = 'zoomOutDown';
      if (focus) this.causeFocus(element);

      this.byAnimateCSS(element, animationName, time);

      let onComplete = () => {};
      setTimeout(() => {
        onComplete();
      }, time - 10);
      return { addEventOnCompletion: (cb: () => void) => (onComplete = cb) };
    }
  }

  public zoomOutUp(element: HTMLElement, focus = true, time = 810) {
    if (element instanceof HTMLElement) {
      this.clean(element);
      const animationName = 'zoomOutUp';
      if (focus) this.causeFocus(element);

      this.byAnimateCSS(element, animationName, time);

      let onComplete = () => {};
      setTimeout(() => {
        onComplete();
      }, time - 10);
      return { addEventOnCompletion: (cb: () => void) => (onComplete = cb) };
    }
  }

  public zoomOutStart(element: HTMLElement, focus = true, time = 810) {
    if (element instanceof HTMLElement) {
      this.clean(element);
      const animationName = 'zoomOutLeft';
      if (focus) this.causeFocus(element);

      this.byAnimateCSS(element, animationName, time);

      let onComplete = () => {};
      setTimeout(() => {
        onComplete();
      }, time - 10);
      return { addEventOnCompletion: (cb: () => void) => (onComplete = cb) };
    }
  }

  public zoomOutEnd(element: HTMLElement, focus = true, time = 810) {
    if (element instanceof HTMLElement) {
      this.clean(element);
      const animationName = 'zoomOutRight';
      if (focus) this.causeFocus(element);

      this.byAnimateCSS(element, animationName, time);

      let onComplete = () => {};
      setTimeout(() => {
        onComplete();
      }, time - 10);
      return { addEventOnCompletion: (cb: () => void) => (onComplete = cb) };
    }
  }

  public otherAnimationByName(element: HTMLElement, name: string, focus = true, time = 810) {
    this.clean(element);
    if (element instanceof HTMLElement) {
      if (focus) this.causeFocus(element);
      const animationName = name.replace('animate__', '');

      this.byAnimateCSS(element, animationName, time);

      let onComplete = () => {};
      setTimeout(() => {
        onComplete();
      }, time - 10);
      return { addEventOnCompletion: (cb: () => void) => (onComplete = cb) };
    }
  }

  public destroy() {
    this.animateCSS.remove();
  }

  public rebuild() {
    this.configure();
  }

  public static get() {
    if (!(AnimationKassiopeiaTool.instance instanceof AnimationKassiopeiaTool)) {
      AnimationKassiopeiaTool.instance = new AnimationKassiopeiaTool();
      AnimationKassiopeiaTool.instance.configure();

      console.log(
        "Kassiopeia Tools' animation module uses Animate.css - See more at https://animate.style"
      );
    }

    return AnimationKassiopeiaTool.instance;
  }

  public static get fast() {
    return AnimationKassiopeiaTool.get();
  }
}
