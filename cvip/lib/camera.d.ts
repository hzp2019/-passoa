/// <reference types="node" />
import { Readable } from 'stream';
export declare class Camera extends Readable {
    private inst;
    constructor(idx: number);
    _read(size: number): void;
    _destroy(): void;
    _final(): void;
    get(prop_idx: number): any;
    set(prop_idx: number, value: number): any;
    take(path: string): any;
    startRecord(path: string): any;
    stopRecord(): any;
    static count(): any;
    isOpened(): any;
    testLog(log: string): any;
}
