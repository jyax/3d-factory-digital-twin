import { Color } from '../math/Color';
import { LDRTextureCube } from './LDRTextureCube';
/**
 * create a cube texture, which filled by solid color.
 * @group Texture
 */
export declare class SolidColorSky extends LDRTextureCube {
    private _internalTexture;
    private readonly _minSize;
    private _skyColor;
    /**
     * create a cube texture, which filled by solid color.
     * @param color solid color
     * @returns
     */
    constructor(color: Color);
    private changeColor;
    get color(): Color;
    /**
     * change solid color
     * @param value target color
     * @returns
     */
    set color(value: Color);
}
