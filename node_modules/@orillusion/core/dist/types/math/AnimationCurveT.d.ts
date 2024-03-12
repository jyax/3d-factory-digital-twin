import { Keyframe } from './enum/Keyframe';
import { AnimationCurve, BytesArray, KeyframeT, Quaternion, Vector2, Vector3, Vector4 } from '..';
export type CurveValueT = number | Vector2 | Vector3 | Vector4 | Quaternion;
/**
 * Animation Cureve
 * has frame list data
 * @group Math
 */
export declare class AnimationCurveT {
    path: string;
    attribute: string;
    propertys: string[];
    preInfinity: number;
    postInfinity: number;
    rotationOrder: number;
    m_curves: AnimationCurve[];
    private k;
    private _cacheValue;
    private _kValue;
    constructor(k?: number);
    private check;
    /**
     * return this curve use total time
     */
    get totalTime(): number;
    /**
     * add keyFrame to curve keyframe last and calcTotalTime
     * @param keyFrame {@link Keyframe}  sea: one key frame data
     */
    addKeyFrame(keyFrame: KeyframeT): void;
    /**
     * remove keyframe from this curve
     * @param keyFrame {@link Keyframe}
     */
    removeKeyFrame(keyFrame: KeyframeT): void;
    /**
     * get caculate frames value
     * @param time
     * @returns
     */
    getValue(time: number): CurveValueT;
    /**
     * get has Keyframe list count
     * @returns  int
     */
    getKeyCount(): number;
    /**
     * Get a Keyframe Data by Index
     * @param index must int
     * @returns Keyframe {@link Keyframe}
     */
    getKey(index: number): Keyframe[];
    formBytes(bytes: BytesArray): void;
}
