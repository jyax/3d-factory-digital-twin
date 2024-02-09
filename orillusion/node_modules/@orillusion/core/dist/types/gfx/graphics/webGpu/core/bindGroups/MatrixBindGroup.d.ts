import { MatrixGPUBuffer } from '../buffer/MatrixGPUBuffer';
/**
 * @author sirxu
 * @internal
 * @group GFX
 */
export declare class MatrixBindGroup {
    uuid: string;
    index: number;
    usage: number;
    groupBufferSize: number;
    matrixBufferDst: MatrixGPUBuffer;
    constructor();
    private cacheWorldMatrix;
    writeBuffer(len: number): void;
}
