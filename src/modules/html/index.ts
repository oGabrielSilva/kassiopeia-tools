import { KassiopeiaHtmlTool } from './KassiopeiaHtmlTool';
import type { IGen } from './KassiopeiaHtmlTool';

export function generateHTML<T = HTMLElement>(options: IGen) {
  return KassiopeiaHtmlTool.get().generateHTML<T>(options);
}
