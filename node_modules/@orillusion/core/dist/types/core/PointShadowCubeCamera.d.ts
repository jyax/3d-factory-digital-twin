import { Camera3D } from './Camera3D';
import { Object3D } from './entities/Object3D';
/**
 * A cubic camera containing 6 perspective cameras.
 * @internal
 * @group Entity
 */
export declare class PointShadowCubeCamera extends Object3D {
    up_camera: Camera3D;
    down_camera: Camera3D;
    left_camera: Camera3D;
    right_camera: Camera3D;
    front_camera: Camera3D;
    back_camera: Camera3D;
    set label(v: string);
    /**
     *
     * @constructor
     * @param near distance from origin to near plane of frustum
     * @param far distance from origin to far plane of frustum
     */
    constructor(near?: number, far?: number, fov?: number, isShadow?: boolean);
    initCubeCamera(near: number, far: number, fov?: number, isShadow?: boolean): void;
}
