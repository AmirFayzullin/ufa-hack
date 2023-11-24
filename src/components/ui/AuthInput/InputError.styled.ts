import {styled} from "styled-components";

export const InputError = styled.p`
    color: ${({theme}) => theme.colors.error.l2};
    font-size: 14px;
    line-height: 15px;
    min-height: 30px; 
`;