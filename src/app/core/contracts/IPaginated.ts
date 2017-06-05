export interface IPaginated{
    data: any;
    count: number;
    load(page?: number);
}