import { Texture } from '../gfx/graphics/webGpu/core/texture/Texture';
/**
 * @internal
 * Float16Array texture
 * @group Texture
 */
export declare class Float16ArrayTexture extends Texture {
    uint16Array: Uint16Array;
    floatArray: number[];
    private _dataBuffer;
    /**
     * fill this texture by array of numbers;the format as [red0, green0, blue0, alpha0, red1, green1, blue1, alpha1...]
     * @param width assign the texture width
     * @param height assign the texture height
     * @param numbers color of each pixel
     * @param useMipmap  whether or not gen mipmap
     * @returns
     */
    create(width: number, height: number, numbers?: number[], mipmap?: boolean): this;
    /**
     * validate the change of this texture
     */
    updateTexture(width: number, height: number, numbers: number[], mipmap?: boolean): void;
}
