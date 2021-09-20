import styled from "styled-components";
import FundoHeader from '../../assets/HeaderImmg.png'

export const HeaderContainer = styled.div`
    background-image: url(${FundoHeader});
    height: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.5rem;

    form{
        background-color: rgb(167, 208, 221);
        margin: 0 0.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    button {
       background-color: transparent;
        border: none;
        height: 2.5vh;
        color: #616161;
        flex-grow: 1;
    }

    button:active {
        opacity: 0.2;
        background-color: rgb(255, 209, 221);
    }

    input, select {
        color: #616161;
        border: none;
        outline: none;
    }

    @media screen and (max-device-width: 420px) {
        input, select {
            margin-bottom: 0.5rem;
            height: 3vh;
        }

        button {
            height: 3vh;
        }
    }


    @media screen and (min-device-width: 421px) and (max-device-width: 999px){
        input, select {
            margin-bottom: 0.5rem;
            height: 2.2vh;
        }     
    }

    @media screen and (min-device-width: 1000px) {
        
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        font-size: 1.1rem;
        

        input, select {
            margin: 0 1rem;
            height: 3.5vh;
        }

        input {
            flex-grow: 2;
            padding: 0 1rem;
        }

        select, button {
            flex-grow: 1;
        }
    }
`

export const HeaderControl = styled.div`
    display: flex;

    form {
        flex-grow: 1;
    }

    @media screen and (min-device-width: 1000px) {
        width: 30vw;
        form{
            height: 4vh;
        }

        button {
            border: none;
            height: 2.5vh;
            color: #616161;
            flex-grow: 1;
        }

    }
`