import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
import { TextureCube } from "../gfx/graphics/webGpu/core/texture/TextureCube";
import { LoaderFunctions } from "../loader/LoaderFunctions";
import { TextureCubeFaceData } from "./TextureCubeFaceData";
/**
 * LDRTextureCube: create a cube texture, it's low dynamic range texture
 * @group Texture
 */
export declare class LDRTextureCube extends TextureCube {
    protected _faceData: TextureCubeFaceData;
    private _url;
    /**
     * constructor: create a cube texture, it's low dynamic range texture
     */
    get ldrImageUrl(): string;
    constructor();
    /**
    * load texture data from web url, which is a 360 panorama image
    * @param url web url
    * @param loaderFunctions callback function when load complete
    */
    load(url: string, loaderFunctions?: LoaderFunctions): Promise<LDRTextureCube>;
    /**
     *
     * Create a texture cube
     * @param srcTexture The cube texture will be created from this 2D texture
     * @returns this
     */
    private createFromLDRTexture;
    /**
     *
     * create cube texture by environment image
     * @param size size of cube texture
     * @param texture source texture
     */
    createFromTexture(size: number, texture: Texture): this;
}
