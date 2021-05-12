import React from 'react';
import styled from 'styled-components';
import App from '../App.js'

const DadosGerais = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    
`

export default class Etapa1 extends React.Component {
    
    render(){
        return(

            <div>
                <h1>ETAPA1 - DADOS GERAIS</h1>

                <h3>1. Qual o seu nome?</h3>
                <input></input>

                <h3>2. Qual a sua idade</h3>
                <input></input>

                <h3>3. Qual o seu email?</h3>
                <input></input>

                <h3>4. Qual a sua escolariade?</h3>
                <select name="menu" size="1">
                <option value="MedioIncompleto">Ensino Médio Incompleto</option>
                <option value="MedioCompleto">Ensino Médio Completo</option>
                <option value="SuperiorIncompleto">Ensino Superior Incompleto</option>
                <option value="SuperiorCompleto">Ensino Superior Completo</option>
                </select>

                <button onClick='{this.props.btnEtapa2}'>Proxima Etapa</button>
      
            </div>

           
    

        );
   }   

}

