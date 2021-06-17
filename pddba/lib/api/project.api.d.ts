import { Project } from '../entity/project.entity';
import { ProjectInfo } from '../model/info_model';
declare class ProjectApi {
    create(projectInfo: ProjectInfo): Promise<Project>;
    findAll(): Promise<Project[]>;
    findProjectEmailInfo(id: string): Promise<Project | undefined>;
    updateProjectEmailInfo(id: string, info: string): Promise<string>;
    delete(id: string): Promise<string>;
}
export declare let projectApi: ProjectApi;
export {};
