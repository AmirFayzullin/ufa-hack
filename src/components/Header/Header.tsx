import {withStore} from "../../HOCs/withStore";
import {observer} from "mobx-react";
import {IRootStore} from "../../store/RootStore.interface";
import * as React from "react";
import {HeaderWrapper} from "../ui/HeaderWrapper/HeaderWrapper.styled";
import {SubmitButton} from "../ui/SubmitButton/SubmitButton.styled";
import {Routes, Route, Link} from "react-router-dom";

type Props = {
    store: IRootStore
}

export const Header = withStore(observer(({store}: Props) => {

    const handleLogout = () => {
        store.authStore.signOut();
    };

    return (
        <HeaderWrapper>
            <p>Logo</p>
            <Routes>
                <Route path='/sign-in'
                       element={
                           <SubmitButton>
                               <Link to='/sign-up'>Register</Link>
                           </SubmitButton>
                       }
                />
                <Route path='/sign-up'
                       element={
                           <SubmitButton>
                                <Link to='/sign-in'>Login</Link>
                           </SubmitButton>
                       }
                />
                <Route path='/*'
                       element={
                           <SubmitButton onClick={handleLogout}>
                              Logout
                           </SubmitButton>

                       }
                />
            </Routes>
        </HeaderWrapper>
    )
}));