import { Texture } from '../gfx/graphics/webGpu/core/texture/Texture';
import { TextureCube } from '../gfx/graphics/webGpu/core/texture/TextureCube';
import { LoaderFunctions } from '../loader/LoaderFunctions';
import { TextureCubeFaceData } from './TextureCubeFaceData';
/**
 * HDR TextureCube
 * @group Texture
 */
export declare class HDRTextureCube extends TextureCube {
    private _url;
    protected _faceData: TextureCubeFaceData;
    /**
     * create a cube texture, it's high dynamic range texture
     */
    constructor();
    /**
     * fill this texture by array of numbers;the format as [red0, green0, blue0, alpha0, red1, green1, blue1, alpha1...]
     * @param size assign the cube texture size
     * @param data raw data of cubeTexture; the format is { width: number; height: number; array: Uint8Array }
     * @returns
     */
    createFromHDRData(size: number, data: {
        width: number;
        height: number;
        array: Uint8Array;
    }): this;
    /**
     * fill this texture by a texture2D, which is a 360 panorama image
     * @param size assign the cube texture size
     * @param texture the image texture
     * @returns
     */
    createFromTexture(size: number, texture: Texture): this;
    /**
    * load texture data from web url, which is a 360 panorama image
    * @param url web url
    * @param loaderFunctions callback function when load complete
    */
    load(url: string, loaderFunctions?: LoaderFunctions): Promise<HDRTextureCube>;
}
