import {ILesson} from "../../models/Lesson.model";
import {CreateLessonRequestDto, GetLessonRequestDto, SaveLessonRequestDto} from "../../api/dto/Lesson.dto";

export interface ILessonStore {
    lessons: {[id: number]: ILesson}

    getLesson(dto: GetLessonRequestDto): void;

    createLesson(dto: CreateLessonRequestDto): void;

    saveLesson(dto: SaveLessonRequestDto): void
}