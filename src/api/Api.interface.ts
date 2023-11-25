import {RegisterRequestDto, RegisterResponseDto} from "./dto/Register.dto";
import {LoginRequestDto, LoginResponseDto} from "./dto/Login.dto";
import {AxiosError} from "axios";
import {
    CoursesResponseDto,
    CreateCourseRequestDto,
    DeleteCourseRequestSto,
    GetCourseRequestDto, GetCourseResponseDto
} from "./dto/Course.dto";
import {GetLessonRequestDto} from "./dto/Lesson.dto";
import {GetTagsResponseDto} from "./dto/Tags.dto";

export interface IApi {
    register(dto: RegisterRequestDto): Promise<RegisterResponseDto>
    login(dto: LoginRequestDto): Promise<LoginResponseDto>

    getCourses(): Promise<CoursesResponseDto>
    createCourse(dto: CreateCourseRequestDto): void
    deleteCourse(dto: DeleteCourseRequestSto): void

    getCourse(dto: GetCourseRequestDto): Promise<GetCourseResponseDto>
    getLesson(dto: GetLessonRequestDto): void

    getTags(): Promise<GetTagsResponseDto>
}