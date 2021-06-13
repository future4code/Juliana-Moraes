//import logo from './logo.svg';
import './App.css';
import React from 'react';
import TelaCadastro from './pages/TelaCadastro';
import TelaListaUsuario from './pages/TelaListaUsuarios';
//import styled from 'styled-components';


export default class Labenusers extends React.Component {

  // state = {
  //   pagina:  'labenusers'
  // };


  // trocarPagina = () => {
  //   if (this.state.pagina === 'labenusers') {
  //     this.setState({ pagina: 'lista'});
  //   }else {
  //     this.setState({ pagina: 'labenusers'});
  //   }
  // };

  // render(){

  //   const renderizarPagina = () => {
  //     if (this.state.pagina === 'labenusers'){
  //       return <CriarUsuario></CriarUsuario>
  //     } else if (this.state.pagina === 'lista'){
  //       return <Lista></Lista>
  //     }
  //   }
  //   return (
  //     <div>
  //       <h1>Labenusers</h1>
  //       <button onClick={this.trocarPagina}>Trocar de Página</button>
  //       <div>{renderizarPagina()}</div>
  //     </div>
  //   );

  // }

  state = {
    telaAtual: 'cadastro'
  }

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista} />
      case 'lista':
        return <TelaListaUsuario irParaCadastro={this.irParaCadastro} />
      default:
        return <div>Erro! Pagina não encontrada :(</div>
    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual: 'cadastro'})

  }

  irParaLista = () => {
    this.setState({telaAtual: 'lista'})
  }


  render() {


    return (
      <div>
        {this.escolheTela()}
      </div>
    )
  }

}


