import {IOpenParam, ITooltipServiceStore} from "./TooltipServiceStore.interface";
import {makeAutoObservable} from "mobx";

export class TooltipServiceStore implements ITooltipServiceStore {
    content: string = "";
    icon: string = "";
    isOpen: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    open(params: IOpenParam): void {
        this.content = params.content;
        this.icon = params.icon;
        this.isOpen = true;
    }

    close() {
        this.isOpen = false;
    }
}