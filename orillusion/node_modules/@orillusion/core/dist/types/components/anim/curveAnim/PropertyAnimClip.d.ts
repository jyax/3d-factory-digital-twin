import { AttributeAnimCurve } from './AttributeAnimCurve';
/**
 * @internal
 * @group Animation
 */
export declare class ObjectAnimClip {
    curve: {
        [attribute: string]: AttributeAnimCurve;
    };
}
/**
 * @group Animation
 */
export declare enum WrapMode {
    /**
     * Read loop mode from animation clips.
     */
    Default = 0,
    /**
     * When the time reaches the end of the animation clip, the clip will automatically stop playing and the time will be reset to the beginning of the clip.
     */
    Clamp = 1,
    /**
     * Stop the animation when the time reaches the end.
     */
    Once = 1,
    /**
     * When the time reaches the end, replay from the beginning.
     */
    Loop = 2,
    /**
     * Play the animation. When it reaches the endpoint, it will continue to play the last frame and never stop playing.
     */
    PingPong = 4,
    /**
     * Play the animation. When playing to the end, the animation is always in the sampling state of the last frame.
     */
    ClampForever = 8
}
/**
 * All keyframe data for attribute animation
 * @internal
 * @group Animation
 */
export declare class PropertyAnimClip {
    name: string;
    objAnimClip: {
        [path: string]: ObjectAnimClip;
    };
    totalTime: number;
    time: number;
    private _stopTime;
    private _loopTime;
    private _wrapMode;
    private _sampleRate;
    get wrapMode(): WrapMode;
    set wrapMode(value: WrapMode);
    parse(jsonData: any): void;
}
