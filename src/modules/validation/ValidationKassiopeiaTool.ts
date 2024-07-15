export class ValidationKassiopeiaTool {
  protected static instance: ValidationKassiopeiaTool = null;

  public static readonly emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  public static readonly URLRegex =
    /(https:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

  public isURLValid(url: string) {
    return (
      typeof url === 'string' &&
      !url.startsWith('http:') &&
      ValidationKassiopeiaTool.URLRegex.test(url)
    );
  }

  public isNameValid(name: string) {
    return typeof name === 'string' && name.trim().length >= 2;
  }

  public isEmailValid(email: string) {
    return typeof email === 'string' && ValidationKassiopeiaTool.emailRegex.test(email);
  }

  public isPasswordValid(password: string): boolean {
    if (typeof password !== 'string') {
      return false;
    }

    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumber;
  }

  public normalizeText(text: string) {
    return typeof text === 'string' ? text.trim() : '';
  }

  public normalizeURI(uri: string) {
    return typeof uri === 'string' ? encodeURI(uri) : '';
  }

  public static get() {
    if (!(ValidationKassiopeiaTool.instance instanceof ValidationKassiopeiaTool)) {
      ValidationKassiopeiaTool.instance = new ValidationKassiopeiaTool();
    }
    return ValidationKassiopeiaTool.instance;
  }

  public static get fast() {
    return ValidationKassiopeiaTool.get();
  }
}
