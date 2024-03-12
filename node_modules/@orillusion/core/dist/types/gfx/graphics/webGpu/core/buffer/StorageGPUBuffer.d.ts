import { ArrayBufferData } from './ArrayBufferData';
import { GPUBufferBase } from './GPUBufferBase';
/**
 * The buffer of the storage class
 * written in the computer shader or CPU Coder
 * usage GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
 * @group GFX
 */
export declare class StorageGPUBuffer extends GPUBufferBase {
    constructor(size: number, usage?: number, data?: ArrayBufferData);
}
