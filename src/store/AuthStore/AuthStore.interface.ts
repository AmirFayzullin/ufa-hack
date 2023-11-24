import {RegisterRequestDto, RegisterResponseDto} from "../../api/dto/Register.dto";
import {LoginRequestDto, LoginResponseDto} from "../../api/dto/Login.dto";
import {AxiosError} from "axios";
import {IUser} from "../../models/User.model";

export interface IAuthStore {
    registerLoading: boolean;
    loginLoading: boolean;

    isLoggedIn: boolean;
    user: IUser | null;

    register(dto: RegisterRequestDto): Promise<RegisterResponseDto | AxiosError>;
    login(dto: LoginRequestDto): Promise<LoginResponseDto | AxiosError>;
    signOut(): void
}