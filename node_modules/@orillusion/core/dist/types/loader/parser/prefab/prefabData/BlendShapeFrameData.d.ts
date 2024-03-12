import { BytesArray } from "../../../../util/BytesArray";
export declare class BlendShapeFrameData {
    weight: number;
    deltaVertices: Float32Array;
    deltaNormals: Float32Array;
    deltaTangents: Float32Array;
    formBytes(byteArray: BytesArray): void;
}
