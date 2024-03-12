import { Texture } from '../gfx/graphics/webGpu/core/texture/Texture';
import { View3D } from './View3D';
import { Object3D } from './entities/Object3D';
/**
 * It represents an independent 3D scene where 3D objects can be created and manipulated.
 * @group Entity
 */
export declare class Scene3D extends Object3D {
    private _envMap;
    private skyObject;
    envMapChange: boolean;
    view: View3D;
    /**
     *
     * @constructor
     */
    constructor();
    /**
     *
     * get environment texture
     */
    get envMap(): Texture;
    /**
     * set environment texture
     */
    set envMap(value: Texture);
    /**
     * Exposure of Sky Box. A larger value produces a sky box with stronger exposure and a brighter appearance.
     *  A smaller value produces a sky box with weaker exposure and a darker appearance.
     */
    get exposure(): number;
    /**
     * Set the exposure of the Sky Box.
     */
    set exposure(value: number);
    /**
     * Get the roughness of the Sky Box.
     */
    get roughness(): number;
    /**
     * Set the roughness of the Sky Box.
     */
    set roughness(value: number);
}
