import { GeometryBase, Matrix4, Ray, ColliderShape, HitInfo } from '@orillusion/core';
/**
 * Mesh collision body
 * @group Collider
 */
export declare class MeshColliderShape extends ColliderShape {
    /**
     * meshComponent
     */
    mesh: GeometryBase;
    private static triangle;
    private _pickRet;
    constructor();
    rayPick(ray: Ray, fromMatrix: Matrix4): HitInfo;
}
