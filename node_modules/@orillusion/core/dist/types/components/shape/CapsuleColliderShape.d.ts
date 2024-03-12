import { ColliderShape } from './ColliderShape';
/**
 * Capsule collision body.
 * Composed of two hemispheres connected to a cylinder.
 * @group Collider
 */
export declare class CapsuleColliderShape extends ColliderShape {
    /**
     * The radius of the local width of the collision body.
     */
    radius: number;
    /**
     * The total height of the collision body.
     */
    height: number;
    constructor();
}
