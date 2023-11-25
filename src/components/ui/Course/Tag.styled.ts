import {styled} from "styled-components";

export const Tag = styled.p`
    padding: 10px;
    
    background: ${({theme}) => theme.colors.background.l1};
    border-radius: ${({theme}) => theme.border.radius};
`;