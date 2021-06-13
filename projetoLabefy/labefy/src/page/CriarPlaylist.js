import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CardCriarPlaylist = styled.div`
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
        font-weight: lighter;
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

    state = {
        nomePlaylist: ''
    }


    capturaNomePlaylist = (event) => {
        this.setState({nomePlaylist: event.target.value})
    }

    cadastraPlaylist = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        const body = {
            name: this.state.nomePlaylist
        }
        
        axios.post(url, body, {
            headers: {
                Authorization: 'juliana-moraes'
            }
        })
        .then( (resp) => {
            alert('Nova Playlist Adicionada!');
            this.setState({nomePlaylist:''})
            console.log(resp)
        })
        .catch( (erro) => {
            alert('Erro ao adicionar a Playlist');
        })
    }
    

    render() {
        return (
            <div>

                <button onClick={this.props.propsTrocarEstadoPagina}>Suas Playlists</button>

                <CardCriarPlaylist>
                    <h2>Criar Playlist</h2>
                    <input 
                        placeholder={'Nome da Playlist'}
                        value={this.state.nomePlaylist}
                        onChange={this.capturaNomePlaylist}
                    />
                    <button onClick={this.cadastraPlaylist}>Criar</button>
                </CardCriarPlaylist>

            </div>
        );
    }
}