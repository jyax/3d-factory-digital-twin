/// <reference types="@webgpu/types" />
import { ITexture } from '../gfx/graphics/webGpu/core/texture/ITexture';
import { Texture } from '../gfx/graphics/webGpu/core/texture/Texture';
/**
 * Depth 2D TextureArray
 * @internal
 * @group Texture
 */
export declare class Depth2DTextureArray extends Texture implements ITexture {
    /**
     * @constructor
     * @width texture width (pixel)
     * @width texture height (pixel)
     * @width texture format, default value is depth32float
     */
    constructor(width: number, height: number, format?: GPUTextureFormat, numberLayer?: number);
    internalCreateBindingLayoutDesc(): void;
    internalCreateTexture(): void;
    internalCreateView(): void;
    internalCreateSampler(): void;
}
