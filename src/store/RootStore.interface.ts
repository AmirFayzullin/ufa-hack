import {ITooltipServiceStore} from "./TooltipServiceStore/TooltipServiceStore.interface";
import {IApi} from "../api/Api.interface";
import {IAuthStore} from "./AuthStore/AuthStore.interface";

export interface IRootStore {
    tooltipServiceStore: ITooltipServiceStore;
    authStore: IAuthStore;
    api: IApi;
}