/// <reference types="@webgpu/types" />
import { VirtualTexture } from '../../../textures/VirtualTexture';
import { Texture } from '../../graphics/webGpu/core/texture/Texture';
/**
 * @internal
 * @group GFX
 */
export declare class ErpImage2CubeMap {
    static convertRGBE2RGBA(image: VirtualTexture, data: Float32Array): void;
    private static makeFaceTexturePipeline;
    private static configBuffer;
    private static quaternionBuffer;
    static makeTextureCube(image: Texture, dstSize: number, dstView: GPUTextureView): void;
}
