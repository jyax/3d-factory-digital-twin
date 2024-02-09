import { GeometryBase } from "../core/geometry/GeometryBase";
import { Vector3 } from "../math/Vector3";
/**
 * Plane geometry
 * @group Geometry
 */
export declare class PlaneGeometry extends GeometryBase {
    /**
     * Width of the plane
     */
    width: number;
    /**
     * Height of the plane
     */
    height: number;
    /**
     * Number of width segments of a plane
     */
    segmentW: number;
    /**
     * Number of height segments of a plane
     */
    segmentH: number;
    /**
     * Define the normal vector of a plane
     */
    up: Vector3;
    /**
     *
     * @constructor
     * @param width Width of the plane
     * @param height Height of the plane
     * @param segmentW Number of width segments of a plane
     * @param segmentH Number of height segments of a plane
     * @param up Define the normal vector of a plane
     */
    constructor(width: number, height: number, segmentW?: number, segmentH?: number, up?: Vector3);
    private buildGeometry;
}
