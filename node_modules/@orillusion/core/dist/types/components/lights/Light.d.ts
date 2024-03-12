import { View3D } from '../../core/View3D';
import { LightBase } from './LightBase';
/**
 *Point light source.
 *A single point light source that illuminates all directions.
 *A common example is to simulate the light emitted by a light bulb, where a point light source cannot create shadows.
 * @group Lights
 */
export declare class Light extends LightBase {
    constructor();
    init(): void;
    /**
     *
     * Get the range of the light source
     * @return {number}
     */
    get range(): number;
    /**
     *
     * Set the range of the light source
     * @param {number}
     */
    set range(value: number);
    /**
     *
     * Get the illumination distance of the light source
     * @type {number}
     * @memberof PointLight
     */
    get at(): number;
    /**
     *
     * Set the illumination distance of the light source
     * @param {value} It will decay linearly from the maximum value to the current light position at a distance of 0,
     * with a default value of 0. This means that the intensity of the light will not decrease due to distance
     * @memberof PointLight
     */
    set at(value: number);
    /**
     * Get the radius to control the light
     */
    get radius(): number;
    /**
     * Set the radius of the control light
     */
    set radius(value: number);
    /**
     * Get the radius to control the light
     */
    get quadratic(): number;
    /**
     * Set the radius of the control light
     */
    set quadratic(value: number);
    start(): void;
    onUpdate(): void;
    onGraphic(view?: View3D): void;
    /**
     *  enable GUI debug
     */
    debug(): void;
    debugDraw(show: boolean): void;
}
