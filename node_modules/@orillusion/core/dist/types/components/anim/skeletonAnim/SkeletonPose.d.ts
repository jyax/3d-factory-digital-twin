import { JointPose } from './JointPose';
import { Skeleton } from './Skeleton';
/**
 * Skeleton animation consists of many skeleton pose,
 * and each pose describes the transformation information of all bone
 * @group Animation
 */
export declare class SkeletonPose {
    /**
    * time of this pose in owner animation clip
    */
    time: number;
    protected _skeleton: Skeleton;
    protected _jointsPose: Array<JointPose>;
    protected mJointMatrixIndexTable: Array<number>;
    constructor(skeleton: Skeleton, useGlobalMatrix?: boolean);
    /**
    * build this pose from float32 array data
    */
    buildSkeletonPose(poseData: Float32Array): void;
    /**
    * Returns joints count of owner skeleton
    */
    get numJoint(): number;
    /**
    * Returns all joint pose
    */
    get joints(): Array<JointPose>;
    /**
    * Returns list of matrix's index
    */
    get jointMatrixIndexTable(): Array<number>;
    /**
    * Returns lerped skeletonPose from pose a to pose b
    * @param a selected pose No.1
    * @param b selected pose No.2
    * @param weight number
    */
    lerp(a: SkeletonPose, b: SkeletonPose, weight: number): void;
    /**
    * Copy skeleton pose from other skeleton pose
    * @param other source skeleton pose
    */
    copyFrom(other: SkeletonPose): void;
    /**
    * Reset this skeleton pose
    */
    reset(): void;
}
