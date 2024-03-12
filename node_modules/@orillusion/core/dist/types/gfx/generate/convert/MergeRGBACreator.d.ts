import { VirtualTexture } from '../../../textures/VirtualTexture';
import { Texture } from '../../graphics/webGpu/core/texture/Texture';
/**
 * @internal
 * @group GFX
 */
export declare class MergeRGBACreator {
    static merge(textureR: Texture, textureG: Texture, textureB: Texture, textureA: Texture): VirtualTexture;
}
