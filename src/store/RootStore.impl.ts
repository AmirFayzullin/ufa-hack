import {makeAutoObservable} from "mobx";
import {IApi} from "../api/Api.interface";
import {IRootStore} from "./RootStore.interface";
import {ITooltipServiceStore} from "./TooltipServiceStore/TooltipServiceStore.interface";
import {TooltipServiceStore} from "./TooltipServiceStore/TooltipServiceStore.impl";
import {IAuthStore} from "./AuthStore/AuthStore.interface";
import {AuthStore} from "./AuthStore/AuthStore.impl";
import {ICoursesStore} from "./CoursesStore/CoursesStore.interface";
import {CoursesStore} from "./CoursesStore/CoursesStore.impl";

export class RootStore implements IRootStore {
    tooltipServiceStore: ITooltipServiceStore;
    authStore: IAuthStore;
    coursesStore: ICoursesStore;

    constructor(
        public api: IApi
    ) {
        makeAutoObservable(this);

        this.tooltipServiceStore = new TooltipServiceStore();
        this.authStore = new AuthStore(this);
        this.coursesStore = new CoursesStore(this);
    }

}