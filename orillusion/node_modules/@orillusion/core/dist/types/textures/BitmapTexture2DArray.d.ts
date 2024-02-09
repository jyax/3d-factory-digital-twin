import { BitmapTexture2D } from './BitmapTexture2D';
import { ITexture } from '../gfx/graphics/webGpu/core/texture/ITexture';
import { Texture } from '../gfx/graphics/webGpu/core/texture/Texture';
/**
 * Type BitmapTexture 2D Array , Use in GPU
 * @internal
 * @group Texture
 */
export declare class BitmapTexture2DArray extends Texture implements ITexture {
    private _bitmapTextures;
    constructor(width: number, height: number, numberLayer: number);
    /**
     * fill self by set texture list
     * @param texs array of BitmapTexture2D
     * @returns
     */
    setTextures(texs: BitmapTexture2D[]): void;
    /**
     * add one BitmapTexture2D to this
     * @param bitmapTexture the bitmapTexture2D be added
     * @returns
     */
    addTexture(bitmapTexture: BitmapTexture2D): void;
    /**
    * remove one BitmapTexture2D from this
    * @param bitmapTexture the bitmapTexture2D be removed
    * @returns
    */
    removeTexture(bitmapTexture: BitmapTexture2D): void;
    /**
     * @internal
     */
    private updateTexture;
    internalCreateBindingLayoutDesc(): void;
    internalCreateTexture(): void;
    internalCreateView(): void;
    internalCreateSampler(): void;
}
