import { generateHTML } from './modules/html';
import { KassiopeiaHtmlTool } from './modules/html/KassiopeiaHtmlTool';
import { generatePopup } from './modules/popup';
import { KassiopeiaPopupTool } from './modules/popup/KassiopeiaPopupTool';
import { ImageProcessingTool } from './modules/image/ImageProcessingTool';
import { KassiopeiaValidationTool } from './modules/validation/KassiopeiaValidationTool';
import { KassiopeiaAnimationTool } from './modules/animation/KassiopeiaAnimationTool';
import { Vec3D } from './modules/toaster/Vec3D';
import { KassiopeiaToasterTool } from './modules/toaster/KassiopeiaToasterTool';
import { Vec2D } from './modules/toaster/Vec2D';

if (typeof window !== 'object' || typeof document !== 'object') {
  throw new Error('Kassiopeia tools needs to be run in the browser');
}

const KassiopeiaTools = {
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
(window as any).KassiopeiaTools = KassiopeiaTools;

const toaster = KassiopeiaToasterTool.get();

document.getElementById('toasteri').onclick = () =>
  toaster.info('Testando o toaster info').listeners(console.log, console.log);
document.getElementById('toasters').onclick = () => toaster.success('Testando o toaster success');
document.getElementById('toasterd').onclick = () => toaster.danger('Testando o toaster danger');
document.getElementById('toasterw').onclick = () => toaster.warn('Testando o toaster warn');
document.getElementById('toasterc').onclick = () =>
  toaster.customToaster('Testando o toaster warn', {
    background: { color: 'black', padding: Vec2D.of(8, 8), useVectorWithRem: false, opacity: 0.2 },
    hideOnClick: true,
    container: {
      position3D: Vec3D.of(5, 5, 999),
      outSide: 'top',
      boundary: { x: 'end', y: 'bottom' },
      useVectorWithPercentage: true,
    },
    progressBar: { color: 'green', height: 4, time: 5000 },
    text: { color: 'red' },
  });

export {
  KassiopeiaTools as tools,
  KassiopeiaHtmlTool,
  KassiopeiaPopupTool,
  ImageProcessingTool,
  KassiopeiaAnimationTool,
  Vec3D,
  KassiopeiaToasterTool,
  generateHTML,
  generatePopup,
};
