import { RenderNode } from '../../../components/renderer/RenderNode';
/**
 * @internal
 * @group Post
 */
export declare class CollectInfo {
    opaqueList: RenderNode[];
    transparentList: RenderNode[];
    sky: RenderNode;
    clean(): void;
}
