import {styled} from "styled-components";

export const Textarea = styled.textarea`
    background: ${({theme}) => theme.colors.background.l1};
    
    padding: 10px;
    border-radius: ${({theme}) => theme.border.radius};
    
    width: 100%;
    
    outline: none;
    border: solid 2px transparent;
    
    &:focus {
        background: transparent;
        border-color: ${({theme}) => theme.colors.accent.l2};
    }
`;