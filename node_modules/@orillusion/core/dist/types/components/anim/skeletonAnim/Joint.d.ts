import { Quaternion } from '../../../math/Quaternion';
import { Vector3 } from '../../../math/Vector3';
/**
 * Bone and joint data
 * @internal
 * @group Animation
 */
export declare class Joint {
    /**
     * Name of bone joint
     */
    name: string;
    /**
     * Bone joint index
     */
    index: number;
    /**
     * Bone instanceID
     */
    instanceID: string;
    /**
     * The parent of a bone joint
     */
    parent: Joint;
    /**
     * Bone joint child object
     */
    /**
     * The scaling value of the bone joint
     */
    scale: Vector3;
    /**
     * The rotation Angle of the bone and joint
     */
    rotation: Quaternion;
    /**
     * The position of the bone joint
     */
    translation: Vector3;
    constructor(name?: string);
}
