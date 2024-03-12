/// <reference types="@webgpu/types" />
import { Texture } from '../core/texture/Texture';
import { ShaderPassBase } from './ShaderPassBase';
import { ShaderReflectionVarInfo } from './value/ShaderReflectionInfo';
/**
 * @internal
 * @author sirxu
 * compute shader kernel
 */
export declare class ComputeShader extends ShaderPassBase {
    /**
     * Compute shader entry point name
     */
    entryPoint: string;
    /**
     * Compute shader x worker number
     */
    workerSizeX: number;
    /**
     * Compute shader y worker number
     */
    workerSizeY: number;
    /**
     * Compute shader z worker number
     */
    workerSizeZ: number;
    protected _computePipeline: GPUComputePipeline;
    protected _csShaderModule: GPUShaderModule;
    protected _destCS: string;
    protected _sourceCS: string;
    private _storageTextureDic;
    private _sampleTextureDic;
    private _groupsShaderReflectionVarInfos;
    private _groupCache;
    /**
     *
     * @param computeShader wgsl compute shader
     */
    constructor(computeShader: string);
    /**
     * set write or read storage texture , use textureLod
     * @param name
     * @param texture
     */
    setStorageTexture(name: string, texture: Texture): void;
    /**
     * set samplerTexture , use textureSample or other sample texture api
     * @param name
     * @param texture
     */
    setSamplerTexture(name: string, texture: Texture): void;
    /**
     * Record the compute shader distribution command
     * @param computePass Compute pass encoder
     */
    compute(computePass: GPUComputePassEncoder): void;
    private createBufferBindGroup;
    protected noticeBufferChange(name: string): void;
    protected genGroups(groupIndex: number, infos: ShaderReflectionVarInfo[][], force?: boolean): void;
    protected genComputePipeline(): void;
    protected preCompileShader(shader: string): void;
    protected compileShader(): GPUShaderModule;
    private genReflection;
}
