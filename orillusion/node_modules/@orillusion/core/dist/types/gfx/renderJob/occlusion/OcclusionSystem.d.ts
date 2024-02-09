import { RenderNode } from '../../../components/renderer/RenderNode';
import { Camera3D } from '../../../core/Camera3D';
import { Scene3D } from '../../../core/Scene3D';
import { CollectInfo } from '../collect/CollectInfo';
/**
 * @internal
 * @group Post
 */
export declare class OcclusionSystem {
    frustumCullingList: Float32Array;
    zVisibleList: Float32Array;
    private _renderList;
    static enable: boolean;
    constructor();
    /**
     * Get GPU Test Occlusion test
     * @param index
     * @returns
     */
    occlusionRenderNodeTest(index: number): number;
    /**
     * Get GPU Pixel depth visible Test
     * @param index
     * @returns
     */
    zDepthRenderNodeTest(index: number): number;
    update(camera: Camera3D, scene: Scene3D): void;
    collect(nodes: CollectInfo, camera: Camera3D): void;
    renderCommitTesting(camera: Camera3D, renderNode: RenderNode): boolean;
}
