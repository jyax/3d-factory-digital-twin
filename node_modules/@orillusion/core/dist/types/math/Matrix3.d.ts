import { Vector3 } from './Vector3';
/**
 * ////**************
 * ////****a b tx****
 * ////****c d ty****
 * ////****u v w ****
 * ////**************
 */
/**
 * 3*3 Matrix
 * @group Math
 */
export declare class Matrix3 {
    /**
     * The width of x
     */
    a: number;
    /**
     * The slope of y
     */
    b: number;
    /**
     * The slope of x
     */
    c: number;
    /**
     * The height of y
     */
    d: number;
    /**
     * The position of the x coordinate
     */
    tx: number;
    /**
     * The position of the y coordinate
     */
    ty: number;
    /**
     * Create a Matrix3
     * @param a The width of x
     * @param b The slope of y
     * @param c The slope of x
     * @param d The height of y
     * @param tx The position of the x coordinate
     * @param ty The position of the y coordinate
     */
    constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number);
    /**
     * Clone an Matrix3 object
     * @returns New Matrix3 object
     */
    clone(): Matrix3;
    /**
     * Merges the current matrix with the target matrix
     * @param matrix target matrix
     */
    concat(matrix: Matrix3): void;
    /**
     * The current matrix value is overwritten by the target matrix value
     * @param other  target matrix value
     * @returns current matrix
     */
    copyFrom(other: Matrix3): Matrix3;
    /**
     * Reset to the identity matrix
     */
    identity(): this;
    /**
     * Invert this matrix
     */
    invert(): void;
    /**
     * Rotate according to Angle
     * @param angle rotation angle
     */
    rotate(angle: number): void;
    /**
     * Scale by offset
     * @param sx x axis scaling
     * @param sy y axis scaling
     */
    scale(sx: number, sy: number): void;
    /**
     * Reset the matrix value
     * @param a Matrix element a
     * @param b Matrix element b
     * @param c Matrix element c
     * @param d Matrix element d
     * @param tx Matrix element tx
     * @param ty Matrix element ty
     * @returns The modified matrix
     */
    setTo(a: number, b: number, c: number, d: number, tx: number, ty: number): Matrix3;
    /**
     * transformation of coordinates
     * @param pointX x coordinate
     * @param pointY y coordinate
     * @param resultPoint Vector of results
     * @returns Vector of results
     */
    transformPoint(pointX: number, pointY: number, resultPoint?: Vector3): Vector3;
    /**
     * translation
     * @param x x coordinate
     * @param y y coordinate
     */
    setTranslate(x: number, y: number): void;
    /**
     * Translates the specified offset
     * @param dx The x-coordinate offset
     * @param dy The y-coordinate offset
     */
    translate(dx: number, dy: number): void;
    /**
     * multiply
     * @param t target matrix
     */
    mul(t: Matrix3): void;
    /**
     * Is equal to the given matrix
     * @param other matrix
     * @returns
     */
    equals(other: Matrix3): boolean;
    /**
     * get a front matrix by multiplication
     * @param a Multiply by a
     * @param b Multiply by b
     * @param c Multiply by c
     * @param d Multiply by d
     * @param tx Multiply by tx
     * @param ty Multiply by ty
     * @returns prematrix
     */
    prepend(a: number, b: number, c: number, d: number, tx: number, ty: number): Matrix3;
    /**
     * Obtain a post-multiplication matrix by multiplication.
     * @param mat Matrix
     * @returns result
     */
    append(mat: Matrix3): Matrix3;
    /**
     * Use the given point for the transformation, ignoring the x, y coordinates
     * @param point A given point
     * @returns
     */
    deltaTransformPoint(point: Vector3): Vector3;
    /**
     * Converts the current matrix to string form
     * @returns
     */
    toString(): string;
    /**
     * Set the matrix scaling, rotation, and conversion parameters
     * @param scaleX x axis scaling
     * @param scaleY y axis scaling
     * @param rotation rotation
     * @param tx x-coordinate
     * @param ty y-coordinate
     */
    createBox(scaleX: number, scaleY: number, rotation?: number, tx?: number, ty?: number): void;
    /**
     * Create a gradient box
     * @param width width
     * @param height height
     * @param rotation rotation
     * @param tx x-coordinate
     * @param ty y-coordinate
     */
    createGradientBox(width: number, height: number, rotation?: number, tx?: number, ty?: number): void;
    /**
     * Invert the given matrix
     * @param target matrix
     * @returns
     */
    private _invertInto;
    /**
     * @private
     */
    getScaleX(): number;
    /**
     * @private
     */
    getScaleY(): number;
    /**
     * @private
     */
    getSkewX(): number;
    /**
     * @private
     */
    getSkewY(): number;
    /**
     * @private
     */
    updateScaleAndRotation(scaleX: number, scaleY: number, skewX: number, skewY: number): void;
    /**
     * @private
     * target = other * this
     */
    preMultiplyInto(other: Matrix3, target: Matrix3): void;
    /**
     * @private
     */
    private $transformBounds;
    /**
     * @private
     */
    private getDeterminant;
}
