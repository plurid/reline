export interface RelineMessage<B, D> {
    from: symbol;
    to: symbol;
    timestamp: number;
    method: keyof B;
    data: D;
}


export type RelineMethodMessage<B, D> = [keyof B, D];
