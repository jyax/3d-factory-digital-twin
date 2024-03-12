import { Vector3 } from "../../math/Vector3";
import { GeometryBase } from "./GeometryBase";
declare class Section {
    normal: Vector3;
    fixNormal: Vector3;
    center: Vector3;
    rotateShape: Vector3[];
    distance: number;
    readonly index: number;
    constructor(i: number);
}
export declare class ExtrudeGeometry extends GeometryBase {
    vScale: number;
    uNegate: boolean;
    sections: Section[];
    /**
     * for the points of start and end:
     * Please ensure that you do not actively clone the starting point to the end of the shape array;
     * closed: true.
     *       if you want them closed, it'll auto clone start point.
     * closed: false.
     *
     * @param shaderReflection ShaderReflection
     */
    build(shape: Vector3[], isShapeClosed: boolean, path: Vector3[], vScale?: number, uNegate?: boolean): this;
    private buildSections;
    private buildGeometry;
}
export {};
