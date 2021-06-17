import { Version } from '../entity/version.entity';
import { VersionInfo } from '../model/info_model';
declare class VersionApi {
    create(versionInfo: VersionInfo): Promise<Version>;
    findByProject(pid: string): Promise<Version[]>;
}
export declare let versionApi: VersionApi;
export {};
