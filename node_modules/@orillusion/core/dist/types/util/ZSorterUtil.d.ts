import { Camera3D } from '../core/Camera3D';
import { Object3D } from '../core/entities/Object3D';
/**
 * Sort a data with world coordinates based on the camera's camera by z
 * @group Util
 */
export declare class ZSorterUtil {
    private _pool;
    private _worldPosition;
    private _viewPosition;
    private _zSortList;
    private pop;
    private recycle;
    /**
     * Sort userDataList by z based on the view coordinates of camera3D
     * @param camera3D camera3D
     * @param userDataList List of objects that users need to sort
     * @param getObject3D Obtain the function of the Object 3D reference based on userData
     * @param result Returns a list of userData, and if passed in as null, instantiates one
     * @returns
     */
    sort(camera3D: Camera3D, userDataList: any[], getObject3D: (userData: any) => Object3D, result?: any[]): any[];
    worldToCameraDepth(obj3d: Object3D, camera?: Camera3D): number;
}
export declare let zSorterUtil: ZSorterUtil;
