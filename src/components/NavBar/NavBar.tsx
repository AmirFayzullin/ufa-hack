import * as React from "react";
import {NavBarWrapper} from "../ui/NavBar/NavBarWrapper.styled";
import {NavBarItem} from "../ui/NavBar/NavBarItem.styled";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const navBarConfig = [
    {
        label: "Dashboard",
        link: '/dashboard'
    },
    {
        label: "Courses",
        link: '/courses'
    },
    {
        label: "Profile",
        link: '/profile'
    }
];

export const NavBar = () => {
    const location = useLocation();

    return (
        <NavBarWrapper>
            {
                navBarConfig.map(item =>
                    <Link to={item.link}>
                        <NavBarItem isActive={location.pathname.includes(item.link)}>
                            {item.label}
                        </NavBarItem>
                    </Link>
                )
            }
        </NavBarWrapper>
    )
};