import axios, {AxiosInstance, AxiosResponse} from 'axios'
import {IApi} from "./Api.interface";



export class Api implements IApi {
    private instance: AxiosInstance;
    constructor(
        baseURL: string
    ) {
        this.instance = axios.create({ baseURL });
    }

    request() {
        return this.instance.get(`/repos/javascript-tutorial/en.javascript.info/commits`)
            .then((data: AxiosResponse) => data.data)
    }
}