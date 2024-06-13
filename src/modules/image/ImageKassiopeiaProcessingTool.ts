export class ImageKassiopeiaProcessingTool {
  protected static instance: ImageKassiopeiaProcessingTool;

  protected constructor() {}

  public convertFileToWebpBlobWithClipping(file: File, width = 192, height = 192, quality = 0.9) {
    return new Promise<Blob | null>((resolve) => {
      try {
        if (!file) return resolve(null);

        const url = URL.createObjectURL(file as Blob);
        const img = new Image();

        img.onload = async () => {
          const w = img.width;
          const h = img.height;
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d')!;

          const newImage =
            ((width !== w || height !== h) &&
              (w < h
                ? await this.resizeHeight(img, w, h)
                : w > h
                ? await this.resizeWidth(img, w, h)
                : img)) ||
            img;

          ctx.canvas.width = width;
          ctx.canvas.height = height;
          ctx.drawImage(newImage, 0, 0, width, height);

          quality = quality < 0.7 ? 0.7 : quality > 1 ? 1 : quality;

          ctx.canvas.toBlob(
            (b) => {
              URL.revokeObjectURL(url);
              resolve(b);
            },
            'image/webp',
            quality
          );
        };

        img.crossOrigin = 'Anonymous';
        img.src = url;
      } catch (error) {
        resolve(null);
      }
    });
  }

  public convertFileToWebpBlobWithoutClipping(file: File, quality = 0.9) {
    return new Promise<Blob | null>((resolve) => {
      try {
        if (!file) return resolve(null);

        const url = URL.createObjectURL(file as Blob);
        const img = new Image();

        img.onload = async () => {
          const w = img.width;
          const h = img.height;
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          ctx.canvas.width = w;
          ctx.canvas.height = h;
          ctx.drawImage(img, 0, 0, w, h);

          quality = quality < 0.7 ? 0.7 : quality > 1 ? 1 : quality;

          ctx.canvas.toBlob(
            (b) => {
              URL.revokeObjectURL(url);
              resolve(b);
            },
            'image/webp',
            quality
          );
        };

        img.crossOrigin = 'Anonymous';
        img.src = url;
      } catch (error) {
        resolve(null);
      }
    });
  }

  public convertFileToJpegBlobWithClipping(file: File, width = 192, height = 192, quality = 0.9) {
    return new Promise<Blob | null>((resolve) => {
      try {
        if (!file) return resolve(null);

        const url = URL.createObjectURL(file as Blob);
        const img = new Image();

        img.onload = async () => {
          const w = img.width;
          const h = img.height;
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d')!;

          const newImage =
            ((width !== w || height !== h) &&
              (w < h
                ? await this.resizeHeight(img, w, h)
                : w > h
                ? await this.resizeWidth(img, w, h)
                : img)) ||
            img;

          ctx.canvas.width = width;
          ctx.canvas.height = height;
          ctx.drawImage(newImage, 0, 0, width, height);

          quality = quality < 0.7 ? 0.7 : quality > 1 ? 1 : quality;

          ctx.canvas.toBlob(
            (b) => {
              URL.revokeObjectURL(url);
              resolve(b);
            },
            'image/jpeg',
            quality
          );
        };

        img.crossOrigin = 'Anonymous';
        img.src = url;
      } catch (error) {
        resolve(null);
      }
    });
  }

  public convertFileToJpegBlobWithoutClipping(file: File, quality = 0.9) {
    return new Promise<Blob | null>((resolve) => {
      try {
        if (!file) return resolve(null);

        const url = URL.createObjectURL(file as Blob);
        const img = new Image();

        img.onload = async () => {
          const w = img.width;
          const h = img.height;
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          ctx.canvas.width = w;
          ctx.canvas.height = h;
          ctx.drawImage(img, 0, 0, w, h);

          quality = quality < 0.7 ? 0.7 : quality > 1 ? 1 : quality;

          ctx.canvas.toBlob(
            (b) => {
              URL.revokeObjectURL(url);
              resolve(b);
            },
            'image/jpeg',
            quality
          );
        };

        img.crossOrigin = 'Anonymous';
        img.src = url;
      } catch (error) {
        resolve(null);
      }
    });
  }

  public blobToDataURL(blob: Blob, type: 'jpeg' | 'webp') {
    if (!type) type = 'jpeg';

    return new Promise<string>((resolve) => {
      try {
        if (!blob) return resolve(null);

        const url = URL.createObjectURL(blob);
        const img = new Image();

        img.onload = async () => {
          const w = img.width;
          const h = img.height;
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d')!;

          ctx.canvas.width = w;
          ctx.canvas.height = h;
          ctx.drawImage(img, 0, 0, w, h);

          resolve(ctx.canvas.toDataURL(`image/${type}`, 1));
        };

        img.crossOrigin = 'Anonymous';
        img.src = url;
      } catch (error) {
        resolve(null);
      }
    });
  }

  protected resizeHeight(img: HTMLImageElement, width: number, height: number) {
    return new Promise<HTMLImageElement>((resolve) => {
      const cv = document.createElement('canvas');
      const context = cv.getContext('2d')!;

      context.canvas.width = width;
      context.canvas.height = width;
      context.drawImage(img, 0, height * 0.2, width, width, 0, 0, width, width);

      const image = new Image();
      image.onload = () => resolve(image);

      image.src = context.canvas.toDataURL();
    });
  }

  protected resizeWidth(img: HTMLImageElement, width: number, height: number) {
    return new Promise<HTMLImageElement>((resolve) => {
      const cv = document.createElement('canvas');
      const context = cv.getContext('2d')!;

      context.canvas.width = height;
      context.canvas.height = height;
      context.drawImage(img, width * 0.2, 0, height, height, 0, 0, height, height);

      const image = new Image();
      image.onload = () => resolve(image);

      image.src = context.canvas.toDataURL();
    });
  }

  public static get() {
    if (!(ImageKassiopeiaProcessingTool.instance instanceof ImageKassiopeiaProcessingTool)) {
      ImageKassiopeiaProcessingTool.instance = new ImageKassiopeiaProcessingTool();
    }
    return ImageKassiopeiaProcessingTool.instance;
  }
}
