import styled from 'styled-components'

export const FundoCard = styled.div`
    background-color: white;
    height: 72vh;
    width: 25vw;
    display: flex;
    justify-content: center; 
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 1vh;
    border: 1px solid black;

    @media screen and (max-width: 980px){
        height: 72vh;
        width: 38vw;
    }
`

export const Cabecalho = styled.div`
    background-color: white;
    height: 7vh;
    width: 25vw;
    border-top-left-radius: 1vh;
    border-top-right-radius: 1vh;
    border-bottom: 2px solid lightgray;
    color: rgb(117, 49, 146);
    display: flex;
    justify-content: space-around;
    
    
    p{
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        font-size: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 7vh;
        width: 17vw;
        margin: 0;
        margin-left: 3rem;
    }

    span {
        color: rgb(81, 168, 157);
    }

    img {
        height: 3vh;
    }
    img:hover {
        height: 3.5vh;
    }

    button {
        border: none;
        height: 7vh;
        width: 3vw;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;  
    }
    button:active {
         opacity: 0.3;
    }

    @media screen and (max-width: 980px){

        height: 7vh;
        width: 38vw;
        p {
            font-size: 1.8rem;
            height: 7vh;
            width: 38vw;
        }

        button {
            width: 10vw;
        }
        
    }

    @media screen and (max-width: 600px){
        height: 7vh;
        width: 38vw;
        p {
            font-size: 1rem;
            height: 7vh;
            width: 38vw;
            display: flex;
            flex-direction: column;

        }

        img {
            height: 2.3vh;
        }
        img:hover {
            height: 2.5vh;
        }
}
`

export const Rodape = styled.div`
    background-color: white;
    height: 10vh;
    width: 25vw;
    border-bottom-left-radius: 1vh;
    border-bottom-right-radius: 1vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    button {
        border: none;
        background-color: transparent;
    }
    

    img {
        height: 6vh;
        background-image: url('../img/heart.png');
    }

    img:hover {
        height: 8vh;
    }
    img:active {
        opacity: 0.3;
    }

`

export const CardFotos = styled.div`
    height: 50vh;
    width: 18vw;  
    box-shadow: 0 0 1rem lightslategray;
    
    img {     
        height: 37vh;
        width: 18vw;
    }

    p {
        margin: 0.5rem;
    }

    @media screen and (max-width: 980px){
        width: 31vw;
        font-size: 0.8rem;
        img {     
        width: 31vw;
    }

    @media screen and (max-width: 768px){
        p{
            margin-left: 1.4rem;
            margin-top: 0.5rem;
            width: 27vw;
        }
	
	
    }
	
}
`

