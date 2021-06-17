interface ifOptions {
    runtimeVersion?: string;
    runtime?: string;
    arch?: string;
}
export declare class TargetOptions {
    private options;
    constructor(options: ifOptions);
    get arch(): string;
    get isX86(): boolean;
    get isX64(): boolean;
    get isArm(): boolean;
    get runtime(): string;
    get runtimeVersion(): string;
}
export {};
