//animation
import { AnimationKassiopeiaTool } from './modules/animation/AnimationKassiopeiaTool';

//html
import { generateHTML } from './modules/html';
import { HTMLKassiopeiaTool } from './modules/html/HTMLKassiopeiaTool';
import type { IHTMLGenerator } from './modules/html/HTMLKassiopeiaTool';

//image
import { ImageKassiopeiaProcessingTool } from './modules/image/ImageKassiopeiaProcessingTool';

//popup
import { generatePopup } from './modules/popup';
import { PopupKassiopeiaTool } from './modules/popup/PopupKassiopeiaTool';

//toaster
import { ToasterKassiopeiaTool } from './modules/toaster/ToasterKassiopeiaTool';
import type {
  IToasterBG,
  IToasterBar,
  IToasterConfig,
  IToasterCustomConfig,
  IToasterFont,
  IToasterIcon,
  IToasterSpecificConfig,
} from './modules/toaster/types';
import { Vec2D } from './modules/toaster/Vec2D';
import { Vec3D } from './modules/toaster/Vec3D';

//validation
import { ValidationKassiopeiaTool } from './modules/validation/ValidationKassiopeiaTool';

export const KassiopeiaTools = {
  AnimationKassiopeiaTool,
  HTMLKassiopeiaTool,
  ImageKassiopeiaProcessingTool,
  PopupKassiopeiaTool,
  ValidationKassiopeiaTool,
  ToasterKassiopeiaTool,
  Vec2D,
  Vec3D,

  generatePopup,
  generateHTML,
};

export type {
  IHTMLGenerator,
  IToasterBG,
  IToasterBar,
  IToasterConfig,
  IToasterCustomConfig,
  IToasterFont,
  IToasterIcon,
  IToasterSpecificConfig,
};

export default KassiopeiaTools;

// (window as any).KassiopeiaTools = KassiopeiaTools;

// const toaster = KassiopeiaToasterTool.get();

// document.getElementById('toasteri').onclick = () =>
//   toaster.info('Testando o toaster info', 30000).listeners(console.log, console.log);
// document.getElementById('toasters').onclick = () => toaster.success('Testando o toaster success');
// document.getElementById('toasterd').onclick = () => toaster.danger('Testando o toaster danger');
// document.getElementById('toasterw').onclick = () => toaster.warn('Testando o toaster warn');
// document.getElementById('toasterc').onclick = () =>
//   toaster.customToaster(
//     'Testando o toaster warn',
//     {
//       background: { color: 'black', padding: Vec2D.of(8, 8), useVectorWithRem: false, opacity: 1 },
//       hideOnClick: true,
//       container: {
//         position3D: Vec3D.of(5, 5, 999),
//         outSide: 'top',
//         boundary: { x: 'start', y: 'top' },
//         useVectorWithPercentage: true,
//       },
//       // progressBar: { color: 'green', height: 4, time: 5000 },
//       text: { color: 'red' },
//       icon: {
//         type: 'html',
//         source: generateHTML({ tag: 'i', attributes: { class: 'bi bi-0-square-fill' } }),
//       },
//     },
//     12000
//   );
