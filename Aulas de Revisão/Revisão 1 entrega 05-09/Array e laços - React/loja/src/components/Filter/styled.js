import styled from "styled-components"

export const FilterContainer = styled.div`
    background-color: rgb(168, 186, 197);
    height: 20vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1.5rem;

    input {
        margin: 0rem 3rem 0rem 1rem;
        width: 20vw;
        height: 4vh;
    }

    button {
        width: 8rem;
        height: 4vh;
        cursor: pointer;
    }

    @media screen and (max-width: 480px){
        flex-direction: column;
        justify-content: center;
        flex-wrap: wrap;
        align-items: flex-start;
        padding: 1rem;

        input {
            width: 90vw;
            height: 4vh;
        }

        button {
            width: 90vw;
        }
        
    }

    @media screen and (max-width: 768px){
        flex-direction: column;
        padding: 1rem;


        button {
            width: 50vw;
            font-size: 1rem;
        }
    }
`

export const ContainerBuscar = styled.div`
    width:30vw;
    height:10vh;
    display: flex;
    align-items: center;    
`

