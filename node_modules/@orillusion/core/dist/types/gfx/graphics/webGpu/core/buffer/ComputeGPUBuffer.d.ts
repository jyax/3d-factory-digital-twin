import { GPUBufferBase } from './GPUBufferBase';
/**
 * Storage class buffer for calculating shaders
 * Usage GPUBufferUsage.STORAGE & GPUBufferUsage.COPY_SRC & GPUBufferUsage.COPY_DST
 * @group GFX
 */
export declare class ComputeGPUBuffer extends GPUBufferBase {
    constructor(size: number, data?: Float32Array);
}
