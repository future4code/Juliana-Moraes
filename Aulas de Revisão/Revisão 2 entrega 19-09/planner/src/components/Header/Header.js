import React from "react";
import { HeaderContainer, HeaderControl } from './styled';
import { CircularProgress } from "@material-ui/core";
import { Backdrop } from "@material-ui/core";



const Header = (props) => {


    return (

        <HeaderContainer>
                <input
                    placeholder='Nova Tarefa'
                    name={'text'}
                    value={props.texto}
                    onChange={props.onChangeTexto}
                />

                <select onChange={props.onChangeSemana} value={props.semana}>
                    <option value='default'></option>
                    <option value='segunda'>Segunda</option>
                    <option value='terca'>Terça</option>
                    <option value='quarta'>Quarta</option>
                    <option value='quinta'>Quinta</option>
                    <option value='sexta'>Sexta</option>
                    <option value='sabado'>Sábado</option>
                    <option value='domingo'>Domingo</option>
                </select>

            <HeaderControl>
                <form onSubmit={props.criarTarefa}><button>Criar</button></form>
                <form> <button>Editar</button> </form>
                <form onSubmit={props.removeTarefa}> <button>Remover</button> </form>
            </HeaderControl>
        </HeaderContainer >
    )
}

export default Header