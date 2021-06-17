import { Case } from '../entity/case.entity';
import { CaseCreateInfo, CaseUpdateInfo, CaseDeleteInfo, CaseResultCreateInfo, ModuleDeleteInfo, CaseModuleUpdateInfo, CopyProjectInfo, CaseCopyInfo } from '../model/info_model';
import { CaseFindByModuleDto, CaseModuleFindDto } from '../model/query_model';
import { CaseHistory } from '../entity/case_history.entity';
declare class CaseApi {
    createCase(caseInfo: CaseCreateInfo): Promise<string>;
    copyCase(copyInfo: CaseCopyInfo): Promise<any>;
    private copySteps;
    private disposedSteps;
    private newAutoStep;
    findCaseIdByProject(pid: string, case_id: string): Promise<Case | undefined>;
    findCaseByModule(dto: CaseFindByModuleDto): Promise<number | CaseHistory[]>;
    findAllAutoCases(dto: CaseFindByModuleDto): Promise<any[]>;
    updateModule(caseModuleUpdateInfo: CaseModuleUpdateInfo): Promise<string>;
    updateCase(caseUpdateInfo: CaseUpdateInfo): Promise<string>;
    deleteCase(caseDeleteInfo: CaseDeleteInfo): Promise<string>;
    deleteCaseModule(info: ModuleDeleteInfo): Promise<string>;
    AddCaseResult(info: CaseResultCreateInfo): Promise<string>;
    findCaseModule(dto: CaseModuleFindDto): Promise<any[]>;
    copyCaseByProjectId(info: CopyProjectInfo): Promise<string>;
}
export declare let caseApi: CaseApi;
export {};
