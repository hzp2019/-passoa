import { ifCMLog } from './cmLog';
export interface optUnZip {
    strip: number;
    filter?: (entryPath: string) => boolean;
}
export interface ifKy {
    src: string;
    dst: string;
    option?: optUnZip;
}
export declare class Downloader {
    private done;
    private length;
    private unzipTotal;
    private unzipNo;
    private notifyOk;
    constructor(options: ifCMLog);
    downloadAll(task: ifKy[]): Promise<void>;
    private downloadFile;
    getExt(filename: string, extlist: string[]): string;
    unzipAll(task: ifKy[]): Promise<void>;
    private strip;
    private onEntry;
    private notifyFinish;
    uncompressingTgz(iter: ifKy): Promise<boolean>;
    uncompressingZip(iter: ifKy): Promise<boolean>;
    uncompressingGZip(iter: ifKy): Promise<boolean>;
}
