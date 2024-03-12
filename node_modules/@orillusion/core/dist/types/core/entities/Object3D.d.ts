import { Transform } from '../../components/Transform';
import { Quaternion } from '../../math/Quaternion';
import { Vector3 } from '../../math/Vector3';
import { Entity } from './Entity';
import { Ctor } from "../../util/Global";
import { IComponent } from '../../components/IComponent';
import { SerializeTag } from '../../util/SerializeDecoration';
import { Color } from '../../math/Color';
/**
 * The base class of most objects provides a series of properties and methods for manipulating objects in three-dimensional space.
 * @group Entity
 */
export declare class Object3D extends Entity {
    protected _isScene3D: boolean;
    prefabRef?: string;
    serializeTag?: SerializeTag;
    /**
     * Instantiate a 3D object
     */
    constructor();
    get isScene3D(): boolean;
    /**
     *
     * Traverse all sub objects starting from the object itself.
     *  If there are still sub objects in the sub object, recursively traverse.
     * @param callFunction execution body. Will execute sub objects as parameters
     * @returns
     */
    forChild(call: Function): void;
    /**
     *
     * Create a new component and add it to the object, and return an instance of the component.
     *  If a component of this type already exists, it will not be added and will return null.
     * @param c class of component
     * @return result component
     */
    addComponent<T extends IComponent>(c: Ctor<T>, param?: any): T;
    /**
     *
     * Returns an instance of a component object of the specified type.
     *  If there are no components of that type, a new component is created and added to the object.
     * @param c class of component
     * @returns result component
     */
    getOrAddComponent<T extends IComponent>(c: Ctor<T>): T;
    /**
     *
     * Remove components of the specified type
     * @param c class of component
     */
    removeComponent<T extends IComponent>(c: Ctor<T>): void;
    /**
     *
     * Is there a component of the specified type
     * @param c type of component
     * @returns boolean
     */
    hasComponent<T extends IComponent>(c: Ctor<T>): boolean;
    /**
     *
     * Returns a component of the specified type.
     * @param c class of component
     * @returns result component
     */
    getComponent<T extends IComponent>(c: Ctor<T>): T;
    /**
     *
     * Returns a component object of the specified type from the parent node.
     *  If there are no components of that type,
     *  calls the parent object lookup of the parent object
     * @param c class of component
     * @returns reulst component
     */
    getComponentFromParent<T extends IComponent>(c: Ctor<T>): T;
    /**
     *
     * Returns an array of component objects of the specified type.
     *  If there are no components of that type, search in the list of self body class objects
     * @param c class of component
     * @returns result components
     */
    getComponentsInChild<T extends IComponent>(c: Ctor<T>): T[];
    /**
     *
     * Returns all components of the specified type contained in the current object and its children.
     *  If there are children in the child object, recursively search.
     * @param c class of component
     * @param outList result component list
     * @param includeInactive Whether to include invisible objects, default to false
     * @returns {outList}
     */
    getComponents<T extends IComponent>(c: Ctor<T>, outList?: Array<T>, includeInactive?: boolean): T[];
    /**
     *
     * Quickly obtain components and no longer access child nodes after obtaining them at a certain node
     * @template T
     * @param {{ new(): T; }} c class of component
     * @param ret List of incoming T
     * @param includeInactive Whether to include invisible objects, default to false
     * @return {*}  {T}
     * @memberof Object3D
     */
    getComponentsExt<T extends IComponent>(c: Ctor<T>, ret?: T[], includeInactive?: boolean): T[];
    getComponentsByProperty<T extends IComponent>(key: string, value: any, findedAndBreak?: boolean, ret?: T[], includeInactive?: boolean): T[];
    /**
     *
     * clone a Object3D
     * @returns
     */
    clone(): Object3D;
    /**
     *
     * @private
     * @returns
     */
    instantiate(): Object3D;
    /**
     * Get the position of an object relative to its parent
     */
    get localPosition(): Vector3;
    /**
     * Set the position of an object relative to its parent
     */
    set localPosition(value: Vector3);
    /**
     * Get the rotation attribute of an object relative to its parent
     */
    get localRotation(): Vector3;
    /**
     * Set the rotation attribute of an object relative to its parent
     */
    set localRotation(value: Vector3);
    /**
     * Get the scaling attribute of an object relative to its parent
     */
    get localScale(): Vector3;
    /**
     * Set the scaling attribute of an object relative to its parent
     */
    set localScale(value: Vector3);
    /**
     * Get the rotation attribute of an object relative to its parent, which is a quaternion
     */
    get localQuaternion(): Quaternion;
    /**
     * Set the rotation attribute of an object relative to its parent, which is a quaternion
     */
    set localQuaternion(value: Quaternion);
    /**
     * Notify transformation attribute updates
     */
    notifyChange(): void;
    /**
     *
     * Transform component of object parent
     */
    get parent(): Transform;
    /**
     *
     * parent object3D
     */
    get parentObject(): Object3D;
    /**
     *
     * Set the x coordinate relative to the local coordinates of the parent container.
     */
    set x(value: number);
    /**
     *
     * Get the x coordinate relative to the local coordinates of the parent container.
     */
    get x(): number;
    /**
     * Set the y coordinate relative to the local coordinates of the parent container.
     */
    set y(value: number);
    /**
     *
     * Get the y coordinate relative to the local coordinates of the parent container.
     */
    get y(): number;
    /**
     * Set the z coordinate relative to the local coordinates of the parent container.
     */
    set z(value: number);
    /**
     * Get the z coordinate relative to the local coordinates of the parent container.
     */
    get z(): number;
    /**
     * Set the x scale relative to the local coordinates of the parent container.
     */
    set scaleX(value: number);
    /**
     *
     * Get the x scale relative to the local coordinates of the parent container.
     */
    get scaleX(): number;
    /**
     *
     * Set the y scale relative to the local coordinates of the parent container.
     */
    set scaleY(value: number);
    /**
     *
     * Get the y scale relative to the local coordinates of the parent container.
     */
    get scaleY(): number;
    /**
     *
     * Set the z scale relative to the local coordinates of the parent container.
     */
    set scaleZ(value: number);
    /**
     *
     * Get the z scale relative to the local coordinates of the parent container.
     */
    get scaleZ(): number;
    /**
     *
     * Set the x rotation relative to the local coordinates of the parent container.
     */
    set rotationX(value: number);
    /**
     *
     * Get the x rotation relative to the local coordinates of the parent container.
     */
    get rotationX(): number;
    /**
     *
     * Set the y rotation relative to the local coordinates of the parent container.
     */
    set rotationY(value: number);
    /**
     *
     * Get the y rotation relative to the local coordinates of the parent container.
     */
    get rotationY(): number;
    /**
     *
     * Set the z rotation relative to the local coordinates of the parent container.
     */
    set rotationZ(value: number);
    /**
     *
     * Set the z rotation relative to the local coordinates of the parent container.
     */
    get rotationZ(): number;
    /**
     * @internal
     */
    protected fixedUpdate(): void;
    /**
     * @internal
     */
    protected lateUpdate(): void;
    /**
     *
     * Recursive child nodes and execute specified function
     * @param callback specified function
     */
    traverse(callback: (child: any) => void): void;
    /**
     *
     * Release self
     */
    destroy(force?: boolean): void;
}
export interface IObject3DForPropertyAnim {
    materialColor: Color;
    notifyMaterialColorChange(materialIndex: number, key: string): any;
    active: number;
}
