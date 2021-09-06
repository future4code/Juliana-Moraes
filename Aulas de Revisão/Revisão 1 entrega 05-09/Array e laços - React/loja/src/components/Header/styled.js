import styled from "styled-components"


export const HeaderContainer = styled.div`
    height: 10vh;
    width: 100%;
    background-color: rgb(69, 82, 91);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;

    p{
        color: #ffffff;
        font-size: 3rem;
        cursor: pointer;
    }

    button {
        background-color: rgb(246, 175, 86);
        height: 4vh;
        width: 6vw;
        border: none;
        font-size: 1rem;

    }

    @media screen and (max-width: 768px){
        p {
            font-size: 2rem !important;
        }   
        
        button {
            width: 20vw !important;
            font-size: 0.9rem !important;
            margin-top: 0.5rem;
        }
    }

    @media screen and (max-width: 1200px){
        p {
            font-size: 3rem;
        }   
        
        button {
            width: 12vw;
        }
    }
    
`
