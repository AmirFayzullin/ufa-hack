import {ITooltipServiceStore} from "./TooltipServiceStore/TooltipServiceStore.interface";
import {IApi} from "../api/Api.interface";
import {IAuthStore} from "./AuthStore/AuthStore.interface";
import {ICoursesStore} from "./CoursesStore/CoursesStore.interface";
import {ILessonStore} from "./LessonStore/LessonStore.interface";

export interface IRootStore {
    tooltipServiceStore: ITooltipServiceStore;
    authStore: IAuthStore;
    coursesStore: ICoursesStore;
    lessonStore: ILessonStore
    api: IApi;
}