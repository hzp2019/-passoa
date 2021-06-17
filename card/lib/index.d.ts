/// <reference types="node" />
import { Duplex } from 'stream';
interface CardDA {
    chanel: number;
    value: number;
}
interface CardAD {
    model: number;
    chanel: number;
    gain: number;
    num?: number;
    rate?: number;
}
export declare class Card extends Duplex {
    private inst;
    openCard(): void;
    closeCard(): void;
    setCardDASingalOut(info: CardDA): any;
    getCardADSingalOut(info: CardAD): any;
    getCardADContinu(info: CardAD): any;
    isOpened(): boolean;
}
export {};
