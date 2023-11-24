import {IAuthStore} from "./AuthStore.interface";
import {RegisterRequestDto, RegisterResponseDto} from "../../api/dto/Register.dto";
import {IRootStore} from "../RootStore.interface";
import {LoginRequestDto, LoginResponseDto} from "../../api/dto/Login.dto";
import successIcon from '../../assets/done.svg';
import errorIcon from '../../assets/error.svg';
import {IUser} from "../../models/User.model";
import {makeAutoObservable} from "mobx";

export class AuthStore implements IAuthStore {
    registerLoading: boolean = false;
    loginLoading: boolean = false;

    isLoggedIn: boolean = true;
    user: IUser | null = null;

    constructor(
        private rootStore: IRootStore
    ) {
        makeAutoObservable(this);
    }

    register(dto: RegisterRequestDto): Promise<RegisterResponseDto> {
        this.registerLoading = true;
        return this.rootStore.api.register(dto)
            .then((data) => {
                this.user = data.body.user;
                this.isLoggedIn = true;

                this.rootStore.tooltipServiceStore.open({
                    content: data.body.message,
                    icon: successIcon
                });

                return data;
            })
            .catch((error) => {
                this.rootStore.tooltipServiceStore.open({
                    content: "Error",
                    icon: errorIcon
                });

                return error;
            })
            .finally(() => {
                this.registerLoading = false;
            });
    }

    login(dto: LoginRequestDto): Promise<LoginResponseDto> {
        this.loginLoading = true;
        return this.rootStore.api.login(dto)
            .then((data) => {
                this.user = data.body.user;
                this.isLoggedIn = true;

                localStorage.setItem('token', data.body.authorization.token);

                this.rootStore.tooltipServiceStore.open({
                    content: "Success",
                    icon: successIcon
                });

                return data;
            })
            .catch((error) => {
                this.rootStore.tooltipServiceStore.open({
                    content: "Error",
                    icon: errorIcon
                });

                return error;
            })
            .finally(() => {
                this.loginLoading = false;
            });
    }

    signOut(): void {
        this.isLoggedIn = false;
        this.user = null;
    }
}