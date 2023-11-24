import {BaseResponseDto} from "./BaseResponse.dto";
import {IUser} from "../../models/User.model";

export interface LoginRequestDto {
    email: string;
    password: string;
}

export interface LoginResponseDto extends BaseResponseDto {
    body: {
        user: IUser,
        authorization: {
            token: string;
            type: string;
        }
    }
}