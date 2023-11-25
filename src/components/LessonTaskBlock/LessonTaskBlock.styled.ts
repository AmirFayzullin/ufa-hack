import {styled} from "styled-components";

export const Wrapper = styled.div`
    border-radius: ${({theme}) => theme.border.radius};
    padding: 10px 20px;
    
    font-size: 22px;
    
    background: ${({theme}) => theme.colors.background.l1};
    
    display: flex;
    flex-direction: column;
    
    gap: 20px;
`;

export const Answer = styled.span<{isCorrect: boolean, selected: boolean}>`
    font-size: 20px;

    color: ${({theme, isCorrect, selected}) => {
        if (!selected) return theme.colors.text.l2;
        
        return isCorrect ? theme.colors.success.l1 : 'red';
    }};
    
`;

export const AnswerWrapper = styled.div`
    display: flex;
    padding: 10px;
    gap: 10px;
    
    cursor: pointer;
`;