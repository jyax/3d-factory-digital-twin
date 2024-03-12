import { Texture } from "../../../../../gfx/graphics/webGpu/core/texture/Texture";
import { Color } from "../../../../../math/Color";
import { Vector4 } from "../../../../../math/Vector4";
import { Shader } from "../../../../../gfx/graphics/webGpu/shader/Shader";
export declare class LitHairShader extends Shader {
    constructor();
    private create_opPass;
    private create_trPass;
    debug(): void;
    setDefault(): void;
    set _MainTex(value: Texture);
    set _IDMap(value: Texture);
    set _DepthMap(value: Texture);
    set _RootMap(value: Texture);
    set _AlphaMap(value: Texture);
    set _UVTransform(value: Vector4);
    set _Metallic(value: number);
    set _Roughness(value: number);
    set _HairColor0(value: Color);
    set _HairColor1(value: Color);
    set _SpecularColor(value: Color);
    set _AlphaCutoff(value: number);
    set _BackLit(value: number);
    set _Area(value: number);
    set _DoubleSidedEnable(value: number);
    set _SurfaceType(value: number);
    set _AlphaCutoffEnable(value: number);
}
