export interface IOpenParam {
    content: string;
    icon: string;
}

export interface ITooltipServiceStore {
    content: string;
    icon: string;
    isOpen: boolean;

    open(params: IOpenParam): void;

    close(): void;
}