import axios, {AxiosError, AxiosInstance, AxiosResponse} from 'axios'
import {IApi} from "./Api.interface";
import {RegisterRequestDto, RegisterResponseDto} from "./dto/Register.dto";
import {LoginRequestDto, LoginResponseDto} from "./dto/Login.dto";
import {BaseResponseDto} from "./dto/BaseResponse.dto";



export class Api implements IApi {
    private instance: AxiosInstance;
    constructor(
        baseURL: string
    ) {
        this.instance = axios.create({ baseURL });
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
}