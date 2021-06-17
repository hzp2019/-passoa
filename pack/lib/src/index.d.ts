/// <reference types="node" />
import { Duplex } from 'stream';
export declare class packStream extends Duplex {
    constructor();
    _read(): void;
    _write(chunk: any, encoding: string, callback: (error?: Error | null) => void): void;
}
export declare class unpackStream extends Duplex {
    private _tmp;
    private _len;
    private _end;
    private _type;
    private _buf;
    constructor();
    _read(): void;
    _write(chunk: any, encoding: string, callback: (error?: Error | null) => void): void;
    checkData(data: Buffer): void;
    checkHead(): boolean;
    head(): boolean;
    parse(): boolean;
    next(): boolean | undefined;
}
