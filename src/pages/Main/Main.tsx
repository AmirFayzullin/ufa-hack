import * as React from "react";
import {MainWrapper} from "../../components/ui/Main/Main.styled";
import {NavBar} from "../../components/NavBar/NavBar";
import {MainContent} from "../../components/ui/MainContent/MainContent.styled";
import {Route, Routes} from "react-router-dom";
import {Dashboard} from "../Dashboard/Dashboard";
import {Courses} from "../Courses/Courses";
import {Profile} from "../Profile/Profile";

export const Main = () => {
    return (
        <MainWrapper>
            <NavBar/>
            <MainContent>
                <Routes>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                    <Route path='/courses' element={<Courses/>}/>
                    <Route path='/profile' element={<Profile/>}/>
                </Routes>
            </MainContent>
        </MainWrapper>
    )
}