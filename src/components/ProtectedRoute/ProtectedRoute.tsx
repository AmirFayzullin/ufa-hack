import {withStore} from "../../HOCs/withStore";
import {observer} from "mobx-react";
import {IRootStore} from "../../store/RootStore.interface";
import {Navigate} from 'react-router-dom';
import * as React from "react";

type Props = {
    Component: React.FC,
    store: IRootStore,
    [prop: string]: any
}

export const ProtectedRoute = withStore(observer(({Component, store, ...rest}: Props) => {
    const {authStore} = store;
    return authStore.isLoggedIn ? <Component {...rest} /> : <Navigate to="/sign-in"/>;
}));