import { Image } from '../entity/image.entity';
import { ImageRemote } from '../entity/image_remote.entity';
import { ImageCreateInfo, ImageRemoteInfo } from '../model/info_model';
declare class ImageApi {
    create(info: ImageCreateInfo): Promise<Image | undefined>;
    saveRemote(info: ImageRemoteInfo): Promise<ImageRemote | undefined>;
    findImageUpdateTime(sid: string): Promise<Image | undefined>;
    findRemoteImageUpdateTime(sid: string): Promise<ImageRemote | undefined>;
}
export declare let imageApi: ImageApi;
export {};
