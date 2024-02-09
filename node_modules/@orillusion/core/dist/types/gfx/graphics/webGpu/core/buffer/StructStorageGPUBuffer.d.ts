import { Struct } from '../../../../../util/struct/Struct';
import { GPUBufferBase } from './GPUBufferBase';
/**
 * Structure storage class buffer, convenient for initializing gpubuffers of structure types
 * written in the computer shader or CPU Coder
 * usage GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST {@link GPUBufferUsage}
 * @group GFX
 */
export declare class StructStorageGPUBuffer<T extends Struct> extends GPUBufferBase {
    constructor(struct: {
        new (): T;
    }, count: number, usage?: number);
}
