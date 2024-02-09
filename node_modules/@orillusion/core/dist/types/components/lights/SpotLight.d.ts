import { View3D } from '../../core/View3D';
import { LightBase } from './LightBase';
/**
 * Spotlight source.
 * Light shines from a point in one direction, and as the light shines further away, the size of the light cone gradually increases.
 * Similar to a desk lamp, chandelier, or flashlight, this light source can produce shadows.
 * @group Lights
 */
export declare class SpotLight extends LightBase {
    constructor();
    init(): void;
    /**
     * Get the inner cone angle of the light source (as a percentage relative to the outer cone angle)
     */
    get innerAngle(): number;
    /**
     *
     * Set the inner cone angle of the light source (as a percentage relative to the outer cone angle)
     * @param {value} 0.0 - 100.0
     */
    set innerAngle(value: number);
    /**
     * Get the outer cone angle of the light source
     * @return number
     */
    get outerAngle(): number;
    /**
     * Set the outer cone angle of the light source
     * @param {value} 1.0 - 179.0
     */
    set outerAngle(value: number);
    /**
     *
     * Get the radius of the light source
     * @return number
     */
    get radius(): number;
    /**
     *
     * Set the radius of the light source
     * @param {value}
     */
    set radius(value: number);
    /**
     * Get the range of the light source
     */
    get range(): number;
    /**
     *
     * Set the range of the light source
     * @param {value}
     */
    set range(value: number);
    /**
     * Get the illumination distance of the light source
     */
    get at(): number;
    /**
     * Set the illumination distance of the light source
     */
    set at(value: number);
    start(): void;
    onUpdate(): void;
    onGraphic(view: View3D): void;
    /**
     * enable GUI debug
     */
    debug(): void;
    debugDraw(show: boolean): void;
}
