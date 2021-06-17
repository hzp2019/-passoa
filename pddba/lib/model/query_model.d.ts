export declare class CaseFindByModuleDto {
    case_module: string;
    pid: string;
    vid: string;
    order: any;
    case_status?: number;
    take?: number;
    skip?: number;
    isCount?: boolean;
}
export declare class AutoStepFindByParentIdDto {
    pid: string;
    parent_id: string;
}
export declare class AutoStepFuzzyMatchDto {
    pid: string;
    parent_id: string;
    name: string;
}
export declare class FindAutoResultDto {
    order: any;
    case_module?: string;
    skip?: number;
    take?: number;
    isCount?: boolean;
}
export declare class CaseModuleFindDto {
    pid: string;
    vid: string;
}
export declare class UserFindInfo {
    username: string;
    password: string;
}
export declare class FindBriefResultDto {
    queueName: string;
    type: string;
}
export declare class ResultFindByModuleDto {
    queueName: string;
    type: string;
    case_module: string;
    order: any;
    take?: number;
    skip?: number;
    isCount?: boolean;
}
