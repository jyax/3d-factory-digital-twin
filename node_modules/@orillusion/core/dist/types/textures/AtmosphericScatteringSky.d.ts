import { Texture } from '../gfx/graphics/webGpu/core/texture/Texture';
import { Color } from '../math/Color';
import { LDRTextureCube } from './LDRTextureCube';
/**
 * AtmosphericScattering Sky Setting
 * @group Texture
 */
export declare class AtmosphericScatteringSkySetting {
    sunRadius: number;
    sunRadiance: number;
    mieG: number;
    mieHeight: number;
    eyePos: number;
    sunX: number;
    sunY: number;
    sunBrightness: number;
    displaySun: boolean;
    defaultTextureCubeSize: number;
    defaultTexture2DSize: number;
    skyColor: Color;
}
/**
 * Atmospheric Scattering Sky Texture
 * @group Texture
 */
export declare class AtmosphericScatteringSky extends LDRTextureCube {
    private _internalTexture;
    private _cubeSize;
    readonly setting: AtmosphericScatteringSkySetting;
    /**
     * @constructor
     * @param setting AtmosphericScatteringSkySetting
     * @returns
     */
    constructor(setting: AtmosphericScatteringSkySetting);
    get texture2D(): Texture;
    /**
     * @internal
     * @returns
     */
    apply(): this;
}
