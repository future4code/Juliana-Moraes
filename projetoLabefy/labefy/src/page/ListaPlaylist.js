import React from 'react';

export default class ListarPlaylist extends React.Component {
    render(){
        return(
            <div>
                <h2>Suas Playlists</h2>
                <button onClick={this.props.propsTrocarEstadoPagina}>Criar Playlist</button>
            </div>
        );
    }
}