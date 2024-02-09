export declare class StorageUtil {
    static localData: any;
    static load<T>(dataTable: string): T;
    static save<T>(table: string, data: T): void;
}
