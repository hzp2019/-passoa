/// <reference types="node" />
import { Duplex } from 'stream';
export interface PcanInfo {
    baudrate: number;
    hardware_type: number;
    io_port: number;
    interrupt: number;
}
export interface PCANMsg {
    id: number;
    type?: number;
    data: Buffer;
    dlc?: number;
}
export declare class Pcan extends Duplex {
    private inst;
    private wakeup;
    private timer;
    constructor(info: PcanInfo);
    _read(size: number): void;
    _destroy(): void;
    _final(): void;
    _write(chunk: any, encoding: string, next: () => void): void;
    isOpened(): boolean;
}
