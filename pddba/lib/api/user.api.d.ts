import { User } from '../entity/user.entity';
import { UserCreateInfo } from '../model/info_model';
import { UserFindInfo } from '../model/query_model';
declare class UserApi {
    create(info: UserCreateInfo): Promise<User>;
    findOne(info: UserFindInfo): Promise<User | undefined>;
    findEmailNameList(): Promise<User[]>;
}
export declare let userApi: UserApi;
export {};
