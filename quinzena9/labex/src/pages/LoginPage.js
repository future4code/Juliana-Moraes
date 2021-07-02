//import axios from 'axios';
import React from 'react'
import { Login } from '../css/GlobalStyled.js'
import useForm from '../hooks/useForm.js'

export const LoginPage = () => {

    const { form, onChange, cleanFields } = useForm({
        email: '',
        senha: '',
    });

    const submitLogin = (event) => {
        event.prevenDefault();
        console.log("Formulário enviado!", form);
        cleanFields();


        // const body = {
        //     email: email,
        //     password: senha
        // }

        // axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/juliana-moraes/login', body)
        // .then((resp) => {
        //     console.log(resp.data);
        // }).catch((erro) => {
        //     console.log('Deu errado', erro.response)
        // })


    };


    return (
        <Login>
            <form onSubmit={submitLogin}>
            <input
                name={'email'}
                placeholder='Email'
                type={'email'}
                value={form.email}
                onChange={onChange}
                required
            />

            <input
                name={'senha'}
                placeholder='Senha'
                type={'password'}
                value={form.senha}
                onChange={onChange}
                required
            />

            <div>
                <button>Voltar</button>
                <button onClick={submitLogin}>Entrar</button>
            </div>

            </form>

        </Login>
    );

};