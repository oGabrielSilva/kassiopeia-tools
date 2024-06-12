import { generateHTML } from './modules/html';
import { KassiopeiaHtmlTool } from './modules/html/KassiopeiaHtmlTool';
import { generatePopup } from './modules/popup';
import { KassiopeiaPopupTool } from './modules/popup/KassiopeiaPopupTool';
import { ImageProcessingTool } from './modules/image/ImageProcessingTool';
import { KassiopeiaValidationTool } from './modules/validation/KassiopeiaValidationTool';
import { KassiopeiaAnimationTool } from './modules/animation/KassiopeiaAnimationTool';
import { Vec3D } from './modules/toaster/Vec3D';
import { KassiopeiaToasterTool } from './modules/toaster/KassiopeiaToasterTool';

if (typeof window !== 'object' || typeof document !== 'object') {
  throw new Error('Kassiopeia tools needs to be run in the browser');
}

const kassiopeiaTools = {
  KassiopeiaHtmlTool,
  KassiopeiaPopupTool,
  ImageProcessingTool,
  KassiopeiaValidationTool,
  KassiopeiaAnimationTool,
  Vec3D,
  KassiopeiaToasterTool,
  generateHTML,
  generatePopup,
};
(window as any).KassiopeiaTools = kassiopeiaTools;

// const anim = KassiopeiaAnimationTool.get();

// document.querySelector<HTMLButtonElement>('#test-shake').onclick = (e) =>
//   anim.shake(e.target as HTMLElement);

// document.querySelector<HTMLButtonElement>('#test-bounce').onclick = (e) =>
//   anim.bounce(e.target as HTMLElement);

// document.querySelector<HTMLButtonElement>('#test-flash').onclick = (e) =>
//   anim.flash(e.target as HTMLElement);

// document.querySelector<HTMLButtonElement>('#test-down').onclick = (e) =>
//   anim.backInDown((e.target as HTMLElement).parentElement.querySelector('div'));

// document.querySelector<HTMLButtonElement>('#test-top').onclick = (e) =>
//   anim
//     .zoomOutUp((e.target as HTMLElement).parentElement.querySelector('div'))
//     .addEventOnCompletion(() => {
//       (e.target as HTMLElement).parentElement.querySelector('div').remove();
//       console.log('Removido');
//     });

// setTimeout(() => {
//   anim.destroy();

//   setTimeout(() => {
//     anim.rebuild();
//   }, 5000);
// }, 5000);

const toaster = KassiopeiaToasterTool.get();

setTimeout(() => {
  toaster.info('Testando');
}, 1000);

document.body.appendChild(
  generateHTML({
    tag: 'div',
    attributes: {
      'data-id': Date.now(),
      hour: new Date().getHours(),
      class: 'hello world',
      id: Date.now(),
    },
    css: { border: '2px solid black', padding: '2rem' },
    textContent: 'Hello world!',
    onClick: () => generatePopup('../dist/bundle.js', 800, 200),
    children: [{ tag: 'p', textContent: 'Hello world from p' }],
  })
);

export {
  kassiopeiaTools as tools,
  KassiopeiaHtmlTool,
  KassiopeiaPopupTool,
  ImageProcessingTool,
  KassiopeiaAnimationTool,
  Vec3D,
  KassiopeiaToasterTool,
  generateHTML,
  generatePopup,
};
