import { ILight } from "./ILight";
/**
 * Collecting and storing light that affects GI
 * @internal
 * @group Lights
 */
export declare class GILighting {
    static list: ILight[];
    static add(light: ILight): void;
    static remove(light: ILight): void;
}
