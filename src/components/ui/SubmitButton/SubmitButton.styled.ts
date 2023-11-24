import {styled} from "styled-components";

export const SubmitButton = styled.button`
    background: ${({theme}) => theme.colors.accent.l1};
    
    color: ${({theme}) => theme.colors.accent.l2};
    
    font-size: 20px;
    border-radius: ${({theme}) => theme.border.radius};
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: 500;
    
    padding: 10px;
`;