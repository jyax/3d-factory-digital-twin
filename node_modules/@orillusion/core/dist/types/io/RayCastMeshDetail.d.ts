import { Triangle } from '../math/Triangle';
import { Ray } from '../math/Ray';
import { Vector3 } from '../math/Vector3';
import { PickResult } from './PickResult';
/**
 * @internal
 * @group IO
 */
export declare class RayCastMeshDetail {
    /**
     * define a tiny number
     */
    static EPS: number;
    /**
     * define a maximum float
     */
    static FLT_MAX: number;
    /**
     * calculate the distance between a point and a plane(defined by point a, point b, point c)
     */
    static distPtTri(p: Vector3, a: Vector3, b: Vector3, c: Vector3): number;
    private static _info;
    static IntersectTriangle(ray: Ray, face: Triangle, backfaceCulling: boolean): PickResult;
    private static _u0;
    private static _u1;
    private static _u2;
}
