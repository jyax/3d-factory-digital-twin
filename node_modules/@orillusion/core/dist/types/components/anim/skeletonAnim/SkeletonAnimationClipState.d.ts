import { SkeletonAnimationClip } from './SkeletonAnimationClip';
import { SkeletonPose } from './SkeletonPose';
/**
 * Skeletal data at specific time points, skeletal animation interpolation operations
 * @internal
 * @group Animation
 */
export declare class SkeletonAnimationClipState {
    loop: boolean;
    speed: number;
    t: number;
    time: number;
    weight: number;
    currFrame: number;
    lastFrame: number;
    nextFrame: number;
    clip: SkeletonAnimationClip;
    animation: any;
    protected _isEnd: boolean;
    protected _currSkeletonPose: SkeletonPose;
    constructor(clip: SkeletonAnimationClip);
    reset(): void;
    /**
    * Returns animation clip's name.
    */
    get name(): string;
    /**
    * Returns current skeleton pose.
    */
    get currSkeletonPose(): SkeletonPose;
    /**
    * update animation clip, it will change key frame to sample animation clip.
    * @param delta time from last frame to now
    */
    update(delta: number): void;
}
