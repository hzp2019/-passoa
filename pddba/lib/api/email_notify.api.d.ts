import { EmailNotify } from '../entity/email_notify.entity';
import { EmailNotifyCreateInfo } from '../model/info_model';
declare class EmailApi {
    createEmailNotify(info: EmailNotifyCreateInfo): Promise<string>;
    findEmailNotifyList(pid: string, status?: boolean): Promise<EmailNotify[]>;
    updateEmailNotifyInfo(info: EmailNotifyCreateInfo): Promise<string>;
    updateEmailNotifyStatus(info: EmailNotifyCreateInfo): Promise<string>;
    deleteEmailNotify(id: string): Promise<string>;
}
export declare let emailApi: EmailApi;
export {};
