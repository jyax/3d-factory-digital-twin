import { ParserBase } from './ParserBase';
import { ParserFormat } from './ParserFormat';
export declare class I3DMParser extends ParserBase {
    static format: ParserFormat;
    parseBuffer(buffer: ArrayBuffer): Promise<void>;
    /**
     * Verify parsing validity
     * @param ret
     * @returns
     */
    verification(): boolean;
}
