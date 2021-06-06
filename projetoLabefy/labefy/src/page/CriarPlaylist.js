import React from 'react';
import styled from 'styled-components';

const CardCriarPlaylist = styled.div`
    border: 1px solid white;
    width: 50%;
    height: 50vh;
    margin: 0 auto;
    margin-top: 5%;
    text-align: center;
    color: #fff;
    font-size: 1.5rem;
    
    input{
        border: none;
        background-color: rgb(233, 233, 233);
        height: 10%;
        width: 40%;
        border-radius: 2vw; 
        text-align: center;
        font-size: 1.2rem;
        font-weight: lighter;
        outline: 0;

        ::placeholder{
            color: gray;
            font-style: italic;
            font-size: 1.2rem;
            text-align: center;
        }
    }

    h2, h3 {
        margin-bottom: 8%;
    }

    button {
        display: block;
        margin: 0 auto;
        margin-top: 5%;
        background-color: rgb(99, 207, 189);
        border: none;
        height: 10%;
        width: 15%;
        font-size: 1.5rem;
        border-radius: 0.8vw;
        color: rgb( 67, 67, 67)
    }
`


export default class CriarPlaylist extends React.Component {



    render() {
        return (
            <div>

                <button onClick={this.props.propsTrocarEstadoPagina}>Ir Lista Playlist</button>

                <CardCriarPlaylist>
                    <h2>Criar Playlist</h2>
                    <h3>Nome Playlist</h3>
                    <input placeholder={'Nome da Playlist'}></input>
                    <button>Criar</button>
                </CardCriarPlaylist>

            </div>
        );
    }
}