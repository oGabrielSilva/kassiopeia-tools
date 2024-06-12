export class KassiopeiaPopupTool {
  protected static instance: KassiopeiaPopupTool = null;

  public generate(uri: string, width = 420, height = 580) {
    return window.open(
      uri,
      '_blank',
      `width=${width},height=${height},left=${(window.innerWidth - width) / 2},top=${
        (window.innerHeight - height) / 2
      }`
    );
  }

  public static get() {
    if (!(KassiopeiaPopupTool.instance instanceof KassiopeiaPopupTool)) {
      KassiopeiaPopupTool.instance = new KassiopeiaPopupTool();
    }
    return KassiopeiaPopupTool.instance;
  }
}
