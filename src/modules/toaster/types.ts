import type { Vec2D } from './Vec2D';
import type { Vec3D } from './Vec3D';

export interface IToasterBG {
  color: string;
  padding: Vec2D;
  useVectorWithRem: boolean;
  opacity?: number;
}

export interface IToasterIcon {
  type: 'innerHTML' | 'html';
  source: string | HTMLElement;
}

export interface IToasterFont {
  font?: string;
  size?: number;
  weight?: 'normal' | '400' | '500' | '600' | 'bold';
  isItalic?: boolean;
  color: string;
}

export interface IToasterBar {
  color: string;
  height: number;
  time: number;
}

export interface IToasterConfig {
  container: {
    position3D: Vec3D;
    maxWidth?: string;
    useVectorWithPercentage?: boolean;
    centerOnScreen?: boolean;
    border?: { size: number; color: string };
    boundary?: { x: 'start' | 'end'; y: 'top' | 'bottom' };
    outSide?: 'top' | 'bottom' | 'start' | 'end';
  };
  background: {
    info: IToasterBG;
    success: IToasterBG;
    danger: IToasterBG;
    warn: IToasterBG;
  };
  text: {
    info: IToasterFont;
    success: IToasterFont;
    danger: IToasterFont;
    warn: IToasterFont;
  };
  icon?: {
    info: IToasterIcon;
    success: IToasterIcon;
    danger: IToasterIcon;
    warn: IToasterIcon;
  };
  progressBar?: {
    info: IToasterBar;
    success: IToasterBar;
    danger: IToasterBar;
    warn: IToasterBar;
  };
  hideOnClick: boolean;
}

export interface IToasterCustomConfig {
  background: IToasterBG;
  text: IToasterFont;
  icon?: IToasterIcon;
  progressBar?: IToasterBar;
  hideOnClick: boolean;
  container: IToasterConfig['container'];
}

export interface IToasterSpecificConfig {
  background: IToasterBG;
  text: IToasterFont;
  icon?: IToasterIcon;
  bar?: IToasterBar;
  hideOnClick: boolean;
  container?: IToasterConfig['container'];
}
