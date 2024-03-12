import { Camera3D } from '../core/Camera3D';
import { Object3D } from '../core/entities/Object3D';
import { Vector3 } from '../math/Vector3';
/**
 * Camera3D tool class
 * @group Util
 */
export declare class CameraUtil {
    /**
     * create a Camera3D component
     * @param parent parent object3D
     * @param name set name to the owner of this camera3D
     * @returns
     */
    static createCamera3DObject(parent?: Object3D, name?: string): Camera3D;
    /**
     * @internal
     * @param object3D
     * @param parent
     * @param name
     * @returns
     */
    static createCamera3D(object3D?: Object3D, parent?: Object3D, name?: string): Camera3D;
    /**
     * @internal
     * @param sX
     * @param sY
     * @param sZ
     * @param camera
     * @returns
     */
    static UnProjection(sX: number, sY: number, sZ?: number, camera?: Camera3D): Vector3;
    /**
     * @internal
     * @param point
     * @param camera
     * @param target
     * @returns
     */
    static Projection(point: Vector3, camera: Camera3D, target?: Vector3): Vector3;
    /**
     * @internal
     * @param sceneX
     * @param sceneY
     * @param z
     * @param camera
     * @param target
     * @returns
     */
    static UnProjection2(sceneX: number, sceneY: number, z: number, camera: Camera3D, target: Vector3): Vector3;
}
