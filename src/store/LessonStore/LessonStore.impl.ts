import {ILessonStore} from "./LessonStore.interface";
import {IRootStore} from "../RootStore.interface";
import {makeAutoObservable} from "mobx";
import {ILesson, ILessonPreview} from "../../models/Lesson.model";
import {
    CreateLessonRequestDto, DeleteLessonRequestDto,
    GetLessonRequestDto,
    GetLessonResponseDto,
    SaveLessonRequestDto
} from "../../api/dto/Lesson.dto";

export class LessonStore implements ILessonStore {
    lessons: {[id: number]: ILesson} = {};

    constructor(
        private rootStore: IRootStore
    ) {
        makeAutoObservable(this)
    }

    getLesson(dto: GetLessonRequestDto): void {
        this.rootStore.api.getLesson(dto)
            .then((data: GetLessonResponseDto) => {
                this.lessons[dto.id] = data.lesson;
            })
            .catch(err => console.log(err));
    }

    createLesson(dto: CreateLessonRequestDto): void {
        this.rootStore.api.createLesson(dto)
            .then(() => {
                this.rootStore.coursesStore.getCourseLessons({
                    id: dto.course_id
                })
            })
    }

    saveLesson(dto: SaveLessonRequestDto): void {
        this.rootStore.api.saveLesson(dto)
            .catch(err => console.log(err));
    }
}