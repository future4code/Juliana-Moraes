import styled from "styled-components";

export const ContainerTitulo = styled.div`
background-color:  rgb(168, 186, 197);
    height: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        font-weight: bold;
        font-size: 1.5rem;
        color: rgb(69, 82, 91);
    }
`
export const ContainerPrivate = styled.div`
    background-color:  rgb(168, 186, 197);
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    select {
        width: 20vw;
        height: 3vh;
        margin-bottom: 1rem;
        border: none;
        border-radius: 5px;
        outline: none;
        color: gray;
        font-weight: bold;
    
    }

    input {
        width: 20vw;
        height: 3vh;
        border: none;
        border-radius: 5px;
        margin-bottom: 1rem;
        outline: none;
        padding: 1rem;
        color: gray;    
        ::placeholder {
            color: lightgray;
        }    
    }

    button {
        background-color: rgb(246, 175, 86);
        height: 3vh;
        width: 20vw;
        border: none;
        margin-bottom: 1rem;
        border-radius: 5px;
        color: rgb(69, 82, 91);
        font-weight: bold;

    }
`

