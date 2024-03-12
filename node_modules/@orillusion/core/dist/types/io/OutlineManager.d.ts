import { Object3D } from "../core/entities/Object3D";
import { Color } from "../math/Color";
/**
 * manager of outline effect
 * @group IO
 */
export declare class OutlinePostManager {
    private _tempIndexArray;
    /**
     * config outline manager.
     * Specify specific 3D objects to use the specified color for display outline
     * @param objectList A set of 3D objects
     * @param color Specified color for outline
     */
    setOutline(objectList: Object3D[], color?: Color): void;
    /**
     * config outline manager.
     * The first set of objects uses the first color to display outline, and so on
     * @param groupList A group of 3D objects set
     * @param colorList Specified color list for outline
     */
    setOutlineList(groupList: Object3D[][], colorList?: Color[]): void;
    /**
     * clear outline effect
     */
    clearOutline(): this;
    private _rendererList;
    private getEntityIdList;
}
/**
 * @internal
 */
export declare let outlinePostManager: OutlinePostManager;
