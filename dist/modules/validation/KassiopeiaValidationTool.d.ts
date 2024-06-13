export declare class KassiopeiaValidationTool {
    protected static instance: KassiopeiaValidationTool;
    static readonly emailRegex: RegExp;
    static readonly URLRegex: RegExp;
    isURLValid(url: string): boolean;
    isNameValid(name: string): boolean;
    isEmailValid(email: string): boolean;
    isPasswordValid(password: string): boolean;
    normalizeText(text: string): string;
    normalizeURI(uri: string): string;
    static get(): KassiopeiaValidationTool;
}
