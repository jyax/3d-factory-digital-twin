import { Vector3 } from './Vector3';
/**
 * 3D Bezier Curve
 * @group Math
 */
export declare class Bezier3D {
    private static tmp_points;
    /**
     * get cubic curve point value from t at bezier data
     * @param t interval value
     * @param p0 start point
     * @param c1 left control point
     * @param c2 right control point
     * @param p3 end point
     * @returns cubic curve point
     */
    static calculateCubicBezierPoint(t: number, p0: Vector3, c1: Vector3, c2: Vector3, p3: Vector3): Vector3;
    /**
     * get curve point from three point bezier curve
     * @param t interval value
     * @param p0 start point
     * @param c1 contrl point
     * @param p1 end point
     * @returns get bezier point at curve
     */
    static bezierPoint(t: number, p0: Vector3, c1: Vector3, p1: Vector3): Vector3;
    private static calculateCubicBezierPoints;
    private static bezierPathValue;
}
