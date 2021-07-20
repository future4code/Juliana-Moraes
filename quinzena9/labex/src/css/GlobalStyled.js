import styled from 'styled-components'
import ImgFundo from '../img/background-home.jpg'


export const Home = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${ImgFundo});

    button {
        width: 15vw;
        height: 6vh;
        background-color: pink;
        margin: 0 5rem;
        border-radius: 1vw;
        font-family: 'Courier New', Courier, monospace;
        color: white;
        font-size: 1.3rem;
        background-color: #5526b2;
        border: none;
        box-shadow: 0 0 1em gray;
    }
    button:hover {
        background-color: transparent;
        border: 0.2rem solid #fff;
        box-shadow: 0 0 .2rem #fff, 0 0 .2rem #fff, 0 0 2rem #bc13fe, 0 0 0.8rem #bc13fe, 0 0 2.8rem #bc13fe, inset 0 0 1.3rem #bc13fe;
        font-weight: bold;
    }
    button:active {
        opacity:0.5;
    }
`

export const ListTrip = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
   
`

export const Login = styled.form`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
    flex-direction: column;
    

    input {
        width: 15vw;
        height: 4vh;
        margin-bottom: 3em;
        border-radius: 0.8em;
        border: none;
        padding: 0em 1.2em; 
        outline: 0;  
    }


    button {
        width: 5vw;
        height: 3vh;
        border-radius: 2em;
        margin-right: 2em;
    }
    
`

export const inscricao = styled.div`
    width: 100vw;
    height: 100vh;

    input {
        border: 2px solid pink;
    }
`

