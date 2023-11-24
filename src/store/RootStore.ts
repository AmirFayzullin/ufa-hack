import {makeAutoObservable} from "mobx";
import {IApi} from "../api/Api.interface";
import {AxiosError} from "axios";
import {IRootStore} from "./RootStore.interface";

export class RootStore implements IRootStore {
    time: number = 0;
    something: string = '';
    response: any;

    constructor(
        protected api: IApi
    ) {
        makeAutoObservable(this);
    }

    increase() {
        this.time += 1;
    }

    decrease() {
        this.time -= 1;
    }

    setSomething(smth: string) {
        this.something = smth
    }

    request() {
        this.api.request()
            .then((data: any) => this.response = data)
            .catch((err: AxiosError) => console.log(err))
    }
}