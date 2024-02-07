import { CEventDispatcher } from '../event/CEventDispatcher';
import { ParserBase } from './parser/ParserBase';
/**
 * @internal
 * Load management classes
 * @group Loader
 */
export declare class LoaderManager extends CEventDispatcher {
    private static _instance;
    private _maxRetry;
    /**
     * Load multiple resources of the same type simultaneously
     * @param urls URL list
     * @param c Type of resource parser
     * @returns
     */
    loadAll<T extends ParserBase>(urls: string[], c: {
        new (): T;
    }): Promise<T[]>;
    constructor();
    static getInstance(): LoaderManager;
    loadUrls(urls: string[], c: {
        new (): ParserBase;
    }): Promise<ParserBase[]>;
    get maxRetry(): number;
    set maxRetry(value: number);
    load<T extends ParserBase>(url: string, c: {
        new (): T;
    }): Promise<T>;
}
