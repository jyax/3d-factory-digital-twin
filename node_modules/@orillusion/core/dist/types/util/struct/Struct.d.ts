/**
 * @internal
 * @auth sirxu
 * Basic data structure class
 * Reasonable arrangement of data structure can accelerate computing performance
 * @group Util
 */
import { Ctor } from "../Global";
export declare class Struct {
    private __refection;
    private __size;
    /**
     * get reflection name
     * @returns
     */
    getValueType(): {
        name: string;
        type: string;
    }[];
    /**
     * get any type value memory size
     * @param value any type value
     * @returns
     */
    static getValueSize(value: any): any;
    private static __cacheStruct;
    static Ref<T extends Struct>(c: Ctor<T>): {
        name: string;
        type: string;
    }[];
    static Get<T extends Struct>(c: Ctor<T>): Struct;
    /**
     * get any struct memory size
     * @returns
     */
    static GetSize<T extends Struct>(c: Ctor<T>): number;
}
