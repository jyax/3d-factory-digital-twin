import { GeometryBase } from "../../core/geometry/GeometryBase";
import { Vector3 } from "../Vector3";
export declare class Navi3DMergeVertex {
    vertex: Vector3[];
    indices: number[];
    merge(geometry: GeometryBase, threshould?: number): this;
    parse(geometry: GeometryBase): this;
    private makeOriginVertex;
}
