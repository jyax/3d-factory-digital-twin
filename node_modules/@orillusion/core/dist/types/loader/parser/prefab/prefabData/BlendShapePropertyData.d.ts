import { BytesArray } from "../../../..";
export declare class BlendShapePropertyData {
    shapeName: string;
    shapeIndex: number;
    frameCount: number;
    blendPositionList: Float32Array;
    blendNormalList: Float32Array;
    formBytes(byteArray: BytesArray): void;
}
