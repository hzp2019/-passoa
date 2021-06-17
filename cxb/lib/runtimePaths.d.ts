import { TargetOptions } from './targetOptions';
export declare let runtimePaths: {
    node: (targetOptions: TargetOptions) => {
        externalPath: string;
        winLibs: {
            dir: string;
            name: string;
        }[];
        tarPath: string;
        headerOnly: boolean;
    };
    iojs: (targetOptions: TargetOptions) => {
        externalPath: string;
        winLibs: {
            dir: string;
            name: string;
        }[];
        tarPath: string;
        headerOnly: boolean;
    };
    nw: (targetOptions: TargetOptions) => {
        externalPath: string;
        winLibs: {
            dir: string;
            name: string;
        }[];
        tarPath: string;
        headerOnly: boolean;
    };
    electron: (targetOptions: TargetOptions) => {
        externalPath: string;
        winLibs: {
            dir: string;
            name: string;
        }[];
        tarPath: string;
        headerOnly: any;
    };
    get: (targetOptions: TargetOptions) => {
        externalPath: string;
        winLibs: {
            dir: string;
            name: string;
        }[];
        tarPath: string;
        headerOnly: any;
    };
};
