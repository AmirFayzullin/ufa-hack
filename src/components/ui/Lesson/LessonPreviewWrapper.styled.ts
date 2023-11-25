import {styled} from "styled-components";

export const LessonPreviewWrapper = styled.div`
    padding: 10px;
    font-size: 18px;
    
    border-radius: ${({theme}) => theme.border.radius};
    
    cursor: pointer;
    
    &:hover {
        background: ${({theme}) => theme.colors.background.l1};
    }
    
    transition: .2s;
`;