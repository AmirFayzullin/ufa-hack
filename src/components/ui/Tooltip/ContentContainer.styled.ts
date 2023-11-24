import {styled} from "styled-components";

export const ContentWrapper = styled.div`
    padding: 20px;
    
    border-radius: ${({theme}) => theme.border.radius};
    
    background: ${({theme}) => theme.colors.background.l2};
    
    min-width: 30%;
    
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
   
`;