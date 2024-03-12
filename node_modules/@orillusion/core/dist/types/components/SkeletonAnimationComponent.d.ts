import { Object3D } from "../core/entities/Object3D";
import { StorageGPUBuffer } from "../gfx/graphics/webGpu/core/buffer/StorageGPUBuffer";
import { ComponentBase } from "./ComponentBase";
import { Skeleton } from "./anim/skeletonAnim/Skeleton";
import { SkeletonAnimationClip } from "./anim/skeletonAnim/SkeletonAnimationClip";
import { SkeletonAnimationClipState } from "./anim/skeletonAnim/SkeletonAnimationClipState";
import { SkeletonPose } from "./anim/skeletonAnim/SkeletonPose";
/**
 * skeleton animation
 * @group Animation
 */
export declare class SkeletonAnimationComponent extends ComponentBase {
    /**
     * Whether it is playing
     */
    isPlaying: boolean;
    /**
     * Global animation time scaling
     */
    timeScale: number;
    protected _skeleton: Skeleton;
    protected _clips: SkeletonAnimationClip[];
    protected _clipStates: Map<string, SkeletonAnimationClipState>;
    protected _mixSkeletonPose: SkeletonPose;
    protected _mixTempSkeletonPose: SkeletonPose;
    protected _currentClipState: SkeletonAnimationClipState;
    protected _bindList: Array<any>;
    protected _jointMatrixIndexTableBuffer: StorageGPUBuffer;
    protected _crossFadeState: SkeletonAnimationCrossFadeState;
    constructor();
    start(): void;
    /**
     * The name of the currently playing animation
     */
    get currName(): string;
    /**
     * Skeleton data
     */
    set skeleton(value: Skeleton);
    /**
     * Skeleton data
     */
    get skeleton(): Skeleton;
    /**
     * Current final skeleton posture data
     */
    get finalSkeletonPose(): SkeletonPose;
    /**
     * Bone matrix index table data
     */
    get jointMatrixIndexTableBuffer(): StorageGPUBuffer;
    /**
     * Get the bone index information by the bone name
     * @param skinJointsName bone name
     * @returns bone index
     */
    getJointIndexTable(skinJointsName: Array<string>): Array<number>;
    /**
     * Add a skeleton animation clip
     * @param clip Skeletal animation clip
     */
    addAnimationClip(clip: SkeletonAnimationClip): void;
    /**
     * Gets the animation clip data object with the specified name
     * @param name Name of animation
     * @returns Animation clip data object
     */
    getAnimationClip(name: string): SkeletonAnimationClip;
    /**
     * Gets all animation clip data objects
     * @returns Animation clip data object
     */
    getAnimationClips(): SkeletonAnimationClip[];
    /**
     * Gets the animation clip state object with the specified name
     * @param name Name of animation
     * @returns Animation clip state object
     */
    getAnimationClipState(name: string): SkeletonAnimationClipState;
    /**
     * Gets all animation clip state objects
     * @returns Animation clip state object
     */
    getAnimationClipStates(): Map<string, SkeletonAnimationClipState>;
    /**
     * stop playing
     */
    pause(): void;
    /**
     * Resume playback
     */
    resume(): void;
    /**
     * Play the specified animation
     * @param animName The data set name for the animation
     * @param speed Animation playback speed, default value is 1.0
     * @param reset When true, each play starts with the first frame
     * @returns
     */
    play(animName: string, speed?: number, reset?: boolean): boolean;
    /**
     * Fades the current animation and fades into another animation state for a specified time.
     * @param animName The name of the animation to fade in.
     * @param crossTime The time of transition, in seconds.
     * @returns
     */
    crossFade(animName: string, crossTime: number): void;
    /**
     * Set the animation loop
     * @param animName The data set name for the animation
     * @param isLoop   If true, loop the animation
     */
    setAnimIsLoop(animName: string, isLoop: boolean): void;
    /**
     * Add joint bindings to the object
     * @param jointName Name of joint
     * @param obj       Object of binding
     */
    addJointBind(jointName: string, obj: Object3D): void;
    /**
     * Removes the joint binding of the specified object
     * @param jointName Name of joint
     * @param obj Object of binding
     */
    removeJointBind(obj: Object3D): void;
    /**
     * @internal
     */
    onUpdate(): void;
    /**
     * Clones the current component to the specified object
     * @param obj target object
     */
    cloneTo(obj: Object3D): void;
    protected setCurrentClipState(clipState: SkeletonAnimationClipState): void;
}
/**
 * @internal
 * @group Animation
 */
declare class SkeletonAnimationCrossFadeState {
    inClip: SkeletonAnimationClipState;
    outClip: SkeletonAnimationClipState;
    currentTime: number;
    crossFadeTime: number;
    constructor(inClip: SkeletonAnimationClipState, outClip: SkeletonAnimationClipState, time: number);
    reset(inClip: SkeletonAnimationClipState, outClip: SkeletonAnimationClipState, time: number): void;
    update(delta: number): void;
}
export {};
