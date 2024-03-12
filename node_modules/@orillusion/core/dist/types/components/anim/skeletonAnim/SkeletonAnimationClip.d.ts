import { Skeleton } from './Skeleton';
import { SkeletonPose } from './SkeletonPose';
import { OAnimationEvent } from '../OAnimationEvent';
/**
 *
 * SkeletonAnimationClip contains all keyframe data of one skeleton animation
 * @internal
 * @group Animation
 */
export declare class SkeletonAnimationClip {
    name: string;
    protected _skeleton: Skeleton;
    protected _skeletonPoses: Array<SkeletonPose>;
    protected _animationClipData: Float32Array;
    protected _events: Array<OAnimationEvent>;
    constructor(name: string, skeleton: Skeleton, numFrame: number, bufferData: Float32Array);
    get totalTime(): number;
    get frameRate(): number;
    get skeleton(): Skeleton;
    get numFrame(): number;
    get animationClipData(): Float32Array;
    getSkeletonPose(frame: number): SkeletonPose;
    /**
    * Returns lerped skeletonPose between currFrame and nextFrame
    * @param currFrame selected frame No.1
    * @param nextFrame selected frame No.2
    * @param weight number
    * @param dst  result SkeletonPose
    */
    getLerpSkeletonPose(currFrame: number, nextFrame: number, weight: number, dst: SkeletonPose): SkeletonPose;
    /**
    * create one skeletonAnimationClip from startTime to endTime
    * @param name the name of new animation clip
    * @param startTime set time of animation clip start from
    * @param endTime set time of animation clip end of
    */
    createSubClip(name: string, startTime: number, endTime: number): SkeletonAnimationClip;
    /**
    * register a event in this animation clip.
    * @param eventName event name
    * @param startTime number
    */
    addEvent(eventName: string, triggerTime: number): void;
    /**
    * remove a event in this animation clip
    * @param eventName event name
    */
    removeEvent(eventName: string): void;
    /**
    * Returns all AnimationEvent of this animationClip
    * @param eventName event name
    */
    getEvents(): Array<OAnimationEvent>;
}
