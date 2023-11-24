import {styled} from "styled-components";

export const Section = styled.div`
    padding: 20px;
    
    background: ${({theme}) => theme.colors.background.l2};
    border-radius: ${({theme}) => theme.border.radius};
    box-shadow: ${({theme}) => theme.shadow.l1};
`;