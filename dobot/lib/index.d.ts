/// <reference types="node" />
import { Duplex } from 'stream';
export interface PTPInfo {
    ptpMode: number;
    x: number;
    y: number;
    z: number;
    r: number;
    accelerationRatio: number;
    velocityRatio: number;
    jumpHeight: number;
    zLimit: number;
}
export declare class Dobot extends Duplex {
    private inst;
    constructor(com: string);
    _read(size: number): void;
    _destroy(): void;
    _final(): void;
    zero(): any;
    setPTP(chunk: PTPInfo): any;
    isOpened(): boolean;
}
