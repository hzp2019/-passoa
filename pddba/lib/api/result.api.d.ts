import { LocalResult } from '../entity/local_result.entity';
import { CacheResult } from '../entity/cache_result.entity';
import { LocalResultCreateInfo, StartCacheResultInfo } from '../model/info_model';
import { FindBriefResultDto, ResultFindByModuleDto } from '../model/query_model';
declare class ResultApi {
    create(info: LocalResultCreateInfo): Promise<LocalResult>;
    clearLocalData(queueName: string): Promise<void>;
    findBriefResult(info: FindBriefResultDto): Promise<{
        create_time: Date;
        ok: number;
        ng: number;
    } | null>;
    findModule(info: FindBriefResultDto): Promise<any[]>;
    findByModule(dto: ResultFindByModuleDto): Promise<LocalResult[] | {
        queueName: string;
        count: number;
    }>;
    startCacheResult(info: StartCacheResultInfo): Promise<string>;
    clearCacheResult(queueName: string): Promise<void>;
    findCacheResultByQueueName(queueName: string): Promise<CacheResult | undefined>;
}
export declare let resultApi: ResultApi;
export {};
