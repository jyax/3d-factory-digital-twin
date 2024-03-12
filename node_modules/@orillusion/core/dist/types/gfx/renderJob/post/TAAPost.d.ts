/// <reference types="@webgpu/types" />
import { VirtualTexture } from '../../../textures/VirtualTexture';
import { StorageGPUBuffer } from '../../graphics/webGpu/core/buffer/StorageGPUBuffer';
import { ComputeShader } from '../../graphics/webGpu/shader/ComputeShader';
import { RendererPassState } from '../passRenderer/state/RendererPassState';
import { PostBase } from './PostBase';
import { Matrix4 } from '../../../math/Matrix4';
import { RTFrame } from '../frame/RTFrame';
import { View3D } from '../../../core/View3D';
/**
 * Temporal AA
 * ```
 *       //setting
 *       let cfg = {@link Engine3D.setting.render.postProcessing.taa};
 *         let view = new View3D();
        view.scene = this.scene;
        view.camera = mainCamera;
        
 *
 *       Engine3D.startRender(renderJob);
 *```
 * @group Post Effects
 */
export declare class TAAPost extends PostBase {
    /**
     * @internal
     */
    taaTexture: VirtualTexture;
    outTexture: VirtualTexture;
    /**
     * @internal
     */
    rendererPassState: RendererPassState;
    /**
     * @internal
     */
    taaCompute: ComputeShader;
    copyTexCompute: ComputeShader;
    sharpCompute: ComputeShader;
    /**
     * @internal
     */
    taaSetting: StorageGPUBuffer;
    /**
     * @internal
     */
    preColorBuffer: StorageGPUBuffer;
    preColorTex: VirtualTexture;
    /**
     * @internal
     */
    preProjMatrix: Matrix4;
    preViewMatrix: Matrix4;
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
    get jitterSeedCount(): number;
    set jitterSeedCount(value: number);
    get blendFactor(): number;
    set blendFactor(value: number);
    get sharpFactor(): number;
    set sharpFactor(value: number);
    get sharpPreBlurFactor(): number;
    set sharpPreBlurFactor(value: number);
    get temporalJitterScale(): number;
    set temporalJitterScale(value: number);
    private createGUI;
    private createCompute;
    private createResource;
    /**
     * @internal
     */
    render(view: View3D, command: GPUCommandEncoder): void;
    onResize(): void;
}
