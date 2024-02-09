import { GPUBufferBase } from './GPUBufferBase';
/**
 * CPU write, GPU read-only transmission buffer
 * Can only be copied and written in the cpu coder
 * usage GPUBufferUsage.UNIFORM & GPUBufferUsage.COPY_DST & GPUBufferUsage.COPY_SRC {@link GPUBufferUsage}
 * @group GFX
 */
export declare class UniformGPUBuffer extends GPUBufferBase {
    constructor(size: number, data?: Float32Array);
    genUniformNodes(): void;
}
