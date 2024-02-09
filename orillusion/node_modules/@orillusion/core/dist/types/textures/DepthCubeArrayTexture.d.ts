import { ITexture } from '../gfx/graphics/webGpu/core/texture/ITexture';
import { Texture } from '../gfx/graphics/webGpu/core/texture/Texture';
/**
 * depth cube array texture
 * @internal
 * @group Texture
 */
export declare class DepthCubeArrayTexture extends Texture implements ITexture {
    /**
     * @constructor
     */
    constructor(width: number, height: number, numberLayer: number);
    internalCreateBindingLayoutDesc(): void;
    internalCreateTexture(): void;
    internalCreateView(): void;
    internalCreateSampler(): void;
}
