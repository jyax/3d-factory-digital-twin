import { Vector3 } from '../math/Vector3';
/**
 * extra function of vector3
 * @group Util
 */
export declare class Vector3Ex {
    /**
     * vector3 add
     * @param v1
     * @param v2
     * @param target
     * @returns
     */
    static add(v1: Vector3, v2: Vector3, target?: Vector3): Vector3;
    /**
     * vector3 sub
     * @param v1
     * @param v2
     * @param target
     * @returns
     */
    static sub(v1: Vector3, v2: Vector3, target?: Vector3): Vector3;
    /**
     * vector3 mul
     * @param v1
     * @param v2
     * @param target
     * @returns
     */
    static mul(v1: Vector3, v2: Vector3, target?: Vector3): Vector3;
    /**
     * vector3 mul
     * @param v1
     * @param v2
     * @param target
     * @returns
     */
    static mulScale(v1: Vector3, v: number, target?: Vector3): Vector3;
    /**
     * vector3 div
     * @param v1
     * @param v2
     * @param target
     * @returns
     */
    static div(v1: Vector3, v2: Vector3, target?: Vector3): Vector3;
    /**
     * normalize
     * @param v1 source vector
     * @returns result vector
     */
    static normalize(v1: Vector3): Vector3;
    /**
     * dot
     * @param v1 first vector
     * @param v2 second vector
     * @returns result
     */
    static dot(v1: Vector3, v2: Vector3): number;
    /**
     * Calculate the angle between two vectors
     * @param v1 first vector
     * @param v2 second vector
     * @returns Angle result in radians
     */
    static calculateVectorAngle_xz(v1: Vector3, v2: Vector3): number;
    /**
     *
     * Calculate the distance between two points
     * @static
     * @param {Vector3} v1 first vector
     * @param {Vector3} v2 second vector
     * @return {*} distance
     */
    static distance(v1: Vector3, v2: Vector3): number;
    /**
     * make a Random 3D Vector
     * @param min The min random value of vector components
     * @param max The max random value of vector components
     * @returns random vector
     */
    static getRandomXYZ(min?: number, max?: number): Vector3;
    /**
     * make a Random 3D Vector
     * @param min The min random value of vector component-x
     * @param max The max random value of vector component-x
     * @param yMin The min random value of vector component-y
     * @param yMax The max random value of vector component-y
     * @returns random vector
     */
    static getRandomV3(min: number, max: number, yMin: number, yMax: number): Vector3;
    static sphere(radius: number): Vector3;
    static sphereXYZ(radiusMin: number, radiusMax: number, x?: number, y?: number, z?: number): Vector3;
}
