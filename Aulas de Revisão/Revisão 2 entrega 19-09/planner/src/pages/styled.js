import styled from "styled-components";
import FundoImg from '../assets/fundoPlanner.jpg'

export const PlannerContainer = styled.div`
    background-image: url(${FundoImg});
    flex-grow: 1;
    min-height: 100vh;
    
    @media screen and (max-device-width: 999px) {
        height: auto;
    }

    @media screen and (min-device-width: 1000px) {
       height: 100vh;
       flex-grow: 1;
    }
`