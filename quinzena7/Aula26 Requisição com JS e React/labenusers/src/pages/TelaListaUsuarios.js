import React from "react";
import axios from "axios";
import styled from 'styled-components';

const CardUsuarios = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
`


export default class TelaListaUsuario extends React.Component {

    state = {
        usuarios: [] 
        //para mostrar na tela, preciso guardar essa lista de usuários em um array de estado (aqui criei o array de estado)
    }


    //assim que a tela terminar de montar o DidMount é chamado - e não preciso clicar, automaticamente vai aparecer a lista de usuários
    componentDidMount() {
        this.pegarUsuarios()
    }



    pegarUsuarios = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
        axios.get(url, {
            headers: {
                Authorization: 'juliana-moraes'
            }
        })

        .then((resp) => { //em caso de sucesso
            this.setState({usuarios: resp.data}) 
            console.log(resp)
            //fazendo um console.log(resp) vejo que o array esta dentro do data
            //aqui estou colocando o DATA dentro do array de estado 
        })
        .catch( (err) => { //em caso de erro
            alert('Ocorreu um problema, tente novamente!')
        })
    }

    //passo o id como parametro porque a API pede no final da URL o id para saber quem deletar -- no meu card já tenho o id então posso pegar o id como paramentro
    deletarUsuario = (id) => {
        //no final substituo o :id pela variavel passada por parametro -- não é 'aspas' é `crase`
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}` 
        axios.delete(url, {
            headers: { //isso é um objeto
                Authorization: 'juliana-moraes'
            }
        })

        .then( (resp) => {
            alert('Usuário deletado com sucesso!')
            this.pegarUsuarios()
        }) 

        .catch( (err) => {
            alert('Ocorreu um erro, tente novamente!')
        })
    }



    render(){
        //console.log(this.state.usuarios)
        //preciso pegar minha lista de objetos (array usuarios) e transformar em itens para aparecer na tela. Para isso uso o (map) que vai percorrer a lista de objetos

        const listaUsuarios = this.state.usuarios.map((user) => {
            return (
                <CardUsuarios key={user.id}>
                    {user.name}
                    {user.email}
                    <button onClick={() => this.deletarUsuario(user.id)}>X</button>
                </CardUsuarios> //preciso do key para o react otimizar a otmização --aqui ja mostro os usuários
            )
        })

        return(
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para Tela Cadastro</button>
                <h2>Lista de Usuários</h2>
                {listaUsuarios}
            </div>
        )
    }
}