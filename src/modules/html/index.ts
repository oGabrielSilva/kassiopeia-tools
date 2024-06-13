import { HTMLKassiopeiaTool } from './HTMLKassiopeiaTool';
import type { IHTMLGenerator } from './HTMLKassiopeiaTool';

export function generateHTML<T = HTMLElement>(options: IHTMLGenerator) {
  return HTMLKassiopeiaTool.get().generateHTML<T>(options);
}
