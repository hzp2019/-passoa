import { Connection, ConnectionOptions } from 'typeorm';
declare class Connect {
    private inst;
    private pgconfig;
    private sqliteconfig;
    constructor();
    connectDB(config: any): Promise<unknown>;
    changeDB(opts: ConnectionOptions): Promise<unknown>;
    getConnection(): Connection;
}
export declare let connect: Connect;
export {};
