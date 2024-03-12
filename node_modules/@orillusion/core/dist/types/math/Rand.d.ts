/**
 * 'Rand' is a random number generator based on an improved xorshift algorithm,
 * which is a modification of the Linear Congruential Generator (LCG) method.
 * @group Math
 */
export declare class Rand {
    private _x;
    private _y;
    private _z;
    private _w;
    /**
     * Create a random number generator object with a specified seed.
     * @param seed Random seed
     */
    constructor(seed?: number);
    /**
     * Random seed
     */
    get seed(): number;
    set seed(value: number);
    /**
     * Convert an integer to a floating-point number
     * @param value integer
     * @returns
     */
    static getFloatFromInt(value: any): number;
    /**
     * Converts an integer to a single-byte integer
     * @param value integer
     * @returns
     */
    static getByteFromInt(value: any): number;
    /**
     * Returns a new random number generator object with the same seed state as
     * the current random number generator object
     * @returns
     */
    clone(): Rand;
    /**
     * Generate a random number
     * @returns
     */
    get(): number;
    /**
     * Randomly generate a floating-point number 0.0 to 1.0
     * @returns
     */
    getFloat(): number;
    /**
     * Randomly generates signed floating-point numbers -1.0 to 1.0
     * @returns
     */
    getSignedFloat(): number;
}
