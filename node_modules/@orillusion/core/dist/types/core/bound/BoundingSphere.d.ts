import { Frustum } from './Frustum';
import { IBound } from './IBound';
import { Object3D } from '../entities/Object3D';
import { Ray } from '../../math/Ray';
import { Vector3 } from '../../math/Vector3';
/**
 * BoundingSphere
 * @internal
 * @group Core
 */
export declare class BoundingSphere implements IBound {
    center: Vector3;
    extents: Vector3;
    max: Vector3;
    min: Vector3;
    size: Vector3;
    tmpVecA: Vector3;
    tmpVecB: Vector3;
    tmpVecC: Vector3;
    tmpVecD: Vector3;
    radius: number;
    diffBetweenPoints: Vector3;
    owner: any;
    forward: Vector3;
    worldCenter: Vector3;
    worldSize: Vector3;
    /**
     * @internal
     */
    private _center;
    constructor(center?: Vector3, radius?: number);
    updateBound(): void;
    containsPoint(point: Vector3): boolean;
    /**
     * @function
     * @name pc.BoundingSphere#intersectsRay
     * @description Test if a ray intersects with the sphere.
     * @param {pc.Ray} ray Ray to test against (direction must be normalized).
     * @param {pc.Vec3} [point] If there is an intersection, the intersection point will be copied into here.
     * @returns {Boolean} True if there is an intersection.
     */
    intersectsRay(ray: Ray, point: Vector3): boolean;
    /**
     * @function
     * @name pc.BoundingSphere#intersectsBoundingSphere
     * @description Test if a Bounding Sphere is overlapping, enveloping, or inside this Bounding Sphere.
     * @param {pc.BoundingSphere} sphere Bounding Sphere to test.
     * @returns {Boolean} true if the Bounding Sphere is overlapping, enveloping, or inside this Bounding Sphere and false otherwise.
     */
    intersectsBoundingSphere(sphere: BoundingSphere): boolean;
    calculateTransform(obj: Object3D): void;
    inFrustum(obj: Object3D, frustum: Frustum): 1 | 0 | 2;
    clone(): IBound;
    update(obj: Object3D): void;
    /**
     * @internal
     */
    merge(bound: IBound): void;
    setFromCenterAndSize(center: Vector3, size: number): void;
}
