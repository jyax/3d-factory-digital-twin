/// <reference types="@webgpu/types" />
import { MemoryInfo } from '../../../../../core/pool/memory/MemoryInfo';
import { GPUBufferBase } from './GPUBufferBase';
/**
 * The buffer use at geometry indices
 * written in the computer shader or CPU Coder
 * usage GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | GPUBufferUsage.VERTEX
 * @group GFX
 */
export declare class VertexGPUBuffer extends GPUBufferBase {
    node: MemoryInfo;
    constructor(size: number);
    protected createVertexBuffer(usage: GPUBufferUsageFlags, size: number): void;
}
