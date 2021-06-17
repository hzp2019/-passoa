import { DBC } from '../entity/dbc.entity';
import { DBCInfo, CopyProjectInfo } from '../model/info_model';
declare class DBCApi {
    bindingDBCByProject(info: DBCInfo): Promise<DBC | undefined>;
    findDBCFileNameByProject(info: DBCInfo): Promise<DBC | undefined>;
    copyByProjectId(info: CopyProjectInfo): Promise<DBC | "copy dbc done">;
}
export declare let dbcApi: DBCApi;
export {};
