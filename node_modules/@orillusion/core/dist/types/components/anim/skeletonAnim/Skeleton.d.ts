import { Joint } from './Joint';
/**
 * Skeleton data
 * @internal
 * @group Animation
 */
export declare class Skeleton {
    /**
     * Link information for all joints
     */
    joints: Array<Joint>;
    constructor(joints?: Array<Joint>);
    get numJoint(): number;
    addJoint(joint: Joint): void;
    getJointName(jointIndex: number): string;
    getJointParentIndex(jointIndex: number): number;
    getJointByName(name: string): Joint;
}
