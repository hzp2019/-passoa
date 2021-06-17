export declare let jpeg: number;
export declare let webp: number;
export declare let png: number;
export declare function imageMatch(img: string, tmp: string, code?: number): {
    valid: number;
    x: number;
    y: number;
    val: number;
};
export declare function imageSave(tmp: string, sim: string, cvfmt: number): number;
export declare function imageCut(tmp: string, sim: string, cvfmt: number, x: number, y: number, w: number, h: number): number;
export declare function imageSize(img: string): any;
export declare function imageCompareByHist(img: string, tmp: string): any;
export declare function stdev(): void;
export declare function absdiff(): void;
export declare function horizontal(): void;
export declare function resave(): void;
export declare function cutcap(): void;
export declare enum CV_PROP {
    CAP_PROP_POS_MSEC = 0,
    CAP_PROP_POS_FRAMES = 1,
    CAP_PROP_POS_AVI_RATIO = 2,
    CAP_PROP_FRAME_WIDTH = 3,
    CAP_PROP_FRAME_HEIGHT = 4,
    CAP_PROP_FPS = 5,
    CAP_PROP_FOURCC = 6,
    CAP_PROP_FRAME_COUNT = 7,
    CAP_PROP_FORMAT = 8,
    CAP_PROP_MODE = 9,
    CAP_PROP_BRIGHTNESS = 10,
    CAP_PROP_CONTRAST = 11,
    CAP_PROP_SATURATION = 12,
    CAP_PROP_HUE = 13,
    CAP_PROP_GAIN = 14,
    CAP_PROP_EXPOSURE = 15,
    CAP_PROP_CONVERT_RGB = 16,
    CAP_PROP_WHITE_BALANCE_BLUE_U = 17,
    CAP_PROP_RECTIFICATION = 18,
    CAP_PROP_MONOCHROME = 19,
    CAP_PROP_SHARPNESS = 20,
    CAP_PROP_AUTO_EXPOSURE = 21,
    CAP_PROP_GAMMA = 22,
    CAP_PROP_TEMPERATURE = 23,
    CAP_PROP_TRIGGER = 24,
    CAP_PROP_TRIGGER_DELAY = 25,
    CAP_PROP_WHITE_BALANCE_RED_V = 26,
    CAP_PROP_ZOOM = 27,
    CAP_PROP_FOCUS = 28,
    CAP_PROP_GUID = 29,
    CAP_PROP_ISO_SPEED = 30,
    CAP_PROP_BACKLIGHT = 32,
    CAP_PROP_PAN = 33,
    CAP_PROP_TILT = 34,
    CAP_PROP_ROLL = 35,
    CAP_PROP_IRIS = 36,
    CAP_PROP_SETTINGS = 37,
    CAP_PROP_BUFFERSIZE = 38,
    CAP_PROP_AUTOFOCUS = 39,
    CAP_PROP_SAR_NUM = 40,
    CAP_PROP_SAR_DEN = 41,
    CAP_PROP_BACKEND = 42,
    CAP_PROP_CHANNEL = 43,
    CAP_PROP_AUTO_WB = 44,
    CAP_PROP_WB_TEMPERATURE = 45
}
