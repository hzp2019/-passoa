declare enum PS {
    idle = 0,
    ns_ = 1,
    string = 2
}
export default class dbc {
    obj: any;
    state: PS;
    tmpObject: any;
    tmpLine: string;
    tmpStr: string;
    id: string;
    line_num: number;
    word: string[];
    constructor();
    parseVersion(word: string[]): void;
    parseNS_(word: string[]): void;
    parseBS_(word: string[]): void;
    parseBU_(word: string[]): void;
    parseBO_(word: string[]): void;
    parseSG_(word: string[]): void;
    parseCM_BO_(word: string[]): void;
    parseCM_SG_(word: string[]): void;
    parseCM_(word: string[]): void;
    parseBA_(word: string[]): void;
    parseBA_DEF_(word: string[]): void;
    parseBA_DEF_DEF_(word: string[]): void;
    parseVAL_(word: string[]): void;
    parseOther(word: string[]): void;
    split(line: string): boolean;
    dispatch(word: string[]): void;
    parseString(data: string): void;
    parse(path: string, cb: (obj: any) => void): void;
    parse(path: string, encoding: string, cb: (obj: any) => void): void;
}
export {};
