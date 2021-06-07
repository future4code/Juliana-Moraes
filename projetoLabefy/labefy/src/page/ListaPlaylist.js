import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PlaylistEditar from './PlaylistEditar.js';

const CardLista = styled.h2`
    color: white;
    font-weight: lighter;
`
const CardPlaylistPai = styled.div`
    display: flex;
    justify-content: center;
    
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


export default class ListaPlaylist extends React.Component {

    state = {
        arrayPlaylist: [],
        paginaAtual: 'lista'
    }

    componentDidMount() {
        this.pegarListaPlaylist()
    }

    pegarListaPlaylist = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
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

    deletarPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers: {
                Authorization: 'juliana-moraes'
            }
        })
            .then((resp) => {
                alert('Playlist removida com sucesso!')
                this.pegarListaPlaylist()
            })
            .catch((erro) => {
                alert('Erro ao remover Playlist')
                console.log(erro)
            })

    }

    trocaPaginaListaEditar = () => {
        if (this.state.paginaAtual === 'lista') {
            this.setState({ paginaAtual: 'editar' });
        } else {
            this.setState({ paginaAtual: 'lista' });
        }
    };


    render() {


        const lista = this.state.arrayPlaylist.map((playlist) => {
            return (
                <CardPlaylist key={playlist.id}>
                    {playlist.name}
                    <button onClick={this.trocaPaginaListaEditar}>Editar</button>
                    <button onClick={() => this.deletarPlaylist(playlist.id)}>X</button>
                </CardPlaylist>
            )

        })

        const renderizarParaEditar = () => {
            if (this.state.paginaAtual === 'editar') {
                return <PlaylistEditar />
            } else {
                return <CardPlaylistPai>
                    <CardLista>
                        <h2>Suas Playlists</h2>
                        <button onClick={this.props.propsTrocarEstadoPagina}>Voltar</button>
                        {lista} 
                    </CardLista>
                </CardPlaylistPai>
            }
        }


        return (
            <div className='ListaPlaylist'>
                {renderizarParaEditar()}
            </div>
        )
    }
}