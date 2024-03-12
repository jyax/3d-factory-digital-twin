/// <reference types="@webgpu/types" />
import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
export declare class TextureCubeFaceData {
    faceTextureRef: {
        [key: string]: {
            t: GPUTexture;
            v: GPUTextureView;
        };
    };
    private _texture;
    constructor(texture: Texture);
    /**
     * fill this texture by a texture2D, which is a 360 panorama image
     * assign mipmap level
     * @param mip mipmap level
     * @param texture a panorama image
     * @returns
     */
    uploadTexture(mip: number, texture: Texture): this;
    /**
     * @private
     * @param texture texture reference
     * @returns this
     */
    uploadErpTexture(texture: Texture): this;
    /**
     * get GPU texture raw data
     * @param mip mipmap level
     * @returns GPU texture raw data, including t: GPUTexture and v: GPUTextureView
     */
    getGpuSource(mip: number): {
        t: GPUTexture;
        v: GPUTextureView;
    };
    /**
     * @private generateMipmap
     * @param texture texture reference
     */
    private generateMipmap;
    /**
     * @private Generate a specified level of Mipmap
     * @param mipmap mipmap level
     * @param erpTexture ERP Texture Object
     * @param pow power
     */
    private generateMipmapAtLevel;
}
