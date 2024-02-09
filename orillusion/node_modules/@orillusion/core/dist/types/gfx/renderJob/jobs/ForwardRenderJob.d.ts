import { View3D } from '../../../core/View3D';
import { RendererJob } from './RendererJob';
/**
 * Forward+
 * Every time a forward rendering is performed,
 * the entity of the object is rendered, and
 * the color and depth buffer values are calculated.
 * The depth buffer will determine whether a tile is visible.
 * If visible, the values in the color buffer will be updated.
 * @group engine3D
 */
export declare class ForwardRenderJob extends RendererJob {
    constructor(view: View3D);
    start(): void;
    /**
     * @internal
     */
    debug(): void;
}
