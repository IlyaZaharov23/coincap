export type ChartData = {
    name: string;
    price: string;
};

export type PayloadItem = {
    payload: ChartData;
    value: number;
};

export type TooltipEvent = {
    activePayload?: PayloadItem[];
    activeIndex: string;
};

export type PriceDifference = {
    price: string;
    color: string;
};
