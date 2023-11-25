import {styled} from "styled-components";

export const Wrapper = styled.div`
    border-radius: ${({theme}) => theme.border.radius};
    padding: 10px 20px;
    
    background: ${({theme}) => theme.colors.background.l1};
`;