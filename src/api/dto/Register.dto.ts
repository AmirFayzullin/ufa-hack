import {BaseResponseDto} from "./BaseResponse.dto";
import {IUser} from "../../models/User.model";

export interface RegisterRequestDto {
    login: string;
    email: string;
    password: string;
}

export interface RegisterResponseDto extends BaseResponseDto {
    body: {
        message: string;
        user: IUser,
        authorization: {
            token: string;
            type: string;
        }
    }
}
