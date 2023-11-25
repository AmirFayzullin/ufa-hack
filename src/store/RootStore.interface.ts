import {ITooltipServiceStore} from "./TooltipServiceStore/TooltipServiceStore.interface";
import {IApi} from "../api/Api.interface";
import {IAuthStore} from "./AuthStore/AuthStore.interface";
import {ICoursesStore} from "./CoursesStore/CoursesStore.interface";

export interface IRootStore {
    tooltipServiceStore: ITooltipServiceStore;
    authStore: IAuthStore;
    coursesStore: ICoursesStore;
    api: IApi;
}