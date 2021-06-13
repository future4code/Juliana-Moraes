import React from "react";
import axios from "axios";

export default class TelaCadastro extends React.Component {
    state = {
        nome: '',
        email: ''
    }

    receberNome = (event) => {
        this.setState({nome: event.target.value})
    }

    receberEmail = (event) => {
        this.setState({email: event.target.value})
    }

    fazerCadastro = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        const body = {
            name: this.state.nome,
            email: this.state.email
        }

        axios.post(url, body, { 
            headers: {
                Authorization: 'juliana-moraes'
            }
        }) //no caso de sucesso uso THEN - no caso de erro uso catch
        .then( (resp) => {
            alert('Usuário cadastrado com sucesso')
            this.setState({nome:'', email:''}) // para apagar o formulario
        })
        .catch( (err) => {
            alert(err.response.data.message) //para a msg do erro aparecer no alert
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.props.irParaLista}>Ir para Lista de Usuário</button>
                <h2>Criar Usuário</h2>
                <input 
                    type='text' 
                    placeholder='Nome'
                    value={this.state.nome}
                    onChange={this.receberNome} 
                />
                <input 
                    type='email' 
                    placeholder='Email'
                    value={this.state.email}
                    onChange={this.receberEmail} 
                />
                <button onClick={this.fazerCadastro}>Cadastrar</button>
            </div>
        )
    }
}


