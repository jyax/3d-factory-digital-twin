import { Vector2 } from './Vector2';
/**
 * 2D Bezier Curve
 * @group Math
 */
export declare class Bezier2D {
    private _points;
    private _cacheValue;
    /**
     * instance bezier class
     */
    constructor(vec2Ds?: Vector2[]);
    /**
     * get all bezier 2d points
     */
    get points(): Vector2[];
    /**
     * set bezier 2d point[x,y] list must great 4
     */
    set points(value: Vector2[]);
    /**
     * get point2d at curve
     * @param v 0.0 ~ 1.0
     * @returns return point2D at curve
     */
    getValue(v: number): Vector2;
    /**
     * caclute bezier curve points at line [ 0.0 , 1.0 ]
     * @param anchorpoints bezier anchor
     * @param pointsAmount point count
     * @returns get a bezier curve [Bezier2D]
     */
    static createBezierPoints(anchorpoints: Vector2[], pointsAmount: number): Bezier2D;
    private static multiPointBezier;
}
