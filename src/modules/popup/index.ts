import { PopupKassiopeiaTool } from './PopupKassiopeiaTool';

export function generatePopup(uri: string, width?: number, height?: number) {
  return PopupKassiopeiaTool.get().generate(uri, width, height);
}
