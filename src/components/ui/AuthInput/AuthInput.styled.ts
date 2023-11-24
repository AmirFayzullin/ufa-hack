import {styled} from "styled-components";

export const AuthInput = styled.input`
    border: none;
    
    background: ${({theme}) => theme.colors.background.l2};
    padding: 10px;
    
    border-radius: ${({theme}) => theme.border.radius};
    border: solid 2px transparent;
    outline: none;
    
    font-size: 20px;
    
    transition: .2s;
    
    box-shadow: ${({theme}) => theme.shadow.l2};
    
    &:focus {
        border-color: ${({theme}) => theme.colors.accent.l2};
    }
    
    &::placeholder {
        color: lightgrey;
    }
`;