import {styled} from "styled-components";

export const Wrapper = styled.div<{isOpen: boolean}>`
    width: 100vw;
    height: 100vh;
    
    background: rgba(0, 0, 0, .5);
    
    position: fixed;
    top: 0;
    left: 0;
    
    visibility: ${({isOpen}) => isOpen ? 'visible' : 'hidden'};
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

