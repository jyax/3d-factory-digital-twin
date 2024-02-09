/// <reference types="@webgpu/types" />
import { MemoryDO } from '../../../../../../core/pool/memory/MemoryDO';
import { Probe } from '../../../../../renderJob/passRenderer/ddgi/Probe';
/**
 * @internal
 * @group GFX
 */
export declare class ProbeEntries {
    gpuBuffer: GPUBuffer;
    probes: Probe[];
    memoryDo: MemoryDO;
    private _probeInfoList;
    initDataUniform(probes: Probe[]): void;
    private updateGPUBuffer;
}
