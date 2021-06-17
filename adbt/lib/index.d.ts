declare class ADBT {
    constructor();
    private executeCmd;
    installApp(cmd?: string): number;
    setupWifi(cmd?: string): number;
    connect(ip: string, cmd?: string): number;
    dial(ip: string, tel: string, cmd?: string): number;
    hangup(ip: string, cmd?: string): number;
    answer(ip: string, cmd?: string): number;
    openBt(ip: string, cmd?: string): number;
    closeBt(ip: string, cmd?: string): number;
    playFile(ip: string, file?: string, type?: string, cmd?: string): number;
    play(ip: string, cmd?: string): number;
    pause(ip: string, cmd?: string): number;
    keyevent(ip: string, key: number): number;
}
export declare let adbt: ADBT;
export {};
