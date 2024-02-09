import { View3D } from "../../../..";
import { ComponentBase } from "../../../../components/ComponentBase";
import { Color } from "../../../../math/Color";
import { Vector2 } from "../../../../math/Vector2";
export declare class APatch extends ComponentBase {
    size: Vector2;
    blockSize: number;
    walk: Color;
    obs: Color;
    colors: Color[];
    aPaths: number[];
    onGraphic(view?: View3D): void;
}
