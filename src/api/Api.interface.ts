import {RegisterRequestDto, RegisterResponseDto} from "./dto/Register.dto";
import {LoginRequestDto, LoginResponseDto} from "./dto/Login.dto";
import {AxiosError} from "axios";

export interface IApi {
    register(dto: RegisterRequestDto): Promise<RegisterResponseDto>
    login(dto: LoginRequestDto): Promise<LoginResponseDto>
}