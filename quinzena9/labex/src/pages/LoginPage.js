import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { Login } from '../css/GlobalStyled.js'

export const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const onChangeSenha = (event) => {
        setSenha(event.target.value);
    };

    const submitLogin = (event) => {
        console.log(email, senha);

        const body = {
            email: email,
            password: senha
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/juliana-moraes/login', body)
        .then((resp) => {
            console.log(resp.data);
        }).catch((erro) => {
            console.log('Deu errado', erro.response)
        })


    };


    return (
        <Login>
            <input
                placeholder='Login'
                type='email'
                value={email}
                onChange={onChangeEmail}
            />

            <input
                placeholder='Senha'
                type='password'
                value={senha}
                onChange={onChangeSenha}
            />

            <div>
                <button>Voltar</button>
                <button onClick={submitLogin}>Entrar</button>
            </div>

        </Login>
    )

}