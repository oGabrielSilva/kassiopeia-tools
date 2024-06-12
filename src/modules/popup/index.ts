import { KassiopeiaPopupTool } from './KassiopeiaPopupTool';

export function generatePopup(uri: string, width?: number, height?: number) {
  return KassiopeiaPopupTool.get().generate(uri, width, height);
}
