/// <reference types="@webgpu/types" />
import { VirtualTexture } from '../../../textures/VirtualTexture';
import { StorageGPUBuffer } from '../../graphics/webGpu/core/buffer/StorageGPUBuffer';
import { ComputeShader } from '../../graphics/webGpu/shader/ComputeShader';
import { RendererPassState } from '../passRenderer/state/RendererPassState';
import { PostBase } from './PostBase';
import { View3D } from '../../../core/View3D';
import { RTFrame } from '../frame/RTFrame';
/**
 * depth of field effect.
 * A common post-processing effect that simulates the focusing characteristics of a camera lens.
 * ```
 *       //Configure parameters related to depth of field
 *       let cfg = {@link Engine3D.setting.render.postProcessing.depthOfView};
 *       cfg.near = 150;
 *       cfg.far = 300;
 *       cfg.pixelOffset = 1.0;
 *         let view = new View3D();
        view.scene = this.scene;
        view.camera = mainCamera;
        
 *
 *       Engine3D.startRender(renderJob);
 *```
 * @group Post Effects
 */
export declare class DepthOfFieldPost extends PostBase {
    /**
     * @internal
     */
    blurTexture1: VirtualTexture;
    /**
     * @internal
     */
    blurTexture2: VirtualTexture;
    /**
     * @internal
     */
    rendererPassState: RendererPassState;
    /**
     * @internal
     */
    blurComputes: ComputeShader[];
    /**
     * @internal
     */
    blurSettings: StorageGPUBuffer[];
    /**
     * @internal
     */
    outTexture: VirtualTexture;
    rtFrame: RTFrame;
    constructor();
    /**
     * @internal
     */
    onAttach(view: View3D): void;
    /**
     * @internal
     */
    onDetach(view: View3D): void;
    get pixelOffset(): number;
    set pixelOffset(value: number);
    get near(): number;
    set near(value: number);
    get far(): number;
    set far(value: number);
    private createBlurCompute;
    private createResource;
    /**
     * @internal
     */
    render(view: View3D, command: GPUCommandEncoder): void;
    onResize(): void;
}
