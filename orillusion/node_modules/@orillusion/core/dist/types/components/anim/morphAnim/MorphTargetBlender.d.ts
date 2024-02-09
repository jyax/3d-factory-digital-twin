import { MorphTargetMapper } from "./MorphTargetKey";
import { ComponentBase } from "../../ComponentBase";
import { MorphTargetFrame } from "./MorphTargetFrame";
import { SkinnedMeshRenderer2 } from "../../renderer/SkinnedMeshRenderer2";
export declare class MorphTargetBlender extends ComponentBase {
    private _targetRenderers;
    private _vec3;
    private _matrix4;
    private _quaternion;
    init(param?: any): void;
    getMorphRenderersByKey(key: string): SkinnedMeshRenderer2[];
    cloneMorphRenderers(): {
        [key: string]: SkinnedMeshRenderer2[];
    };
    /**
     * Inject arkit data into the model and let all meshRender below the node accept morph animation
     * @param frame: BlendShape data output from ARKit.
     * @param keyMapper: Table mapping the relationship between the model's modelKey and ARKit's output arkitKey: {modelKey: arkitKey}.
     * @param multiplier: Scaling factor for movement data.
     * @returns
     */
    applyBlendShape(frame: MorphTargetFrame, keyMapper: MorphTargetMapper, multiplier?: number): void;
    private applyMorphTargetInfluence;
    private fetchMorphRenderers;
}
