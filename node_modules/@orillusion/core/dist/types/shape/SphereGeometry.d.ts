import { GeometryBase } from "../core/geometry/GeometryBase";
/**
 * Sphere Geometry
 * @group Geometry
 */
export declare class SphereGeometry extends GeometryBase {
    shape_vertices: any[];
    shape_indices: any[];
    /**
     * radius of sphere
     */
    radius: number;
    /**
     * Define the number of horizontal segments
     */
    widthSegments: number;
    /**
     * Define the number of vertical segments
     */
    heightSegments: number;
    /**
     * The starting point radian of the equatorial line of a sphere
     */
    phiStart: number;
    /**
     * The arc length of the equatorial line of a sphere
     */
    phiLength: number;
    /**
     * The radian of the starting point of the sphere's meridian
     */
    thetaStart: number;
    /**
     * Arc length of sphere meridian
     */
    thetaLength: number;
    /**
     *
     * @constructor
     * @param radius radius of sphere
     * @param widthSegments Define the number of horizontal segments
     * @param heightSegments Define the number of vertical segments
     * @param phiStart  The starting point radian of the equatorial line of a sphere
     * @param phiLength The arc length of the equatorial line of a sphere
     * @param thetaStart The radian of the starting point of the sphere's meridian
     * @param thetaLength Arc length of sphere meridian
     */
    constructor(radius: any, widthSegments: any, heightSegments: any, phiStart?: any, phiLength?: any, thetaStart?: any, thetaLength?: any);
    protected buildGeometry(): void;
}
