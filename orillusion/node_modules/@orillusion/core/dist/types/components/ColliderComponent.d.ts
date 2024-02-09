import { View3D } from "..";
import { Ray } from "../math/Ray";
import { ComponentBase } from "./ComponentBase";
import { ColliderShape, HitInfo } from "./shape/ColliderShape";
/**
 * collider component
 * @group Components
 */
export declare class ColliderComponent extends ComponentBase {
    private _shape;
    constructor();
    /**
     * @internal
     */
    start(): void;
    onEnable(view?: View3D): void;
    onDisable(view?: View3D): void;
    /**
     * Returns the shape of collider
     */
    get shape(): ColliderShape;
    /**
     * Set the shape of collider
     */
    set shape(value: ColliderShape);
    /**
     * @internal
     * @param ray
     * @returns
     */
    rayPick(ray: Ray): HitInfo;
    beforeDestroy(force?: boolean): void;
}
