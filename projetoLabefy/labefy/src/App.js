import React from 'react';
import './App.css';
import Topo from './components/Topo.js'
import ListaPlaylist from './page/ListaPlaylist.js'
import CriarPlaylist from './page/CriarPlaylist.js'


export default class App extends React.Component {

  state = {
    pagina: 'criarPagina'
  }

  trocarEstadoPagina = () => {
    if (this.state.pagina === 'criarPagina') {
      this.setState({ pagina: 'listaPlaylist'});
    } else {
      this.setState({ pagina: 'criarPagina'});
    }
  };

  render() {

    const RenderizarTrocarPagina = () => {
      if (this.state.pagina === 'criarPlaylist') {
        return <CriarPlaylist propsTrocarEstadoPagina={this.trocarEstadoPagina} />
      } else if (this.state.pagina === 'listaPlaylist') {
        return <ListaPlaylist propsTrocarEstadoPagina={this.trocarEstadoPagina} />
      } else {
        return <CriarPlaylist propsTrocarEstadoPagina={this.trocarEstadoPagina} />
      }
    }


    return (
      <div className='App'>
        <Topo></Topo>
        <div>{RenderizarTrocarPagina()}</div>
      </div>
    );
  }
  
}


