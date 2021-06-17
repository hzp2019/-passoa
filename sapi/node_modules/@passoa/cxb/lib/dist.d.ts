import { ifKy } from './downloader';
interface DistOptions {
    [key: string]: any;
}
export declare class Dist {
    private options;
    private log;
    private targetOptions;
    private downloader;
    constructor(options?: DistOptions);
    get internalPath(): any;
    get externalPath(): string;
    get downloaded(): boolean;
    get winLibs(): any[];
    get headerOnly(): any;
    ensureDownloaded(): Promise<void>;
    download(): Promise<void>;
    _downloadTar(task1: ifKy[], task2: ifKy[]): Promise<void>;
    _downloadLibs(task: ifKy[]): Promise<void>;
}
export {};
