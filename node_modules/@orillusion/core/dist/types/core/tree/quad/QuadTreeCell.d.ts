import { Vector3 } from "../../../math/Vector3";
import { QuadAABB } from "./QuadAABB";
export declare class QuadTreeCell {
    static NUM_CHILDREN: number;
    childCellIndices: Array<number>;
    nodeIndices: Array<number>;
    aabb: QuadAABB;
    points: Array<Vector3>;
    constructor(aabox: QuadAABB);
    /**
    * @language zh_CN
    * Indicates if we contain triangles (if not then we should/might have children)
    */
    isLeaf(): boolean;
    clear(): void;
}
