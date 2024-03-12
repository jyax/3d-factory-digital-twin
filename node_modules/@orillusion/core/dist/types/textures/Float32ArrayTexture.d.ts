/// <reference types="@webgpu/types" />
import { Texture } from '../gfx/graphics/webGpu/core/texture/Texture';
/**
 * @internal
 * Float32Array texture
 * @group Texture
 */
export declare class Float32ArrayTexture extends Texture {
    /**
     * fill this texture by array of numbers;the format as [red0, green0, blue0, alpha0, red1, green1, blue1, alpha1...]
     * @param width assign the texture width
     * @param height assign the texture height
     * @param data color of each pixel
     * @param filtering set the sampler type to filtering, else it's non-filtering
     * @returns
     */
    create(width: number, height: number, data: Float32Array, filtering?: boolean): void;
    /**
     * fill this texture GPUBuffer
     * @param width assign the texture width
     * @param height assign the texture height
     * @param textureDataBuffer GPUBuffer
     * @returns
     */
    fromBuffer(width: number, height: number, textureDataBuffer: GPUBuffer): this;
}
