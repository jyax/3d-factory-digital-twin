import { Texture } from '../../gfx/graphics/webGpu/core/texture/Texture';
import { HDRTexture } from '../../textures/HDRTexture';
import { HDRTextureCube } from '../../textures/HDRTextureCube';
import { ParserBase } from './ParserBase';
/**
 * @internal
 */
export declare enum RGBEErrorCode {
    RGBE_RETURN_FAILURE = -1,
    rgbe_read_error = 1,
    rgbe_write_error = 2,
    rgbe_format_error = 3,
    rgbe_memory_error = 4
}
/**
 * @internal
 * @group Loader
 */
export declare class RGBEHeader {
    valid: number;
    string: string;
    comments: string;
    programtype: string;
    format: string;
    gamma: number;
    exposure: number;
    width: number;
    height: number;
}
/**
 * RGBE parser
 * @internal
 * @group Loader
 */
export declare class RGBEParser extends ParserBase {
    private _rgbeArray;
    private _width;
    private _height;
    private _RGBE_RETURN_FAILURE;
    private _parserType;
    parseBuffer(buffer: ArrayBuffer): Texture;
    /**
     * Verify parsing validity
     * @param ret
     * @returns
     */
    verification(): boolean;
    getTexture(): Texture;
    getCubeTexture(): HDRTextureCube;
    getHDRTexture(): HDRTexture;
    protected parseError(rgbe_error_code: any, msg: any): RGBEErrorCode;
    protected parserBlock(buffer: Uint8Array, lineLimit?: number, consume?: boolean): string | false;
    protected paserHeader(buffer: Uint8Array): RGBEHeader | number;
    protected parserPixel(buffer: any, w: any, h: any): Uint8Array | RGBEErrorCode;
    protected rbgeToFloat(sourceArray: any, sourceOffset: any, destArray: any, destOffset: any): void;
    protected rbgeToHalfFloat(sourceArray: any, sourceOffset: any, destArray: any, destOffset: any): void;
}
