import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CardEditarPlaylist = styled.div`
    border: 1px solid white;
    width: 80%;
    height: 60vh;
    margin: 0 auto;
    margin-top: 5%;
    text-align: center;
    color: #fff;
    font-size: 1.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
`

const CardMusicas = styled.div`
     input{
        border: none;
        background-color: rgb(233, 233, 233);
        height: 7%;
        width: 40%;
        border-radius: 2vw; 
        text-align: center;
        font-size: 1.2rem;
        font-weight: lighter;
        outline: 0;
        margin: 1%;

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
        height: 5%;
        width: 25%;
        font-size: 1.2rem;
        border-radius: 0.8vw;
        color: rgb( 67, 67, 67)
    }
`

const CardListaMusicas = styled.div`
`

const CardPlaylist = styled.div`
    border-bottom: 1px solid white;
    color: white;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
    font-weight: lighter;
`

export default class PlaylistEditar extends React.Component {

    state = {
        arrayMusicas: [],
        musica: '',
        artista: '',
        link: ''
    }


    capturaMusica = (event) => {
        this.setState({ musica: event.target.value })
    }

    capturaArtista = (event) => {
        this.setState({ artista: event.target.value })
    }

    capturaLink = (event) => {
        this.setState({ link: event.target.value })
    }

    adicionarMusicas = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks'
        const body = {
            name: this.state.musica,
            artist: this.state.artista,
            url: this.state.link
        }

        axios.post(url, body, {
            headers: {
                Authorization: 'juliana-moraes'
            }
        })
            .then((resp) => {
                alert('Nova Música Adicionada!');
                
                this.setState({ musica: '', artista: '', link: '' })
                console.log(resp)
            })
            .catch((erro) => {
                alert('Erro ao adicionar a música');
            })
    }

    listarMusicas = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        axios.get(url, {
            headers: {
                Authorization: 'juliana-moraes'
            }
        })

            .then((resp) => {
                this.setState({ arrayPlaylist: resp.data.result.list })
                //console.log(resp.data.result.list)
            })

            .catch((erro) => {
                console.log(erro);
            })
    }  


    render() {

        const lista = this.state.arrayMusicas.map((music) => {
            return (
                <CardPlaylist key={music.id}>
                    {music.name}
                </CardPlaylist>
            )

        })

        return (

            <CardEditarPlaylist>
                <CardMusicas>
                    <p>Adicionar Músicas</p>
                    <button onClick={this.props.propsTrocarEstadoPagina}>Suas Playlists</button>
                    <input
                        placeholder={'Nome da Música'}
                        value={this.state.musica}
                        onChange={this.capturaMusica}
                    />
                    <input
                        placeholder={'Artista ou Banda'}
                        value={this.state.artista}
                        onChange={this.capturaArtista}
                    />
                    <input
                        placeholder={'Link do arquivo'}
                        value={this.state.link}
                        onChange={this.capturaLink}
                    />
                    <button onClick={this.adicionarMusicas}>Add Música</button>
                </CardMusicas>

                <CardListaMusicas>

                </CardListaMusicas>
            </CardEditarPlaylist>


        );
    }
}