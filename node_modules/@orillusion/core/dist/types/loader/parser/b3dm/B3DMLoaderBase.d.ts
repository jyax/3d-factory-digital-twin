import { FeatureTable, BatchTable } from './FeatureTable.js';
export declare class B3DMLoaderBase {
    parse(buffer: ArrayBuffer): Promise<{
        version: number;
        featureTable: FeatureTable;
        batchTable: BatchTable;
        glbBytes: Uint8Array;
    }>;
}
