import { AutoHistory } from '../entity/auto_history.entity';
import { AutoStep } from '../entity/auto_step.entity';
import { AutoHistoryUpdateInfo, AutoStepCreateInfo, AutoStepNameUpdateInfo, AutoStepContentUpdateInfo, AutoResultCreateInfo, RenameStepCreateInfo, RemoveAutoStepInfo, CopyProjectInfo } from '../model/info_model';
import { AutoStepFindByParentIdDto, FindAutoResultDto, AutoStepFuzzyMatchDto } from '../model/query_model';
import { AutoResult } from '../entity/auto_result.entity';
declare class AutoApi {
    updateAutoHistory(autoHistoryUpdateInfo: AutoHistoryUpdateInfo): Promise<string>;
    findOneAutoHistory(chid: string): Promise<AutoHistory | undefined>;
    createAutoStep(autoStepInfo: AutoStepCreateInfo): Promise<AutoStep>;
    updateAutoStepById(info: AutoStepNameUpdateInfo): Promise<string>;
    updateAutoStepContent(info: AutoStepContentUpdateInfo): Promise<string>;
    findAutoStepByParentId(info: AutoStepFindByParentIdDto): Promise<AutoStep[]>;
    fuzzyMatchByName(info: AutoStepFuzzyMatchDto): Promise<AutoStep[]>;
    findAutoStepsByAction(info: AutoStepFuzzyMatchDto): Promise<AutoStep[]>;
    deleteAutoStepById(info: RemoveAutoStepInfo): Promise<string>;
    createAutoResult(info: AutoResultCreateInfo): Promise<string>;
    clearAutoResult(): Promise<import("typeorm").DeleteResult>;
    findAutoResult(info: FindAutoResultDto): Promise<AutoResult[]>;
    renameAutoStepByFixedID(info: RenameStepCreateInfo): Promise<AutoStep>;
    findAllAutoStepId(pid: string): Promise<any[]>;
    findOneAutoStepById(id: string): Promise<any>;
    findSignalBindingList(pid: string): Promise<any[]>;
    copyAllAutoStepByProjectId(info: CopyProjectInfo): Promise<{
        front: string;
        now: string;
    }[]>;
}
export declare let autoApi: AutoApi;
export {};
