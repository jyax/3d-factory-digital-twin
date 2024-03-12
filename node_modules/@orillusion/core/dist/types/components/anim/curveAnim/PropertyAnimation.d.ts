import { Object3D } from '../../../core/entities/Object3D';
import { ComponentBase } from '../../ComponentBase';
import { AnimatorEventKeyframe } from './PropertyAnimationEvent';
import { PropertyAnimClip } from './PropertyAnimClip';
/**
 * Attribute Animation Component
 * @group Animation
 */
export declare class PropertyAnimation extends ComponentBase {
    private _animator;
    private _clips;
    /**
     * name of default animation clip
     */
    defaultClip: string;
    /**
     * is it play auto
     */
    autoPlay: boolean;
    private _seekEvent;
    private _completeEvent;
    private _keyFrameList;
    constructor();
    /**
     * register a event to animator
     * @param frame source AnimatorEventKeyframe
     */
    registerEventKeyFrame(frame: AnimatorEventKeyframe): void;
    /**
     * @internal
     */
    init(): void;
    /**
     * @internal
     */
    onUpdate(): void;
    /**
     * append a perperty animation clip
     * @param clip source PropertyAnimClip
     */
    appendClip(clip: PropertyAnimClip): void;
    private statusCall;
    /**
     * set playing speed
     */
    set speed(value: number);
    /**
     * get playing speed
     */
    get speed(): number;
    /**
     * stop playing
     */
    stop(): void;
    /**
     * stop or resume playing
     */
    toggle(): void;
    /**
     * get animation clip by clip name
     * @param clip name of PropertyAnimClip
     * @returns
     */
    getClip(name: string): PropertyAnimClip;
    /**
     * get animation clip which is playing now
     */
    get currentClip(): PropertyAnimClip;
    /**
     * get time of current animator
     */
    get time(): number;
    /**
     * seek the animation to assign time
     * @param time assign time
     */
    seek(time: number): void;
    /**
     * play animation by given name
     * @param name animation name
     * @param reset if true, play the animation from time 0
     * @returns
     */
    play(name: string, reset?: boolean): PropertyAnimClip;
    /**
     * @internal
     *
     */
    start(): void;
    copyComponent(from: this): this;
    /**
     * Create a new PropertyAnimation component, copy the properties of the current component,
     * and add them to the target object.
     * @param obj target object3D
     */
    cloneTo(obj: Object3D): void;
}
