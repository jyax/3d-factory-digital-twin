import { LoaderBase } from './LoaderBase';
import { LoaderFunctions } from './LoaderFunctions';
import { ParserBase } from './parser/ParserBase';
import { Parser } from "../util/Global";
/**
 * @internal
 * @group Loader
 */
export declare class FileLoader extends LoaderBase {
    /**
     * Load the file from the URL
     * @param url file URL
     * @param c File parser
     * @param loaderFunctions loader callback
     * @see LoaderFunctions
     * @returns
     */
    load<T extends ParserBase>(url: string, c: Parser<T>, loaderFunctions?: LoaderFunctions, userData?: any): Promise<T>;
}
