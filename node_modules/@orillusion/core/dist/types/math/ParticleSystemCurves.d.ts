import { AnimationCurve } from './AnimationCurve';
import { PolynomialCurve } from './PolynomialCurve';
import { Vector2 } from './Vector2';
/**
 * @internal
 */
export declare enum ParticleSystemCurveEvalMode {
    kEMScalar = 0,
    kEMOptimized = 1,
    kEMOptimizedMinMax = 2,
    kEMSlow = 3
}
/**
 * @internal
 */
export declare enum MinMaxCurveState {
    kMMCScalar = 0,
    kMMCCurve = 1,
    kMMCTwoCurves = 2,
    kMMCTwoConstants = 3
}
/**
 * @internal
 * @group Math
 */
export declare class MinMaxAnimationCurves {
    max: AnimationCurve;
    min: AnimationCurve;
}
/**
 * @internal
 * @group Math
 */
export declare class MinMaxPolyCurves {
    max: PolynomialCurve;
    min: PolynomialCurve;
    integrate(): void;
    doubleIntegrate(): void;
    findMinMaxIntegrated(): Vector2;
    findMinMaxDoubleIntegrated(): Vector2;
}
/**
 * @internal
 * @group Math
 */
export declare class MinMaxCurve {
    minMaxState: MinMaxCurveState;
    minCurve: AnimationCurve;
    maxCurve: AnimationCurve;
    private _scalar;
    private _minScalar;
    constructor(scalarValue?: number);
    setScalar(value: any): void;
    getScalar(): number;
    static evaluateSlow(curve: MinMaxCurve, t: any, factor: any): number;
    static evaluate(curve: MinMaxCurve, t: any, randomValue?: number): number;
    unSerialized(data: any): void;
}
/**
 * @internal
 * @group Math
 */
export declare class ValueSpread {
    value: number;
    mode: number;
    spread: number;
    speed: MinMaxCurve;
    unSerialized(data: any): void;
}
/**
 * @internal
 */
export declare function curvesSupportProcedural(editorCurves: MinMaxAnimationCurves, minMaxState: number): boolean;
/**
 * @internal
 */
export declare function buildCurves(polyCurves: MinMaxPolyCurves, editorCurves: MinMaxAnimationCurves, scalar: any, minMaxState: any): void;
/**
 * @internal
 */
export declare function calculateCurveRangesValue(minMaxValue: Vector2, curve: AnimationCurve): void;
/**
 * @internal
 */
export declare function calculateMinMax(minmax: Vector2, value: number): void;
