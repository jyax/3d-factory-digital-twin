import { Object3D } from "../../../core/entities/Object3D";
import { GUISpace } from "../GUIConfig";
import { UIPanel } from "./UIPanel";
/**
 * UI component container for world space
 * @group GPU GUI
 */
export declare class WorldPanel extends UIPanel {
    readonly isWorldPanel = true;
    readonly space: GUISpace;
    private _depthTest;
    constructor();
    cloneTo(obj: Object3D): void;
    copyComponent(from: this): this;
    get depthTest(): boolean;
    set depthTest(value: boolean);
}
