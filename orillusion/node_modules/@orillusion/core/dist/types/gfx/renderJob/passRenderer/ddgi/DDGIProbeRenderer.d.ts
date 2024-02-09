/// <reference types="@webgpu/types" />
import { CEvent } from '../../../../event/CEvent';
import { RenderTexture } from '../../../../textures/RenderTexture';
import { OcclusionSystem } from '../../occlusion/OcclusionSystem';
import { RendererBase } from '../RendererBase';
import { DDGIIrradianceComputePass } from './DDGIIrradianceComputePass';
import { DDGIIrradianceVolume } from './DDGIIrradianceVolume';
import { DDGIMultiBouncePass } from './DDGIMultiBouncePass';
import { Probe } from './Probe';
import { Texture } from '../../../graphics/webGpu/core/texture/Texture';
import { View3D } from '../../../../core/View3D';
import { DDGILightingPass } from './DDGILightingPass';
export type GlobalIrradianceStatus = 'none' | 'rendering' | 'complete';
export declare let GIRenderStartEvent: CEvent;
export declare let GIRenderCompleteEvent: CEvent;
/**
 * @internal
 * @group Post
 */
export declare class DDGIProbeRenderer extends RendererBase {
    private cubeCamera;
    private volume;
    private probeCountPerFrame;
    private nextProbeIndex;
    private tempProbeList;
    private isRenderCloudGI?;
    private probeRenderResult;
    private renderStatus;
    positionMap: RenderTexture;
    normalMap: RenderTexture;
    colorMap: RenderTexture;
    probeNext: number;
    sizeW: number;
    sizeH: number;
    lightingPass: DDGILightingPass;
    bouncePass: DDGIMultiBouncePass;
    irradianceComputePass: DDGIIrradianceComputePass;
    irradianceDepthMap: RenderTexture;
    irradianceColorMap: RenderTexture;
    /**
     *
     * @param volume
     */
    constructor(volume: DDGIIrradianceVolume);
    /**
     * @internal
     * @group DDGI
     */
    setInputTexture(textures: Texture[]): void;
    /**
     * @internal
     * @group DDGI
     */
    setIrradianceData(colorData: Float32Array, depthData: Float32Array, width: number, height: number): void;
    updateProbe(view: View3D, probe: Probe, encoder: GPURenderPassEncoder): void;
    private renderSceneOnce;
    render(view: View3D, occlusionSystem: OcclusionSystem): void;
    startRenderGI(index?: number): void;
    startRenderCloudGI(): void;
    private rendProbe;
    /**
     * @internal
     * @group DDGI
     */
    private initIrradianceMap;
    /**
    * @internal
    * @group DDGI
    */
    private writeToTexture;
}
