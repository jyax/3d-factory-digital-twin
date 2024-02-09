import { ParserFormat } from "../loader/parser/ParserFormat";
/**
 * UUID
 * @param len
 * @param radix
 * @returns
 * @group Util
 */
export declare let UUID: (len?: number, radix?: number) => string;
export declare let GetCountInstanceID: () => number;
export declare let ArrayHas: (array: any[], item: any) => boolean;
export declare let ArrayItemIndex: (array: any[], item: any) => number;
export declare let mergeFunctions: (...funcs: any[]) => (...args: any[]) => void;
/**
 * Constructor
 */
export type Ctor<T> = {
    new (any?: any, any2?: any, any3?: any, any4?: any): T;
    prototype: any;
};
export type Parser<T> = {
    new (any?: any): T;
    prototype: any;
    format: ParserFormat;
};
