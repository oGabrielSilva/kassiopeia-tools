export declare class ImageKassiopeiaProcessingTool {
  protected static instance: ImageKassiopeiaProcessingTool;
  protected constructor();
  convertFileToWebpBlobWithClipping(
    file: File,
    width?: number,
    height?: number,
    quality?: number
  ): Promise<Blob>;
  convertFileToWebpBlobWithoutClipping(file: File, quality?: number): Promise<Blob>;
  convertFileToJpegBlobWithClipping(
    file: File,
    width?: number,
    height?: number,
    quality?: number
  ): Promise<Blob>;
  convertFileToJpegBlobWithoutClipping(file: File, quality?: number): Promise<Blob>;
  blobToDataURL(blob: Blob, type: 'jpeg' | 'webp'): Promise<string>;
  protected resizeHeight(
    img: HTMLImageElement,
    width: number,
    height: number
  ): Promise<HTMLImageElement>;
  protected resizeWidth(
    img: HTMLImageElement,
    width: number,
    height: number
  ): Promise<HTMLImageElement>;
  static get(): ImageKassiopeiaProcessingTool;
}
