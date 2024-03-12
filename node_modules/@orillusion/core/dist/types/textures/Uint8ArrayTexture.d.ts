import { Texture } from '../gfx/graphics/webGpu/core/texture/Texture';
/**
 * create texture by number array, which format is uint8
 * @group Texture
 */
export declare class Uint8ArrayTexture extends Texture {
    private _dataBuffer;
    /**
     * create texture by number array, which format is uint8
     * @param width width of texture
     * @param height height of texture
     * @param data uint8 array
     * @param useMipmap whether or not gen mipmap
     * @returns
     */
    create(width: number, height: number, data: Uint8Array, useMipmap?: boolean): this;
    /**
     * validate the change of this texture
     */
    updateTexture(width: number, height: number, data: Uint8Array): void;
}
