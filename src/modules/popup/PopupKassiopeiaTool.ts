export class PopupKassiopeiaTool {
  protected static instance: PopupKassiopeiaTool = null;

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
    if (!(PopupKassiopeiaTool.instance instanceof PopupKassiopeiaTool)) {
      PopupKassiopeiaTool.instance = new PopupKassiopeiaTool();
    }
    return PopupKassiopeiaTool.instance;
  }

  public static get fast() {
    return PopupKassiopeiaTool.get();
  }
}
