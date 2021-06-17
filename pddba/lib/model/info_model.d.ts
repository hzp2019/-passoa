export declare class ProjectInfo {
    name: string;
    uid: string;
}
export declare class VersionInfo {
    name: string;
    pid: string;
    uid: string;
}
export declare class CaseCreateInfo {
    pid: string;
    vid: string;
    uid: string;
    dam_num: string;
    dam_name: string;
    case_id: string;
    case_name: string;
    case_level: number;
    case_module: string;
    case_pre: string;
    case_op: string;
    case_exp: string;
    case_note: string;
    case_type: number;
    case_status: number;
    stepList: Array<any>;
    runTime: number;
}
export declare class CaseUpdateInfo {
    id: string;
    cid: string;
    pid: string;
    vid: string;
    uid: string;
    dam_num: string;
    dam_name: string;
    case_id: string;
    case_name: string;
    case_level: number;
    case_module: string;
    case_pre: string;
    case_op: string;
    case_exp: string;
    case_note: string;
    case_type: number;
    case_status: number;
    stepList: Array<any>;
    runTime: number;
}
export declare class CaseDeleteInfo {
    chid: string;
    vid: string;
    uid: string;
}
export declare class CaseResultCreateInfo {
    chid: string;
    uid: string;
    result: number;
    data: any;
}
export declare class AutoHistoryUpdateInfo {
    pid: string;
    cid: string;
    chid: string;
    case_type: number;
    runTime: number;
    uid: string;
    stepList: any;
}
export declare class AutoStepCreateInfo {
    pid: string;
    uid: string;
    parent_id: string;
    name: string;
    content?: any;
}
export declare class RenameStepCreateInfo {
    pid: string;
    uid: string;
    parent_id: string;
    name: string;
    fixed_id: string;
}
export declare class AutoStepNameUpdateInfo {
    id: string;
    uid: string;
    parent_id: string;
    name: string;
    content: any;
}
export declare class AutoStepContentUpdateInfo {
    id: string;
    content: any;
}
export declare class AutoResultCreateInfo {
    chid: string;
    uid: string;
    case_module: string;
    start_time: Date;
    end_time: Date;
    result: number;
    fail_info?: any;
    case_info: any;
    step_info: any;
}
export declare class UserCreateInfo {
    username: string;
    password: string;
    name: string;
    email: string;
}
export declare class ModuleDeleteInfo {
    pid: string;
    vid: string;
    case_module: string;
}
export declare class ImageCreateInfo {
    sid: string;
    uid: string;
}
export declare class ImageRemoteInfo {
    sid: string;
    uid: string;
    update_date: Date;
}
export declare class LocalResultCreateInfo {
    pid: string;
    vid: string;
    chid: string;
    type: string;
    queueName: string;
    case_module: string;
    result: number;
    detail_result: any;
    case_info: any;
    steps_info: any;
}
export declare class DBCInfo {
    pid: string;
    uid: string;
    filename: string;
}
export declare class RemoveAutoStepInfo {
    id: string;
    pid: string;
    actId: string;
    parent_id: string;
}
export declare class CaseModuleUpdateInfo {
    pid: string;
    uid: string;
    newModuleName: string;
    oldModuleName: string;
}
export declare class EmailNotifyCreateInfo {
    id: string;
    pid: string;
    uid: string;
    name: string;
    email: string;
    setting: Array<any>;
    status: boolean;
}
export declare class AfterNgCreateInfo {
    id: string;
    pid: string;
    uid: string;
    sid: string;
}
export declare class StartCacheResultInfo {
    id: string;
    pid: string;
    vid: string;
    uid: string;
    chid: string;
    type: string;
    queueName: string;
    test_info: any;
}
export declare class CopyProjectInfo {
    copy_pid: string;
    new_pid: string;
    uid: string;
    vid: string;
}
export declare class CaseCopyInfo {
    copy_pid: string;
    pid: string;
    vid: string;
    uid: string;
    dam_num: string;
    dam_name: string;
    case_id: string;
    case_name: string;
    case_level: number;
    case_module: string;
    case_pre: string;
    case_op: string;
    case_exp: string;
    case_note: string;
    case_type: number;
    case_status: number;
    stepList: Array<any>;
    runTime: number;
    copy_info: any;
}
