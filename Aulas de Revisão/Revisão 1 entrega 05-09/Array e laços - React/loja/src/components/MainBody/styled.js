import styled from "styled-components"

export const MainBodyContainer = styled.div`
    height: 90vh;
    width: 100%;
    background-color: rgb(168, 186, 197);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CentralMainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center; 
    width: 60vw;
    height: 50vh;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }

`

export const ContainerProduto = styled.div`
    width: 15vw;
    height: 10vh;
    background-color: rgb(246, 175, 86);
    border-radius: 1rem;
    box-shadow: 1px 1px 21px #353839;
    display: flex;
    font-size: 1.5rem;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    cursor: pointer;


    @media screen and (max-width: 768px){
        width: 50vw !important;
        font-size: 1.2rem;
    }

    @media screen and (max-width: 1200px){
        width: 20vw;
    }

`
