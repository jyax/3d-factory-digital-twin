import { Scene3D } from "../core/Scene3D";
import { View3D } from "../core/View3D";
import { Object3D } from "../core/entities/Object3D";
import { CEvent } from "../event/CEvent";
import { Matrix4 } from "../math/Matrix4";
import { Quaternion } from "../math/Quaternion";
import { Vector3 } from "../math/Vector3";
import { ComponentBase } from "./ComponentBase";
/**
 * The Transform component contains the position, rotation, and scaling of an object in 3D space.
 * Each object (Object 3D) has a Transform component
 * @group Components
 */
export declare class Transform extends ComponentBase {
    /**
    * @internal
    */
    static LIMIT: number;
    /**
    * @internal
    */
    static COMPONENT_NAME: string;
    /**
    * @internal
    */
    static COMPONENT_TYPE: string;
    /**
    * @internal
    */
    static POSITION_ONCHANGE: string;
    /**
    * @internal
    */
    static ROTATION_ONCHANGE: string;
    /**
    * @internal
    */
    static SCALE_ONCHANGE: string;
    /**
    * @internal
    */
    static PARENT_ONCHANGE: string;
    /**
    * @internal
    */
    static CHILDREN_ONCHANGE: string;
    /**
    * @internal
    */
    static ADD_ONCHANGE: string;
    /**
     * @internal
     */
    static LOCAL_ONCHANGE: string;
    /**
    * @internal
    */
    eventPositionChange: CEvent;
    /**
    * @internal
    */
    eventRotationChange: CEvent;
    /**
    * @internal
    */
    eventScaleChange: CEvent;
    /**
    * @internal
    */
    eventLocalChange: CEvent;
    /**
    * @internal
    */
    onPositionChange: Function;
    /**
    * @internal
    */
    onRotationChange: Function;
    /**
    * @internal
    */
    onScaleChange: Function;
    private _scene3d;
    private _parent;
    private _localPos;
    _localRot: Vector3;
    private _localRotQuat;
    private _localScale;
    private _localDetailPos;
    private _localDetailRot;
    private _localDetailScale;
    index: number;
    index2: number;
    private _forward;
    private _back;
    private _right;
    private _left;
    private _up;
    private _down;
    readonly _worldMatrix: Matrix4;
    private _targetPos;
    static: boolean;
    depthOrder: number;
    get localChange(): boolean;
    set localChange(value: boolean);
    get targetPos(): Vector3;
    set targetPos(value: Vector3);
    get parent(): Transform;
    set parent(value: Transform);
    set enable(value: boolean);
    get enable(): boolean;
    get scene3D(): Scene3D;
    set scene3D(value: Scene3D);
    get view3D(): View3D;
    constructor();
    awake(): void;
    start(): void;
    stop(): void;
    /**
    * @internal
    */
    notifyLocalChange(): void;
    get up(): Vector3;
    set up(value: Vector3);
    get down(): Vector3;
    set down(value: Vector3);
    get forward(): Vector3;
    set forward(value: Vector3);
    get back(): Vector3;
    set back(value: Vector3);
    get left(): Vector3;
    set left(value: Vector3);
    get right(): Vector3;
    set right(value: Vector3);
    /**
     *
     * The transformation property of the object relative to the parent, stored in the from of a quaternion
     */
    get localRotQuat(): Quaternion;
    set localRotQuat(value: Quaternion);
    /**
     * @private
     */
    notifyChange(): void;
    /**
    * @internal
    */
    get worldMatrix(): Matrix4;
    /**
     *
     * Update the matrix4 in world space
     */
    updateWorldMatrix(force?: boolean): void;
    updateChildTransform(): void;
    lookTarget(target: Vector3, up?: Vector3): void;
    /**
     * Current object's gaze position (global) (modified by its own global transformation)
     * @param pos Own position (global)
     * @param target Location of the target (global)
     * @param up up direction
     */
    lookAt(pos: Vector3, target: Vector3, up?: Vector3): void;
    decomposeFromMatrix(matrix: Matrix4, orientationStyle?: string): this;
    /**
    *
    * Create a new component, copy the properties of the current component, and add it to the target object.
    * @param obj source Object3D
    */
    cloneTo(obj: Object3D): void;
    set x(value: number);
    /**
     *
     * The position of the object relative to its parent X-axis
     */
    get x(): number;
    set y(value: number);
    /**
     *
     * The position of the object relative to its parent Y-axis
     */
    get y(): number;
    set z(value: number);
    /**
     *
     * The position of the object relative to its parent Y-axis
     */
    get z(): number;
    set scaleX(value: number);
    /**
     *
     * The scale of the object relative to its parent X-axis
     */
    get scaleX(): number;
    set scaleY(value: number);
    /**
     *
     * The scale of the object relative to its parent Y-axis
     */
    get scaleY(): number;
    set scaleZ(value: number);
    /**
     *
     * The scale of the object relative to its parent Z-axis
     */
    get scaleZ(): number;
    set rotationX(value: number);
    /**
     *
     * The rotation of the object relative to its parent X-axis
     */
    get rotationX(): number;
    set rotationY(value: number);
    /**
     *
     * The rotation of the object relative to its parent Y-axis
     */
    get rotationY(): number;
    set rotationZ(value: number);
    /**
     *
     * The rotation of the object relative to its parent Z-axis
     */
    get rotationZ(): number;
    /**
     *
     * world position
     */
    get worldPosition(): Vector3;
    set localPosition(v: Vector3);
    /**
     *
     * The position of an object relative to its parent
     */
    get localPosition(): Vector3;
    set localRotation(v: Vector3);
    /**
     *
     * The rotaion vector of an object relative to its parent
     */
    get localRotation(): Vector3;
    set localScale(v: Vector3);
    /**
     *
     * The scale of an object relative to its parent
     */
    get localScale(): Vector3;
    get localDetailScale(): Vector3;
    set localDetailScale(value: Vector3);
    get localDetailRot(): Vector3;
    set localDetailRot(value: Vector3);
    get localDetailPos(): Vector3;
    set localDetailPos(value: Vector3);
    beforeDestroy(force?: boolean): void;
    destroy(): void;
}
