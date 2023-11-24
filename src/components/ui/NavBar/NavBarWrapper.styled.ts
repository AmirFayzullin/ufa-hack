import {styled} from "styled-components";

export const NavBarWrapper = styled.div`
    background: ${({theme}) => theme.colors.background.l2};
    border-radius: ${({theme}) => theme.border.radius};
    box-shadow: ${({theme}) => theme.shadow.l1};
    
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    height: min-content;
    
    position: sticky;
    top: 20px;
    
    padding: 10px;
`;