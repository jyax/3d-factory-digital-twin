import { Matrix4 } from "../../math/Matrix4";
import { Ray } from "../../math/Ray";
import { ColliderShape, HitInfo } from "./ColliderShape";
/**
 * Box shaped collision body.
 * It is a basic box shaped primitive collision body.
 * @group Collider
 */
export declare class BoxColliderShape extends ColliderShape {
    private _pickRet;
    private readonly box;
    /**
     * @constructor
     */
    constructor();
    /**
     * @internal
     * @param ray
     * @param fromMatrix
     * @returns
     */
    rayPick(ray: Ray, fromMatrix: Matrix4): HitInfo;
}
