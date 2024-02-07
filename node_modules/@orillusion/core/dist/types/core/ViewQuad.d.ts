/// <reference types="@webgpu/types" />
import { MeshRenderer } from '../components/renderer/MeshRenderer';
import { Texture } from '../gfx/graphics/webGpu/core/texture/Texture';
import { RTFrame } from '../gfx/renderJob/frame/RTFrame';
import { Object3D } from './entities/Object3D';
import { RendererPassState } from '../gfx/renderJob/passRenderer/state/RendererPassState';
import { View3D } from './View3D';
import { Material } from '../materials/Material';
import { QuadShader } from '../loader/parser/prefab/mats/shader/QuadShader';
/**
 * @internal
 * @group Entity
 */
export declare class ViewQuad extends Object3D {
    width: number;
    height: number;
    quadRenderer: MeshRenderer;
    material: Material;
    rendererPassState: RendererPassState;
    quadShader: QuadShader;
    constructor(vs: string, fs: string, rtFrame: RTFrame, multisample?: number, f?: boolean);
    /**
     * By inputting a map to viewQuad and setting corresponding
     * processing shaders, the corresponding results are output for off-screen rendering
     * Can also be directly used as the final display rendering result rendering canvas
     * @param viewQuad
     * @see ViewQuad
     * @param scene3D
     * @see Scene3D
     * @param command
     */
    renderTarget(view: View3D, viewQuad: ViewQuad, command: GPUCommandEncoder): void;
    /**
     * Output to screen through screen based shading
     * @param viewQuad
     * @see ViewQuad
     * @param scene3D
     * @see Scene3D
     * @param command
     * @param colorTexture
     */
    renderToViewQuad(view: View3D, viewQuad: ViewQuad, command: GPUCommandEncoder, colorTexture: Texture): void;
}
