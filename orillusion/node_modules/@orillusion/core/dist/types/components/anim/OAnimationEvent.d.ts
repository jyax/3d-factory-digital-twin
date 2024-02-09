import { CEvent } from "../../event/CEvent";
import { SkeletonAnimationComponent } from "../SkeletonAnimationComponent";
/**
 * Skeleton animation event
 * @group Animation
 */
export declare class OAnimationEvent extends CEvent {
    /**
     * owner skeleton animation component
     */
    skeletonAnimation: SkeletonAnimationComponent;
    constructor(name: string, time: number);
}
