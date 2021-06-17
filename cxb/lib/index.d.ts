interface ConfigObject {
    name: string;
    configuration: string;
    external: any[];
    version: string;
    platform: string;
    arch: string;
    build_cmd: any;
    toolset_path: string;
    make_path: string;
    module_name: string;
    module_path: string;
    remote_path: string;
    package_name: string;
    host: string;
    hosted_path: string;
    hosted_tarball: string;
    staged_tarball: string;
    root_dir: string;
    method: string;
    form: boolean;
    [key: string]: any;
}
export declare function initConfig(): ConfigObject;
export declare function run(argv: any): Promise<-1 | 0 | -2>;
export declare function build(config: ConfigObject): Promise<number>;
export declare function install(config: ConfigObject): Promise<number>;
export declare function release(config: ConfigObject): Promise<number>;
export declare function pack(config: ConfigObject): Promise<unknown>;
export {};