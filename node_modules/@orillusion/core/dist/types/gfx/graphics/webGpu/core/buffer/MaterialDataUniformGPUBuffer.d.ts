import { UniformNode } from '../uniforms/UniformNode';
import { GPUBufferBase } from './GPUBufferBase';
/**
 * Real time Uniform GPUBuffer used by shaders
 * @group GFX
 */
export declare class MaterialDataUniformGPUBuffer extends GPUBufferBase {
    uniformNodes: UniformNode[];
    private _onChange;
    constructor();
    /**
     * Initialize bound shader base variables
     * The array of variables is automatically mapped through the parameters of the shader reflection
     * @param uniformNodes
     * @see UniformNode
     */
    initDataUniform(uniformNodes: UniformNode[]): void;
    onChange(): void;
    /**
     * Reapply and write to buffer
     * @returns
     */
    apply(): void;
}
