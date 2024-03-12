import { View3D } from '../../../../core/View3D';
import { RenderTexture } from '../../../../textures/RenderTexture';
import { RendererPassState } from '../state/RendererPassState';
import { DDGIIrradianceVolume } from './DDGIIrradianceVolume';
/**
 * @internal
 * @group Post
 */
export declare class DDGIIrradianceComputePass {
    private irradianceBuffer;
    private depthBuffer;
    private probeIrradianceMap;
    private probeDepthMap;
    private volume;
    private computeShader;
    private depthRaysBuffer;
    constructor(volume: DDGIIrradianceVolume);
    private initPipeline;
    setTextures(inputs: RenderTexture[], probeIrradianceMap: RenderTexture, probeDepthMap: RenderTexture): void;
    readBuffer(): Float32Array;
    compute(view: View3D, renderPassState: RendererPassState): void;
}
