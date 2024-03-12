import { AnimationCurveT, BytesArray } from '..';
/**
 * Animation Cureve
 * has frame list data
 * @group Math
 */
export declare class PropertyAnimationClip {
    clipName: string;
    loopTime: boolean;
    startTime: number;
    stopTime: number;
    sampleRate: number;
    useSkeletonPos: boolean;
    useSkeletonScale: boolean;
    positionCurves: Map<string, AnimationCurveT>;
    rotationCurves: Map<string, AnimationCurveT>;
    scaleCurves: Map<string, AnimationCurveT>;
    floatCurves: Map<string, AnimationCurveT>;
    formBytes(bytes: BytesArray): void;
}
