import { AnimationCurve } from "../../../math/AnimationCurve";
/**
 * @internal
 * @group Animation
 */
export declare class AttributeAnimCurve extends AnimationCurve {
    attribute: string;
    propertyList: string[];
    path: string;
    constructor();
    unSerialized(data: any): this;
}
