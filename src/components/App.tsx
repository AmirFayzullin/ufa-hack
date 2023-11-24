import React, {useEffect} from 'react';
import '../App.css';
import {IRootStore} from "../store/RootStore.interface";
import {Navigate, Route, Routes, useNavigate} from 'react-router-dom';
import {withStore} from "../HOCs/withStore";
import {observer} from "mobx-react";
import {GlobalStyle} from "../theme/global";
import {AppWrapper} from "./ui/App/App.styled";
import {SignUp} from "../pages/SignUp/SignUp";
import {SignIn} from "../pages/SignIn/SignIn";
import {Tooltip} from "./Tooltip/Tooltip";
import {ProtectedRoute} from "./ProtectedRoute/ProtectedRoute";
import {Header} from "./Header/Header";
import {Main} from "../pages/Main/Main";

type Props = {
    store: IRootStore
}


export default withStore(observer(function App({store}: Props) {

    const navigate = useNavigate();

    useEffect(() => {
        if (store.authStore.isLoggedIn) {
            navigate('/dashboard');
        } else {
            navigate('/sign-in');
        }
    }, [store.authStore.isLoggedIn]);

    return (
        <AppWrapper>
            <GlobalStyle />
            <Header />

            <Routes>
                <Route path='/sign-in' element={<SignIn />}/>
                <Route path='/sign-up' element={<SignUp/>}/>
                <Route path='/*' element={
                    <ProtectedRoute Component={Main}/>
                }
                />
            </Routes>
            <Tooltip />
        </AppWrapper>
    );
}))