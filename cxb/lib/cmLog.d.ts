export interface ifCMLog {
    noLog?: boolean;
    logName?: string;
}
export declare class CMLog {
    private options;
    private debug;
    constructor(options: ifCMLog);
    get level(): any;
    silly(cat: string, msg: string): void;
    verbose(cat: string, msg: string): void;
    info(cat: string, msg: string): void;
    warn(cat: string, msg: string): void;
    http(cat: string, msg: string): void;
    error(cat: string, msg: string): void;
}
export declare function slog(msg: string): void;
