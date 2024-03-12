/// <reference types="@webgpu/types" />
import { GPUBufferBase } from "../core/buffer/GPUBufferBase";
import { Color } from "../../../../math/Color";
import { Vector2 } from "../../../../math/Vector2";
import { Vector3 } from "../../../../math/Vector3";
import { Vector4 } from "../../../../math/Vector4";
import { Struct } from "../../../../util/struct/Struct";
import { StorageGPUBuffer } from "../core/buffer/StorageGPUBuffer";
import { StructStorageGPUBuffer } from "../core/buffer/StructStorageGPUBuffer";
import { UniformGPUBuffer } from "../core/buffer/UniformGPUBuffer";
import { UniformNode } from "../core/uniforms/UniformNode";
import { ShaderReflection } from "./value/ShaderReflectionInfo";
import { UniformValue } from "./value/UniformValue";
import { MaterialDataUniformGPUBuffer } from "../core/buffer/MaterialDataUniformGPUBuffer";
export declare class ShaderPassBase {
    /**
     * Shader Unique instance id
     */
    readonly instanceID: string;
    /**
     * Shader variant value
     */
    shaderVariant: string;
    /**
     * Vertex stage entry point name
     */
    vsEntryPoint: string;
    /**
     * Fragment stage entry point name
     */
    fsEntryPoint: string;
    /**
     * BindGroup collection
     */
    bindGroups: GPUBindGroup[];
    /**
     * Shader reflection info
     */
    shaderReflection: ShaderReflection;
    /**
     * The defined syntax value of the Shader when it is precompiled
     */
    defineValue: {
        [name: string]: any;
    };
    /**
     * The constant value of the Shader when it is precompiled
     */
    constValues: {
        [name: string]: any;
    };
    /**
     * Uniforms data collection
     */
    uniforms: {
        [name: string]: UniformNode;
    };
    /**
       * Uniform data for materials
       */
    materialDataUniformBuffer: MaterialDataUniformGPUBuffer;
    protected _bufferDic: Map<string, GPUBufferBase>;
    protected _shaderChange: boolean;
    protected _valueChange: boolean;
    constructor();
    /**
     * notice shader change
     */
    noticeShaderChange(): void;
    /**
     * notice shader state change
     */
    noticeValueChange(): void;
    /**
    * set storage gpu buffer
    * @param name buffer name
    * @param buffer storage useAge gpu buffer
    */
    setStorageBuffer(name: string, buffer: StorageGPUBuffer): void;
    /**
     * set struct storage gpu buffer
     * @param name buffer name
     * @param buffer struct storage useAge gpu buffer
     */
    setStructStorageBuffer<T extends Struct>(name: string, buffer: StructStorageGPUBuffer<T>): void;
    /**
     * set uniform gpu buffer min size 256
     * @param name
     * @param buffer
     */
    setUniformBuffer(name: string, buffer: UniformGPUBuffer): void;
    /**
     * set define value
     * @param defineName
     * @param value
     */
    setDefine(defineName: string, value: any): void;
    /**
     * Whether there is a define key
     * @param defineName
     * @returns
     */
    hasDefine(defineName: string): boolean;
    /**
     * delete define value
     * @param defineName
     */
    deleteDefine(defineName: string): void;
    /**
     * set uniform float value
     * @param name
     * @param value
     */
    setUniformFloat(name: string, value: number): void;
    /**
     * set uniform vector2 value
     * @param name
     * @param value
     */
    setUniformVector2(name: string, value: Vector2): void;
    /**
     * set uniform vector3 value
     * @param name
     * @param value
     */
    setUniformVector3(name: string, value: Vector3): void;
    /**
     * set uniform vector4 value
     * @param name
     * @param value
     */
    setUniformVector4(name: string, value: Vector4): void;
    /**
     * set uniform color value
     * @param name
     * @param value
     */
    setUniformColor(name: string, value: Color): void;
    /**
     * set uniform array value
     * @param name
     * @param value
     */
    setUniformArray(name: string, value: Float32Array): void;
    setUniform(name: string, value: UniformValue): void;
    getUniform(name: string): UniformValue;
    getUniformFloat(name: string): number;
    getUniformVector2(name: string): Vector2;
    getUniformVector3(name: string): Vector3;
    getUniformVector4(name: string): Vector4;
    getUniformColor(name: string): Color;
    getBuffer(name: string): GPUBufferBase;
    protected noticeBufferChange(name: string): void;
    applyUniform(): void;
    /**
     * destroy
     */
    destroy(force?: boolean): void;
}
