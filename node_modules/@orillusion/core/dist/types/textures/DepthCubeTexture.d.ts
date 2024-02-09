import { ITexture } from "../gfx/graphics/webGpu/core/texture/ITexture";
import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
/**
 * cube texture witch data if for depth
 * @internal
 * @group Texture
 */
export declare class DepthCubeTexture extends Texture implements ITexture {
    /**
     * texture width, default value is 4
     */
    width: number;
    /**
     * texture height, default value is 4
     */
    height: number;
    /**
     * depth or array layers, default value is 6
     */
    depthOrArrayLayers: number;
    /**
     * GPUShaderStage
     */
    visibility: number;
    /**
     * @constructor
     */
    constructor(width: number, height: number);
    internalCreateBindingLayoutDesc(): void;
    internalCreateTexture(): void;
    internalCreateView(): void;
    internalCreateSampler(): void;
}
