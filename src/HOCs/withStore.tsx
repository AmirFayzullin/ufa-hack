import * as React from "react";
import {inject} from "mobx-react";
import {Omit} from "yargs";


export const withStore =
    <T extends unknown>(Component: React.FC<T>): React.FC<Omit<T, "store">> =>
        inject('store')((props: any) => <Component {...props}/>);
