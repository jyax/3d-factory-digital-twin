import { CEventDispatcher } from '../event/CEventDispatcher';
import { Ray } from '../math/Ray';
import { ColliderComponent } from '../components/ColliderComponent';
import { View3D } from '../core/View3D';
/**
 * Management and triggering for picking 3D objects
 * @group IO
 */
export declare class PickFire extends CEventDispatcher {
    /**
     * The ray used to pick 3D objects
     */
    ray: Ray;
    /**
     * whether it's touching
     */
    isTouching: boolean;
    private _mouseCode;
    private _pickEvent;
    private _outEvent;
    private _overEvent;
    private _upEvent;
    private _downEvent;
    private _mouseMove;
    private _pickCompute;
    private _lastDownTarget;
    /**
     * a map records the association information between meshID(matrix id) and ColliderComponent
     */
    mouseEnableMap: Map<number, ColliderComponent>;
    private _view;
    constructor(view: View3D);
    /**
     * Initialize the pickup initiator and call it internally during engine initialization
     */
    private init;
    /**
    * start this manager
    */
    start(): void;
    /**
     * stop this manager
     */
    stop(): void;
    private onTouchStart;
    private onTouchEnd;
    private _lastFocus;
    private getPickInfo;
    private onTouchMove;
    private onTouchOnce;
    private findNearestObj;
    private _interestList;
    private pick;
}
