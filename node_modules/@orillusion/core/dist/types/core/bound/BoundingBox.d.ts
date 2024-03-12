import { Frustum } from './Frustum';
import { IBound } from './IBound';
import { Object3D } from '../entities/Object3D';
import { Ray } from '../../math/Ray';
import { Vector3 } from '../../math/Vector3';
/**
 * BoundingBox
 * @internal
 * @group Core
 */
export declare class BoundingBox implements IBound {
    /**
     * The center of the bounding box.
     */
    center: Vector3;
    /**
     *
     * The range of the bounding box. This is always half the size of these Bounds.
     */
    extents: Vector3;
    /**
     *
     *  The maximum point of the box body. This always equals center+extensions.
     */
    max: Vector3;
    /**
     *
     *  The minimum point of the box body. This always equals center extensions.
     */
    min: Vector3;
    /**
     *
     * The total size of the box. This is always twice as much as extensions.
     */
    size: Vector3;
    private static maxVector3;
    private static minVector3;
    /**
     *
     * Create a new Bounds.
     * @param center the center of the box.
     * @param size The size of the box.
     */
    constructor(center?: Vector3, size?: Vector3);
    makeEmpty(): this;
    setFromMinMax(min: Vector3, max: Vector3): this;
    private init;
    setFromCenterAndSize(center: Vector3, size: Vector3): this;
    inFrustum(obj: Object3D, frustum: Frustum): number;
    merge(bound: BoundingBox): void;
    intersects(bounds: IBound): boolean;
    intersectsSphere(sphere: IBound): boolean;
    /**
     *
     * Does the target bounding box intersect with the bounding box
     * @param box
     * @returns
     */
    intersectsBox(box: IBound): boolean;
    equals(bounds: IBound): boolean;
    expandByPoint(point: Vector3): void;
    static fromPoints(points: Vector3[]): BoundingBox;
    calculateTransform(obj: Object3D): void;
    clone(): IBound;
    intersectsRay(ray: Ray, point: Vector3): boolean;
    containsPoint(point: Vector3): boolean;
    containsBox(box: BoundingBox): boolean;
    updateBound(): void;
    destroy(force?: boolean): void;
}
