import { Ray } from './Ray';
import { Vector3 } from './Vector3';
/**
 * Plane mathematics class
 * @group Math
 */
export declare class Plane {
    /**
     * Center position of plane
     */
    point: Vector3;
    /**
     * Plane normal vector
     */
    normal: Vector3;
    /**
     * @internal
     */
    private _tmpVecA;
    /**
     * Constructs a new plane object
     * @param pos Plane position
     * @param normal Plane normal quantity
     */
    constructor(pos: Vector3, normal: Vector3);
    /**
     * Clones the current plane object
     * @returns New plane object
     */
    clone(): Plane;
    /**
     * Determine whether the plane intersects a line segment and calculate the intersection point
     * @param start Starting point of line segment
     * @param end End point of line segment
     * @param point Point of output intersection
     * @returns Returns whether it intersects
     */
    intersectsLine(start: Vector3, end: Vector3, point: Vector3): boolean;
    /**
     * Determine whether the plane intersects a ray and calculate the intersection point
     * @param ray Ray of input
     * @param outPoint Point of output intersection
     * @returns Returns whether it intersects
     */
    intersectsRay(ray: Ray, targetPoint?: Vector3): boolean;
}
