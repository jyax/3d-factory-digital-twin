import { GeometryBase } from "../core/geometry/GeometryBase";
/**
 * Plane geometry
 * @group Geometry
 */
export declare class TriGeometry extends GeometryBase {
    private faceCount;
    /**
     *
     * @constructor
     */
    constructor(count: number);
    private buildGeometry;
}
