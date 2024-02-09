/// <reference types="@webgpu/types" />
import { Texture } from './Texture';
/**
 * Texture Cube
 * @internal
 * @group Texture
 */
export declare class TextureCube extends Texture {
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
     * GPUTextureBindingLayout
     */
    textureBindingLayout: GPUTextureBindingLayout;
    /**
     * GPUSamplerBindingLayout
     */
    samplerBindingLayout: GPUSamplerBindingLayout;
    /**
     * @constructor
     */
    constructor();
    /**
     * createTextureDescriptor
     */
    protected createTextureDescriptor(width: number, height: number, mipLevelCount: number, format: GPUTextureFormat, usage?: number, sizeCount?: number): void;
}
