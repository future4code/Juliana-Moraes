//import logo from './logo.svg';
import './App.css';
import React from 'react';
import CriarUsuario from './pages/CriarUsuario'
import Lista from './pages/Lista'

export default class Labenusers extends React.Component {

  state = {
    pagina:  'labenusers'
  };


  trocarPagina = () => {
    if (this.state.pagina === 'labenusers') {
      this.setState({ pagina: 'lista'});
    }else {
      this.setState({ pagina: 'labenusers'});
    }
  };

  render(){

    const renderizarPagina = () => {
      if (this.state.pagina === 'labenusers'){
        return <CriarUsuario></CriarUsuario>
      } else if (this.state.pagina === 'lista'){
        return <Lista></Lista>
      }
    }
    return (
      <div>
        <h1>Labenusers</h1>
        <button onClick={this.trocarPagina}>Trocar de Página</button>
        <div>{renderizarPagina()}</div>
      </div>
    );

  }
  
}


