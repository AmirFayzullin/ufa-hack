import {styled} from "styled-components";

export const NavBarItem = styled.div<{isActive: boolean}>`
    font-size: 20px;
    color: ${(props) => props.isActive ? props.theme.colors.accent.l2 : props.theme.colors.text.l2};
    text-decoration: none;
    
    background: ${(props) => props.isActive ? props.theme.colors.accent.l1 : 'transparent'};
    padding: 10px;
    border-radius: ${(props) => props.theme.border.radius};
    
    transition: .2s;
`;