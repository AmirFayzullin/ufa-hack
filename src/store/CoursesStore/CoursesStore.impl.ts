import {ICoursesStore} from "./CoursesStore.interface";
import {ICourse} from "../../models/Course.model";
import {IRootStore} from "../RootStore.interface";
import {makeAutoObservable} from "mobx";
import {CoursesResponseDto, GetCourseResponseDto} from "../../api/dto/Course.dto";
import {ITag} from "../../models/Tag.model";
import {GetTagsResponseDto} from "../../api/dto/Tags.dto";
import {ILessonPreview} from "../../models/Lesson.model";
import {GetLessonRequestDto} from "../../api/dto/Lesson.dto";

export class CoursesStore implements ICoursesStore {
    courses: ICourse[] = [];
    isLoading: boolean = false;
    tags: ITag[] = [];
    lessonsPreviews: {[courseId: number]: ILessonPreview[]} = {};

    constructor(
        private rootStore: IRootStore
    ) {
        makeAutoObservable(this)
    }

    getCourses(): void {
        this.isLoading = true;

        this.rootStore.api.getCourses()
            .then((data: CoursesResponseDto) => {
                this.courses = data.courses;
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                this.isLoading = false;
            })
    }

    getTags() {
        this.rootStore.api.getTags()
            .then((data: GetTagsResponseDto) => {
                this.tags = data.tags;
            })
            .catch(err => console.log(err));
    }

    getCourseLessons(dto: GetLessonRequestDto): void {
        this.rootStore.api.getCourse(dto)
            .then((data: GetCourseResponseDto) => {
                this.lessonsPreviews[dto.id] = data.lessons;
            })
            .catch(err => console.log(err));
    }
}