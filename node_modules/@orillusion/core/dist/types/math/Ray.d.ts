import { IBound } from "../core/bound/IBound";
import { Triangle } from "./Triangle";
import { Matrix4 } from "./Matrix4";
import { Vector3 } from "./Vector3";
/**
 * Ray
 * @group Math
 */
export declare class Ray {
    /**
     * Ray starting point
     */
    origin: Vector3;
    /**
     * length
     */
    length: number;
    private static _rayl;
    private static _smallnum;
    private _vector;
    private _dir;
    /**
     * Build a new ray object
     * @param origin Ray starting point
     * @param dir Ray direction
     */
    constructor(origin?: Vector3, dir?: Vector3);
    /**
     * Ray direction
     */
    get direction(): Vector3;
    set direction(dir: Vector3);
    /**
     * Clone a new Ray object
     * @returns
     */
    clone(): Ray;
    /**
     * Determine whether it intersects a bounding box
     * @param box bounding box
     * @returns whether intersect
     */
    intersectBox(box: IBound, target?: Vector3): Vector3;
    /**
     * Calculate a point on the ray
     * @param t Length scalar
     * @param target output target
     * @returns result
     */
    pointAt(t: number, target?: Vector3): Vector3;
    /**
     * Sets the ray to be a copy of the original ray
     * @param src Ray object source
     * @returns New ray object
     */
    copy(src: Ray): this;
    /**
     * Fast to the approximate ray direction
     * @param dir direction
     */
    setApproxDirection(dir: Vector3): void;
    /**
     * Set ray origin
     * @param origin ray origin
     */
    setOrigin(origin: Vector3): void;
    /**
     * Get ray origin
     */
    getOrigin(): Vector3;
    /**
     * Gets the point at the specified position on the ray
     * @param t Length position
     * @returns Returns a point at the specified location
     */
    getPoint(t: number): Vector3;
    /**
     * Calculate the distance from a point
     * @param P Specify Point
     * @returns result
     */
    sqrDistToPoint(P: Vector3): number;
    /**
     * Applied matrix transformation
     * @param mat4 matrix
     */
    applyMatrix(mat4: Matrix4): void;
    private _v0;
    private _v1;
    private _v2;
    /**
     * Calculates whether a specified point is inside a triangle
     * @param P point
     * @param A Triangle vertex 1
     * @param B Triangle vertex 2
     * @param C Triangle vertex 3
     * @returns whether it is inside a triangle
     */
    pointInTriangle(P: Vector3, A: Vector3, B: Vector3, C: Vector3): boolean;
    private _E1;
    private _E2;
    private _P;
    private _T;
    private _Q;
    /**
     * Determine whether a ray intersects a triangle
     * @param orig Ray starting point
     * @param dir Ray direction
     * @param face triangle
     * @returns point of intersection
     */
    intersectTriangle(orig: Vector3, dir: Vector3, face: Triangle): Vector3;
    /**
     * Determine whether a ray intersects the sphere
     * @param o Ray starting point
     * @param dir Ray direction
     * @param center Sphere center
     * @param radius radius of sphericity
     * @returns point of intersection
     */
    intersectSphere(o: Vector3, dir: Vector3, center: Vector3, radius: number): Vector3;
    /**
     * A test of the intersection between a ray and
     * a given line segment within a given tolerance (threshold)
     * @param sega The first point of a line segment used to test the intersection
     * @param segb The second point of a line segment used to test the intersection
     * @param threshold Margin, if the ray does not intersect the line segment but is close to the given threshold, the intersection is successful
     * @return If there is an intersection, then the distance from the ray origin to the intersection, if there is no intersection, is -1
     */
    intersectionSegment(sega: Vector3, segb: Vector3, threshold: number): {
        out: Vector3;
        length: number;
    };
    private get_vec;
}
