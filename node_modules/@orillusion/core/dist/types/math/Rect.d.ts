/**
 * Rectangular region
 * @group Math
 */
export declare class Rect {
    /**
     * The x-coordinate of the rectangle
     */
    x: number;
    /**
     * The y-coordinate of the rectangle
     */
    y: number;
    /**
     * Width of a rectangle
     */
    w: number;
    /**
     * Height of rectangle
     */
    h: number;
    /**
     * Creates a new rectangular area object
     * @param x The x-coordinate of the rectangle
     * @param y The y coordinate of the rectangle
     * @param width Width of a rectangle
     * @param height Height of rectangle
     */
    constructor(x?: number, y?: number, width?: number, height?: number);
    /**
     * Width of a rectangle
     */
    get width(): number;
    set width(v: number);
    /**
     * Height of rectangle
     */
    get height(): number;
    set height(v: number);
    /**
     * Whether the point is within the specified area
     * @param x x value of point
     * @param y y value of point
     * @param lt_x The x value in the upper left corner
     * @param lt_y The y value in the upper left corner
     * @param rb_x The x value in the lower right corner
     * @param rb_y The y value in the lower right corner
     * @returns
     */
    static pointInRect(x: number, y: number, lt_x: number, lt_y: number, rb_x: number, rb_y: number): boolean;
    /**
     * Returns a new rectangular area object with the same properties as the current rectangular area
     * @returns
     */
    clone(): Rect;
    /**
     * Copy the properties of the source object to this object
     * @param v source object
     * @returns
     */
    copyFrom(rect: Rect): void;
    /**
     * Copy the properties of this object to the target object
     * @param v target object
     * @returns
     */
    copyTo(rect: Rect): void;
    /**
     * Whether the point is in this area
     * @param x x value of point
     * @param y y value of point
     * @returns
     */
    inner(x: number, y: number): boolean;
    /**
     * Whether the current rectangle is equal to the target rectangle
     * @param rectangle Target rectangle
     * @returns
     */
    equal(rectangle: Rect): boolean;
    /**
     * Whether the current rectangle is equal to the target rectangle
     * @param x The x value of the rectangle
     * @param y The y value of the rectangle
     * @param width Rectangle width
     * @param height Rectangular height
     * @returns
     */
    equalArea(x: number, y: number, width: number, height: number): boolean;
    /**
     * Whether this rectangle overlaps with the target object
     * @param source Source object
     * @returns
     */
    equalInnerArea(source: Rect): boolean;
    /**
     * Returns the overlap of two rectangles
     * @param source source object
     * @param target target object
     * @returns
     */
    innerArea(source: Rect, target: Rect): Rect;
    /**
     * Sets the properties of the rectangle
     * @param x x value
     * @param y y value
     * @param width Rectangle width
     * @param height Rectangular height
     */
    setTo(x: number, y: number, width: number, height: number): void;
}
