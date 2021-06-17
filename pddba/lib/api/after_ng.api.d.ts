import { AfterNg } from '../entity/after_ng.entity';
import { AfterNgCreateInfo } from '../model/info_model';
declare class AfterNgApi {
    setStep(info: AfterNgCreateInfo): Promise<any>;
    findStep(pid: string): Promise<AfterNg[]>;
    deleteStep(id: string): Promise<string>;
}
export declare let afterNgApi: AfterNgApi;
export {};
