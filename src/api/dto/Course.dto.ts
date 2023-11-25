import {BaseResponseDto} from "./BaseResponse.dto";
import {ICourse} from "../../models/Course.model";
import {ILessonPreview} from "../../models/Lesson.model";

export interface CoursesResponseDto extends BaseResponseDto {
    courses: ICourse[]
}

export interface CreateCourseRequestDto {
    name: string;
    description: string;
}

export interface DeleteCourseRequestSto {
    id: number;
}

export interface GetCourseRequestDto {
    id: number;
}

export interface GetCourseResponseDto {
    lessons: ILessonPreview[]
}