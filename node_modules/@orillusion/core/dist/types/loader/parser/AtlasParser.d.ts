import { ParserBase } from "../../loader/parser/ParserBase";
import { ParserFormat } from "./ParserFormat";
export declare class AtlasParser extends ParserBase {
    static format: ParserFormat;
    private _json;
    private _texture;
    parseString(data: string): Promise<void>;
    /**
     * Verify parsing validity
     * @param ret
     * @returns
     */
    verification(): boolean;
    private parseAtlas;
}
