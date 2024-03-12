import { GeometryBase } from "../core/geometry/GeometryBase";
import { Vector3 } from "../math/Vector3";
/**
 * Plane geometry
 * @group Geometry
 */
export declare class StripeGeometry extends GeometryBase {
    segments: [Vector3, Vector3][];
    /**
     *
     * @constructor
     * @param width Width of the plane
     * @param height Height of the plane
     * @param segmentW Number of width segments of a plane
     * @param segmentH Number of height segments of a plane
     * @param up Define the normal vector of a plane
     */
    constructor(segments: [Vector3, Vector3][]);
    private buildGeometry;
}
