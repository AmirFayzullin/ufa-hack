import {styled} from "styled-components";

export const AppWrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    
    background: ${({theme}) => theme.colors.background.l1}
`;