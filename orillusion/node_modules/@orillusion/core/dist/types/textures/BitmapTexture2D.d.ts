import { LoaderFunctions } from '../loader/LoaderFunctions';
import { Texture } from '../gfx/graphics/webGpu/core/texture/Texture';
/**
 * bitmap texture
 * @group Texture
 */
export declare class BitmapTexture2D extends Texture {
    private _source;
    premultiplyAlpha: PremultiplyAlpha;
    /**
     * @constructor
     * @param useMipmap Set whether to use mipmap
     */
    constructor(useMipmap?: boolean);
    /**
     * get raw data of this texture
     */
    get source(): HTMLCanvasElement | ImageBitmap | OffscreenCanvas | HTMLImageElement;
    /**
     * set raw data of this texture
     */
    set source(value: HTMLCanvasElement | ImageBitmap | OffscreenCanvas | HTMLImageElement);
    /**
     * load texture data from web url
     * @param url web url
     * @param loaderFunctions callback function when load complete
     */
    load(url: string, loaderFunctions?: LoaderFunctions): Promise<unknown>;
    private imageData;
    /**
    * load data from Blob
    * @param imgData blob data which contains image
    */
    loadFromBlob(imgData: Blob): Promise<boolean>;
}
