import { Vector3 } from './Vector3';
/**
 * Cubic Bezier Curve
 * @group Math
 */
export declare class CubicBezierCurve {
    private controlVertices;
    /**
     * @constructor
     * @param cvs controller points
     */
    constructor(cvs: Vector3[]);
    /**
     * update controller points
     * @param cvs controller points
     */
    setControlVertices(cvs: Vector3[]): void;
    /**
     * get position by calc from curve
     * @param t a position in range [0-1]
     * @returns Vector3
     */
    getPoint(t: number): Vector3;
    /**
     * get tagent by calc from curve
     * @param t a position in range [0-1]
     * @returns tagent direction
     * See: http://bimixual.org/AnimationLibrary/beziertangents.html
     */
    getTangent(t: number): Vector3;
    /**
     * get adjacent coordinates
     * @param pos position
     * @param paramThreshold threshold value
     * @returns a position in range [0-1]
     */
    getClosestParam(pos: Vector3, paramThreshold?: number): number;
    /**
     * get adjacent coordinates by given range
     * @param pos position
     * @param beginT range from
     * @param endT range end
     * @param thresholdT threshold value
     * @returns
     */
    getClosestParamRec(pos: Vector3, beginT: number, endT: number, thresholdT: number): number;
}
