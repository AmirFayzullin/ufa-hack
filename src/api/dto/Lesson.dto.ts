import {BaseResponseDto} from "./BaseResponse.dto";
import {ILesson} from "../../models/Lesson.model";

export interface GetLessonRequestDto {
    id: number;
}

export interface GetLessonResponseDto extends BaseResponseDto {
    lesson: ILesson
}

export interface CreateLessonRequestDto {
    course_id: number;
    name: string;
}

export interface SaveLessonRequestDto {
    lesson_id: number;
    content: string;
}

export interface DeleteLessonRequestDto {
    id: number;
}