import {styled} from "styled-components";

export const CourseWrapper = styled.div`
    padding: 10px;
    
    border-radius: ${({theme}) => theme.border.radius};
    
    cursor: pointer;
    
    &:hover {
        background: ${({theme}) => theme.colors.background.l1};
    }
    
    transition: .2s;
`;