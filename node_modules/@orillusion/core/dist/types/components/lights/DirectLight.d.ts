import { Camera3D } from '../../core/Camera3D';
import { LightBase } from './LightBase';
/**
 *
 *Directional light source.
 *The light of this light source is parallel, for example, sunlight. This light source can generate shadows.
 * @group Lights
 */
export declare class DirectLight extends LightBase {
    shadowCamera: Camera3D;
    constructor();
    init(): void;
    start(): void;
    /**
     *
     * Get the radius of a directional light source
     */
    get radius(): number;
    /**
     * Set the radius of a directional light source
     */
    set radius(value: number);
    /**
     *
     * Get the radius of a directional light source
     */
    get indirect(): number;
    /**
     * Set the radius of a directional light source
     */
    set indirect(value: number);
    /**
     * enable light debug gui
     */
    debug(): void;
}
