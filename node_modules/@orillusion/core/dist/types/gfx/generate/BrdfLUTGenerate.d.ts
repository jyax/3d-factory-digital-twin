import { VirtualTexture } from '../../textures/VirtualTexture';
import { ComputeShader } from '../graphics/webGpu/shader/ComputeShader';
/**
 * @internal
 * @group GFX
 */
export declare class BRDFLUTGenerate {
    compute: ComputeShader;
    constructor();
    generateBRDFLUTTexture(): VirtualTexture;
}
