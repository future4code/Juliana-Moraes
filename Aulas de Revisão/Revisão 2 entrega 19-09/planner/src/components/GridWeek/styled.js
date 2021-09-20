import styled from "styled-components";

export const GridWeekContainer = styled.div`
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
   font-size: 1rem;
`

export const GridWeekLittle = styled.div`
    background-color: rgb(255, 209, 221);
    
    
    @media screen and (max-device-width: 999px) {
        height: auto;
        width: 90vw;
        display: flex;
        flex-direction: column;
    }

    @media screen and (min-device-width: 1000px) {
        height: 79vh;
        width: 95vw;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        border: 1px;
        font-size: 0.9rem;

        input{
            transform: scale(0.9);
        }
    }
`

export const Semana1 = styled.div`
    border: 1px dotted #ea899a;
    margin: 0.2rem;
    padding: 0 0.5rem;
    min-height: 10vh;    

    @media screen and (max-device-width: 999px) {
        height: auto;
    }
    @media screen and (min-device-width: 1000px) {
        grid-column: 1/2;        
    }
        
`

export const Tarefa = styled.div`
    cursor: pointer;
    color: #484d50;

`

export const Semana2 = styled.div`
    border: 1px dotted #ea899a;
    margin: 0.2rem;
    padding: 0 0.5rem;
    min-height: 10vh;

    @media screen and (max-device-width: 999px) {
        height: auto;
    }
    @media screen and (min-device-width: 1000px) {
        grid-column: 2/3;
    }
    
`
export const Semana3 = styled.div`
    border: 1px dotted #ea899a;
    margin: 0.2rem;
    padding: 0 0.5rem;
    min-height: 10vh;

    @media screen and (max-device-width: 999px) {
        height: auto;
    }
    @media screen and (min-device-width: 1000px) {
        grid-column: 3/4;
    }
`
export const Semana4 = styled.div`
    border: 1px dotted #ea899a;
    margin: 0.2rem;
    padding: 0 0.5rem;
    min-height: 10vh;

    @media screen and (max-device-width: 999px) {
        height: auto;
    }
    @media screen and (min-device-width: 1000px) {
        grid-column: 4/5;
    }
`
export const Semana5 = styled.div`
    border: 1px dotted #ea899a;
    margin: 0.2rem;
    padding: 0 0.5rem;
    min-height: 10vh;
    
    @media screen and (max-device-width: 999px) {
        height: auto;
    }
    @media screen and (min-device-width: 1000px) {
        grid-column: 5/6;
    }
`
export const Semana6 = styled.div`
    border: 1px dotted #ea899a;
    margin: 0.2rem;
    padding: 0 0.5rem;
    min-height: 10vh;

    @media screen and (max-device-width: 999px) {
        height: auto;
    }
    @media screen and (min-device-width: 1000px) {
        grid-column: 6/7;
    }
`
export const Semana7 = styled.div`
    border: 1px dotted #ea899a;
    margin: 0.2rem;
    padding: 0 0.5rem;
    min-height: 10vh;

    @media screen and (max-device-width: 999px) {
        height: auto;
    }

    @media screen and (min-device-width: 1000px) {
        grid-column: 7/8;
    }
`

export const Week = styled.div`
    color: #ea899a;
    text-align: center;
    font-weight: 600;
    margin: 0.5rem 0;
    border-bottom: 0.1rem solid #ea899a;
    background-color: white;
`