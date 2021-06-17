export declare class Uploader {
    constructor();
    packTgz(src: string, dst: string): Promise<unknown>;
    readFileByPath(path: string): void;
    upload(url: string, path: string, token: string, opt?: {
        method: string;
        form: boolean;
    }): Promise<unknown>;
}
