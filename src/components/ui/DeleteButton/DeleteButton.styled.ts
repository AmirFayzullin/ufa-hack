import {styled} from "styled-components";
import close from '../../../assets/error.svg';

export const DeleteButton = styled.div`
    background-image: url(${close});
    background-repeat: no-repeat;
    background-size: contain;
    
    width: 40px;
    height: 40px;
`;