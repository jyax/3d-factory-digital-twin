import { Color } from '../math/Color';
/**
 * Temperature Color Converter
 * @group Util
 */
export declare class KelvinUtil {
    /**
     * Convert color temperature to color object
     * @param color_temperature_Kelvin Color temperature value
     * @returns
     */
    static color_temperature_to_rgb(color_temperature_Kelvin: number): Color;
    /**
     * Return red component [0-255]
     * @param temperature
     * @returns
     */
    static get_red(temperature: number): number;
    /**
     * Return green component [0-255]
     * @param temperature
     * @returns
     */
    static get_green(temperature: number): number;
    /**
     * Return blue component [0-255]
     * @param temperature
     * @returns
     */
    static get_blue(temperature: number): number;
    /**
     * @internal
     * @param color_component
     * @param minimum
     * @param maximum
     * @returns
     */
    static bound(color_component: number, minimum?: number, maximum?: number): number;
}
