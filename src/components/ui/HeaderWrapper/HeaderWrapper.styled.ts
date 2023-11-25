import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    width: 100vw;
    padding: 20px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    box-shadow: ${({theme}) => theme.shadow.l1};
    background: ${({theme}) => theme.colors.background.l2};
    
    > p {
        font-size: 24px;
    }
`;