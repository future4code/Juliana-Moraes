import React from 'react';
import styled from 'styled-components';
import App from '../App.js'

const InfoEnsinoSuperior = styled.div`
    display:flex;
    justify-content: center;
    
`

export default class Etapa2 extends React.Component {
    
    render(){
        return(

            <div>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>

                <h3>1. Qual o curso?</h3>
                <input></input>

                <h3>2. Qual a unidade de ensino?</h3>
                <input></input>

                <button onClick='{this.props.btnEtapa2}'>Proxima Etapa</button>
      
            </div>

           
    

        );
   }   

}
