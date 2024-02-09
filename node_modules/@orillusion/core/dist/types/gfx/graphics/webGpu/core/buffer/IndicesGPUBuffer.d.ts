/// <reference types="@webgpu/types" />
import { MemoryInfo } from '../../../../../core/pool/memory/MemoryInfo';
import { ArrayBufferData } from './ArrayBufferData';
import { GPUBufferBase } from './GPUBufferBase';
/**
 * The buffer use at geometry indices
 * written in the computer shader or CPU Coder
 * usage GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | GPUBufferUsage.INDEX | GPUBufferUsage.INDIRECT
 * @group GFX
 */
export declare class IndicesGPUBuffer extends GPUBufferBase {
    indicesNode: MemoryInfo;
    constructor(data?: ArrayBufferData);
    protected createIndicesBuffer(usage: GPUBufferUsageFlags, data?: ArrayBufferData): void;
}
