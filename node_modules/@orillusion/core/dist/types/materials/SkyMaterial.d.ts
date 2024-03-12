import { Texture } from "../gfx/graphics/webGpu/core/texture/Texture";
import { Material } from "./Material";
/**
 * @internal
 * @group Material
 */
export declare class SkyMaterial extends Material {
    constructor();
    /**
     *  Set base map(main map)
     */
    set baseMap(texture: Texture);
    /**
     * Get base map(main map)
    //  */
    get baseMap(): Texture;
    set envMap(texture: Texture);
    set shadowMap(texture: Texture);
    get exposure(): number;
    set exposure(value: number);
    get roughness(): number;
    set roughness(value: number);
}
