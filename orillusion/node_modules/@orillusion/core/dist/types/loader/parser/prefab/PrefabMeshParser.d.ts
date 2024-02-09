import { BytesArray } from "../../../util/BytesArray";
import { ParserBase } from "../ParserBase";
import { ParserFormat } from "../ParserFormat";
import { PrefabParser } from "./PrefabParser";
export declare class PrefabMeshParser extends ParserBase {
    static format: ParserFormat;
    parseBuffer(buffer: ArrayBuffer): Promise<void>;
    static parserMeshs(bytesStream: BytesArray, prefabParser: PrefabParser): void;
    /**
     * Verify parsing validity
     * @param ret
     * @returns
     */
    verification(): boolean;
}
