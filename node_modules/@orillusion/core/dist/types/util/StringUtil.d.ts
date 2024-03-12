/**
 * String processing tool class
 * @group Util
 */
export declare class StringUtil {
    private static _filterChar;
    /**
     *
     * Does the string exist
     * @param fields List of detected string
     * @param str source string
     * @returns Return the index position where it is located. If it does not exist, return -1
     */
    static hasString(fields: Array<string>, str: string): number;
    /**
     * Gets an ellipsis terminated string representation that exceeds the range
     * @param str source string
     * @param len range of string
     * @returns result string
     */
    static getEllipsis(str: any, len?: number): string;
    /**
     * get name based on URL
     * @param url source url
     * @returns name
     */
    static getURLName(url: string): string;
    /**
     * get suffix of file name from url
     * @param url source url
     * @returns suffix
     */
    static getFileFormat(url: string): string;
    /**
     * get information stored in a string
     * @param line source string
     * @param data result data reference
     */
    static readLineProperty(line: string, data: any): void;
    static getPath(url: string): string;
    static normalizePath(url: string): string;
    /**
     * Used to cut specified characters
     * @param str source string
     * @param char cut string
     * @returns result string array
     */
    static getStringList(str: string, char?: string): string[];
    /**
     * Format timestamp data
     * @param time timestamp
     * @returns
     */
    static formatTime(time: number): string[];
    /**
     * trim
     * @param str source string
     * @returns result string
     */
    static trim(str: any): any;
    /**
     * Determine if the string is empty, null, '' or 'null'
     * @param value source string
     * @returns boolean
     */
    static isEmpty(value: any): boolean;
    /**
     * Handle strings that exceed the length range, such as adding strings that exceed the range
     * @param str source string
     * @param len length
     * @returns result string
     */
    static strCut(str: any, len: any): string;
    /**
     * According to the splicing request parameters
     * @param key key string
     * @param value value string
     * @param isEncodeURI isEncodeURI
     * @returns result string
     */
    static toQueryPair(key: any, value: any, isEncodeURI?: boolean): string;
    /**
     * format a string
     * @param str source string
     * @param params Pass in a regular processing parameter array
     * @returns result string
     */
    static stringFormat(str: string, ...params: any[]): string;
    /**
     * Convert JSON objects to strings
     * @param json object of json
     * @param options
     * @returns result string
     */
    static parseJson2String(json: any, options?: any): string;
    /**
     * Compatibility mode - version comparison
     * @param v1 Version 1
     * @param v2 Version 2
     * @returns Returns 1, -1, or 0, indicating that the version number is greater, less, or equal, respectively
     */
    static compareVersion(v1: any, v2: any): 1 | 0 | -1;
    /**
     * Generate non repeating random string codes
     * @returns result
     */
    static buildRandomCode(): string;
    /**
     * UUID
     * @returns UUID
     */
    static UUID(): string;
    /**
     * make hash code
     * @param str source value
     * @returns hash code
     */
    static stringToHash(str: any): number;
    /**
     * Convert GLTF URL Address
     * @param base baseURL
     * @param url source url
     * @returns result url
     */
    static parseUrl(base: string, url: string): string;
}
