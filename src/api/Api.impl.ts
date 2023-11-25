import axios, {AxiosError, AxiosInstance, AxiosResponse} from 'axios'
import {IApi} from "./Api.interface";
import {RegisterRequestDto, RegisterResponseDto} from "./dto/Register.dto";
import {LoginRequestDto, LoginResponseDto} from "./dto/Login.dto";
import {BaseResponseDto} from "./dto/BaseResponse.dto";
import {
    CoursesResponseDto,
    CreateCourseRequestDto,
    DeleteCourseRequestSto,
    GetCourseRequestDto, GetCourseResponseDto
} from "./dto/Course.dto";
import {GetLessonRequestDto} from "./dto/Lesson.dto";
import {GetTagsResponseDto} from "./dto/Tags.dto";


export class Api implements IApi {
    private instance: AxiosInstance;

    constructor(
        baseURL: string
    ) {
        this.instance = axios.create({baseURL});
    }

    private checkResponse<T>(data: AxiosResponse<BaseResponseDto>): T {
        if (data.data.status !== 'success') {
            throw data.data
        }

        return data.data as T
    }

    register({email, login, password}: RegisterRequestDto): Promise<RegisterResponseDto> {
        return this.instance.post(`/register`, null, {
            params: {login, email, password}
        })
            .then((data) => this.checkResponse<RegisterResponseDto>(data))
    }

    login({password, email}: LoginRequestDto): Promise<LoginResponseDto> {
        return this.instance.post(`/login`, null, {
            params: {email, password}
        })
            .then((data) => this.checkResponse<LoginResponseDto>(data))
    }

    getCourses(): Promise<CoursesResponseDto> {
        return this.instance.get('/courses', {
            headers: {
                'Authorization': `Bearer ${localStorage.token}`
            }
        })
            .then((data) => this.checkResponse<CoursesResponseDto>(data))
    }

    // TODO: types
    createCourse({description, name}: CreateCourseRequestDto): Promise<any> {
        return this.instance.post('/create_course',null, {
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`
                },
                params: {description, name}
            })
            .then((data) => this.checkResponse<any>(data))
    }

    deleteCourse({id}: DeleteCourseRequestSto): Promise<any> {
        return this.instance.delete('/delete_course', {
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`
                },
                params: {id}
            })
            .then((data) => this.checkResponse<any>(data))
    }


    getCourse({id}: GetCourseRequestDto): Promise<GetCourseResponseDto> {
        return this.instance.get('/course', {
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`
                },
                params: {id}
            })
            .then((data) => this.checkResponse<GetCourseResponseDto>(data))
    }

    getLesson({id}: GetLessonRequestDto): Promise<any> {
        return this.instance.get('/lesson', {
                headers: {
                    'Authorization': `Bearer ${localStorage.token}`
                },
                params: {id}
            })
            .then((data) => this.checkResponse<any>(data))
    }

    getTags(): Promise<GetTagsResponseDto> {
        return this.instance.get('/tags', {
            headers: {
                'Authorization': `Bearer ${localStorage.token}`
            }
        })
            .then((data) => this.checkResponse<GetTagsResponseDto>(data))
    }
}