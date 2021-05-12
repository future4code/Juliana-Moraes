import logo from './logo.svg';
import './App.css';
import React from 'react';
import styled from 'styled-components';
import DadosGerais from './components/Etapa1.js';
import InfoEnsinoSuperior from './components/Etapa2.js'



class App extends React.Component {

  state = {
    pagina: "etapa1"
  }
  
  
  trocarPagina = () => {
    if (this.state.etapa1 === "etapa1"){
      this.setState({pagina:"etapa2"})
    }
  }

  render (){
    return (
      <div> 

        <DadosGerais btnEtapa2={this.btnEtapa2}/>    
        
  
      </div>
    );

  }
  
}

export default App;
