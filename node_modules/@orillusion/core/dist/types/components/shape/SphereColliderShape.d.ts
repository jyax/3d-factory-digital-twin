import { Matrix4 } from "../../math/Matrix4";
import { Ray } from "../../math/Ray";
import { Vector3 } from "../../math/Vector3";
import { ColliderShape } from "./ColliderShape";
/**
 * Spherical collision body
 * @group Collider
 */
export declare class SphereColliderShape extends ColliderShape {
    private _pickRet;
    private readonly box;
    /**
     * radius of this collider
     */
    radius: number;
    /**
     * @constructor
     * @param radius radius of this collider
     */
    constructor(radius: number);
    rayPick(ray: Ray, fromMatrix: Matrix4): {
        intersect: boolean;
        intersectPoint?: Vector3;
        distance: number;
    };
}
