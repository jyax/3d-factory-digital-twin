import { Color } from '../math/Color';
import { Triangle } from '../math/Triangle';
import { Vector2 } from '../math/Vector2';
import { Vector3 } from '../math/Vector3';
/**
 * Pick up result information, including target Object3D, position, UV
 * @internal
 * @group IO
 */
export declare class PickResult {
    /**
     * the intersection point (local coordinates) on the model.
     */
    localPosition: Vector3;
    /**
     * the intersection point (world coordinates) on the model.
     */
    worldPosition: Vector3;
    /**
     * the uv on the model.
     * Only when the PickType of the object is UVPick and the model has UV will it be valid
     * @see PickType
     */
    uv: Vector2;
    /**
     * the triangle index at the intersection position of mesh
     */
    faceIndex: number;
    isIn: boolean;
    t: number;
    u: number;
    v: number;
    /**
     * the triangle at the intersection position of mesh
     */
    triangle: Triangle;
    /**
     * @internal
     * the uv0 at the intersection position of mesh
     */
    v0: number;
    /**
     * @internal
     * the uv1 at the intersection position of mesh
     */
    v1: number;
    /**
     * @internal
     */
    v2: number;
    /**
     * @internal
     */
    pickList: any;
    /**
    * @internal
    */
    color: Color;
}
