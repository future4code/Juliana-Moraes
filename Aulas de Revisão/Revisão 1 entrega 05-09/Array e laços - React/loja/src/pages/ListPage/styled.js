import styled from "styled-components";

export const ContainerList = styled.div`
    width: 100%;
    height: 70vh;
    background-color: rgb(168, 186, 197);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 3rem 1rem;

    @media screen and (max-width: 768px){
        height: 180vh;
    }
`

export const ContainerProdutos = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 50vw;
    height: 62vh;
    
    p {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    @media screen and (max-width: 768px){
        flex-wrap: nowrap;
        height: 10vh;
    }

    @media screen and (max-width: 1200px){
        p {
            font-size: 1.1rem;
        }
    }


`