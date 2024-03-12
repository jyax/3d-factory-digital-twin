/**
 * Time Interpolator interface
 * @internal
 * @group Plugin
 */
export interface TimeInterpolator {
    /**
     * Maps a value representing the elapsed fraction of an animation to a value that represents
     * the interpolated fraction. This interpolated value is then multiplied by the change in
     * value of an animation to derive the animated value at the current elapsed animation time.
     *
     * @param input A value between 0 and 1.0 indicating our current point
     *        in the animation where 0 represents the start and 1.0 represents
     *        the end
     * @return The interpolation value. This value can be more than 1.0 for
     *         interpolators which overshoot their targets, or less than 0 for
     *         interpolators that undershoot their targets.
     */
    getInterpolation(input: number): number;
}
/**
 * An interpolator where the rate of change starts out slowly and
 * and then accelerates.
 * @internal
 * @group Plugin
 */
export declare class AccelerateInterpolator implements TimeInterpolator {
    private _factor;
    private _doubleFactor;
    constructor();
    get accelerateInterpolator(): number;
    set accelerateInterpolator(factor: number);
    getInterpolation(input: number): number;
}
/**
 * An interpolator where the rate of change starts out quickly and
 * and then decelerates.
 * @internal
 * @group Plugin
 */
export declare class DecelerateInterpolator implements TimeInterpolator {
    private _factor;
    constructor();
    get decelerateInterpolator(): number;
    set decelerateInterpolator(factor: number);
    getInterpolation(input: number): number;
}
/**
 * An interpolator where the rate of change starts and ends slowly but
 * accelerates through the middle.
 * @internal
 * @group Plugin
 */
export declare class AccelerateDecelerateInterpolator implements TimeInterpolator {
    private _factor;
    constructor();
    getInterpolation(input: number): number;
}
/**
 * An interpolator where the rate of change is constant
 * @internal
 * @group Plugin
 */
export declare class LinearInterpolator implements TimeInterpolator {
    getInterpolation(input: number): number;
}
/**
 * @internal
 * @group Plugin
 */
export declare class JumperInterpolator implements TimeInterpolator {
    getInterpolation(t: number): number;
}
/**
 * An interpolator where the change bounces at the end.
 * @internal
 * @group Plugin
 */
export declare class BounceInterpolator implements TimeInterpolator {
    constructor();
    private static bounce;
    getInterpolation(t: number): number;
    getBounceInterpolation(t: number): number;
    geJumpUp(v0: number, t: number): number;
}
/**
 * An interpolator where the change starts backward then flings forward.
 * @internal
 * @group Plugin
 */
export declare class AnticipateInterpolator implements TimeInterpolator {
    private _tension;
    constructor();
    get anticipateInterpolator(): number;
    set anticipateInterpolator(tension: number);
    getInterpolation(t: number): number;
}
/**
 * An interpolator where the change starts backward then flings forward and overshoots
 * the target value and finally goes back to the final value.
 * @internal
 * @group Plugin
 */
export declare class AnticipateOvershootInterpolator implements TimeInterpolator {
    private _tension;
    constructor();
    anticipateOvershootInterpolator(tension: number): void;
    anticipateOvershootInterpolator2(tension: number, extraTension: number): void;
    getInterpolation(t: any): number;
    private static a;
    private static o;
}
/**
 * Repeats the animation for a specified number of cycles. The
 * rate of change follows a sinusoidal pattern.
 * @internal
 * @group Plugin
 */
export declare class CycleInterpolator implements TimeInterpolator {
    private _cycles;
    constructor(cycles: any);
    getInterpolation(t: any): number;
}
/**
 * An interpolator where the change flings forward and overshoots the last value
 * then comes back.
 * @internal
 * @group Plugin
 */
export declare class OvershootInterpolator implements TimeInterpolator {
    private _tension;
    constructor();
    getInterpolation(t: any): number;
}
/**
 * Interpolator enumeration
 * |Name|Describe|
 * |:---:|:---:|
 * |AccelerateInterpolator| Acceleration interpolator, animation acceleration runs to the end.|
 * |DecelerateInterpolator| Slow down interpolator, animation slow down run to end.|
 * |AccelerateDecelerateInterpolator| Acceleration and deceleration interpolator, animation first speed up and then decelerate.|
 * |LinearInterpolator| Linear interpolator, animation uniform motion.|
 * |BounceInterpolator| Elastic interpolator, before the end of the animation will have an elastic animation effect.|
 * |AnticipateInterpolator| Step back and then speed up to the end.|
 * |AnticipateOvershootInterpolator| Take a small step back, then speed up, then go a little beyond the finish line and then come back.|
 * |CycleInterpolator| cyclic motion|
 * |OvershootInterpolator| Finish the animation quickly, go a little beyond the end point and then go back to the end point.|
 * @group Plugin
 */
export declare enum InterpolatorEnum {
    /**
     * Acceleration interpolator, animation acceleration runs to the end.
     */
    AccelerateInterpolator = 0,
    /**
     * Slow down interpolator, animation slow down run to end.
     */
    DecelerateInterpolator = 1,
    /**
     * Acceleration and deceleration interpolator, animation first speed up and then decelerate.
     */
    AccelerateDecelerateInterpolator = 2,
    /**
     * Linear interpolator, animation uniform motion.
     */
    LinearInterpolator = 3,
    /**
     * Elastic interpolator, before the end of the animation will have an elastic animation effect.
     */
    BounceInterpolator = 4,
    /**
     * Step back and then speed up to the end.
     */
    AnticipateInterpolator = 5,
    /**
     * Take a small step back, then speed up, then go a little beyond the finish line and then come back.
     */
    AnticipateOvershootInterpolator = 6,
    /**
     * Cyclic motion
     */
    CycleInterpolator = 7,
    /**
     * Finish the animation quickly, go a little beyond the end point and then go back to the end point.
     */
    OvershootInterpolator = 8,
    /**
     * @internal
     */
    JumperInterpolator = 9
}
/**
 * interpolator class
 * @group Plugin
 */
export declare class Interpolator {
    /**
     * @internal
     */
    static interpolators: Interpolator[];
    /**
     * @internal
     */
    complete: boolean;
    /**
     * @internal
     */
    onComplete: Function;
    /**
     * @internal
     */
    onProgress: Function;
    /**
     * @internal
     */
    target: any;
    /**
     * @internal
     */
    property: any;
    /**
     * @internal
     */
    targetProperty: any;
    /**
     * @internal
     */
    durtion: number;
    /**
     * @internal
     */
    interpolatorEnum: InterpolatorEnum;
    /**
     * @internal
     */
    delayTime: number;
    private _interpolator;
    private _ct;
    private _p;
    /**
     * Creates an animation from the current property to the specified target property.
     * @param target Objects that need to be animated
     * @param property Animation parameter
     * @param durtion Animation duration, usually seconds
     * @param interpolatorEnum Interpolator type
     * @returns
     */
    static to(target: any, property: any, durtion: number, interpolatorEnum?: InterpolatorEnum): Interpolator;
    /**
     * @internal
     */
    static tick(delta: number): void;
    /**
     * @internal
     */
    static remove(interpolator: Interpolator, dispose?: boolean): void;
    static removeList(interpolators: Interpolator[], dispose?: boolean): void;
    /**
     * @internal
     */
    start(): void;
    /**
     * @internal
     */
    tick(delta: number): void;
    /**
     * @internal
     */
    dispose(): void;
}
