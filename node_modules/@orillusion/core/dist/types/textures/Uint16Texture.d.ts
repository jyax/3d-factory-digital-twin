import { Texture } from '../gfx/graphics/webGpu/core/texture/Texture';
/**
 * @internal
 * Uint16 texture
 * @group Texture
 */
export declare class Uint16Texture extends Texture {
    /**
     * create texture by number array, which format is uint8
     * @param width width of texture
     * @param height height of texture
     * @param data uint8 array
     * @param useMipmap whether or not gen mipmap
     * @returns
     */
    create(width: number, height: number, data: Float32Array, useMiamp?: boolean): void;
}
