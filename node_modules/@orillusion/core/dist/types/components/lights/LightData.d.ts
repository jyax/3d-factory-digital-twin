import { Color } from '../../math/Color';
import { Vector3 } from '../../math/Vector3';
import { Struct } from '../../util/struct/Struct';
/**
    *Type of light source
    *
    *Type Description|
    * |:---:|:---:|
    *None|
    *PointLight|
    *DirectionLight|
    *SpotLight|
    *SkyLight|
 * @group Lights
 */
export declare enum LightType {
    None = 0,
    PointLight = 1,
    DirectionLight = 2,
    SpotLight = 3,
    SkyLight = 4
}
/**
 * Data structure of light sources
 * @internal
 * @group Lights
 */
export declare class LightData extends Struct {
    static lightSize: number;
    index: number;
    /**
     * Light source type
     * @see LightType
     *  */
    lightType: number;
    /**
    *
    * Light source radius
    */
    radius: number;
    /**
     *
     * The illumination distance of the light source, which is 0, means that the intensity of the light will not decrease due to the distance
     */
    linear: number;
    lightPosition: Vector3;
    lightMatrixIndex: number;
    /**
     * Light source direction
     */
    direction: Vector3;
    quadratic: number;
    /**
    *
    * The color of the light source
    */
    lightColor: Color;
    /**
     *
     * The intensity of light exposure
     */
    intensity: number;
    /**
     *
     * Inner cone angle of light source
     */
    innerAngle: number;
    /**
     *
     * Outer cone angle of light source
     */
    outerAngle: number;
    /**
     *
     * The size of the light source range and the distance emitted from the center of the light source object. Only Point and Spotlight have this parameter.
     */
    range: number;
    /**
     *
     * shadow at shadow map index
     */
    castShadowIndex: number;
    /**
     * Tangent direction of light
     */
    lightTangent: Vector3;
    /**
     * Whether to use lighting ies
     */
    iesIndex: number;
}
