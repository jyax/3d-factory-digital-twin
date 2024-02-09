import { Texture } from '../gfx/graphics/webGpu/core/texture/Texture';
import { LoaderFunctions } from '../loader/LoaderFunctions';
/**
 * HDR Texture
 * @group Texture
 */
export declare class HDRTexture extends Texture {
    constructor();
    /**
     * fill this texture by array of numbers;the format as [red0, green0, blue0, e0, red1, green1, blue1, e1...]
     * @param width assign the texture width
     * @param height assign the texture height
     * @param data color of each pixel
     * @param useMipmap gen mipmap or not
     * @returns
     */
    create(width?: number, height?: number, data?: ArrayBuffer, useMipmap?: boolean): this;
    /**
     * load one hdr image
     * @param url the url of hdr image
     * @param loaderFunctions callback when load complete
     * @returns
     */
    load(url: string, loaderFunctions?: LoaderFunctions): Promise<HDRTexture>;
}
