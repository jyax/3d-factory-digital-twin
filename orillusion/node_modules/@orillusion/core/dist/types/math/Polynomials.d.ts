/**
 * @internal
 * @group Math
 */
export declare class Polynomials {
}
/**
 * @internal
 */
export declare function cubicPolynomialRoot(p: number, q: number, r: number): number;
/**
 * @internal
 */
export declare function quadraticPolynomialRootsGeneric(a: any, b: any, c: any, out: {
    r0: any;
    r1: any;
}): 1 | 0 | 2;
/**
 * @internal
 */
export declare function cubicPolynomialRootsGeneric(roots: number[], a: number, b: number, c: number, d: number): number;
