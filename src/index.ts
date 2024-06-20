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

//locker
import { ScreenLockerKassiopeiaTool } from './modules/locker/ScreenLockerKassiopeiaTool';
import type {
  IScreenLockerBarConfig,
  IScreenLockerConfig,
} from './modules/locker/ScreenLockerKassiopeiaTool';

export const KassiopeiaTools = {
  AnimationKassiopeiaTool,
  HTMLKassiopeiaTool,
  ImageKassiopeiaProcessingTool,
  PopupKassiopeiaTool,
  ValidationKassiopeiaTool,
  ToasterKassiopeiaTool,
  Vec2D,
  Vec3D,
  ScreenLockerKassiopeiaTool,

  generatePopup,
  generateHTML,
};

export {
  AnimationKassiopeiaTool,
  HTMLKassiopeiaTool,
  ImageKassiopeiaProcessingTool,
  PopupKassiopeiaTool,
  ValidationKassiopeiaTool,
  ToasterKassiopeiaTool,
  Vec2D,
  Vec3D,
  ScreenLockerKassiopeiaTool,
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
  IScreenLockerConfig,
  IScreenLockerBarConfig,
};

export default KassiopeiaTools;
