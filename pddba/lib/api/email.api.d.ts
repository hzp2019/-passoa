import { EmailNotify } from '../entity/email_notify.entity';
import { EmailNotifyCreateInfo } from '../model/info_model';
declare class EmailApi {
    createEmailNotify(info: EmailNotifyCreateInfo): Promise<EmailNotify>;
    findEmailNotifyNameList(): Promise<any[]>;
    findEmailNotifyList(pid: string, status?: boolean): Promise<EmailNotify | undefined>;
    updateEmailNotifyInfo(info: EmailNotifyCreateInfo): Promise<string>;
    updateEmailNotifyStatus(info: EmailNotifyCreateInfo): Promise<string>;
    deleteEmailNotify(id: string): Promise<string>;
}
export declare let emailApi: EmailApi;
export {};
