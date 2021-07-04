import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';


export const ApplicationFormPage = () => {

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [motivo, setMotivo] = useState('');
    const [profissao, setProfissao] = useState('');
    const [pais, setPais] = useState('');

    const onChangeNome = (event) => {
        setNome(event.target.value);
    };

    const onChangeIdade = (event) => {
        setIdade(event.target.value);
    };

    const onChangeMotivo = (event) => {
        setMotivo(event.target.value)
    };

    const onChangeProfissao = (event) => {
        setProfissao(event.target.value)
    }

    const onChangePais = (event) => {
        setPais(event.target.value)
    }

    const pathParams = useParams();

    const submitForm = () => {
        console.log(nome, idade, motivo, profissao, pais)
        const body = {
            name: nome,
            age: Number(idade),
            application: motivo,
            profession: profissao,
            contry: pais
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/juliana-moraes/trips/${pathParams.id}/apply`, body)
            console.log('foi')

            .then((response) => {
                console.log('correto', response)
                //window.alert('foi')
            })

            .catch((erro) => {
                //window.alert('não foi')
                console.log(erro.response.data)
            })
    }


    return (

        <div>

            <p>Formulário de Inscrição</p>
            <form>
                <input
                    name={'nome'}
                    value={nome}
                    placeholder='Nome'
                    onChange={onChangeNome}
                    required
                />
                <input
                    name={'idade'}
                    value={idade}
                    placeholder='Idade'
                    onChange={onChangeIdade}
                    required
                    type='number'
                />
                <input
                    name={'motivo'}
                    value={motivo}
                    placeholder='Motivo'
                    onChange={onChangeMotivo}
                    required
                />
                <input
                    name={'profissao'}
                    value={profissao}
                    placeholder='Profissão'
                    onChange={onChangeProfissao}
                    required
                />
                <input
                    name={'pais'}
                    value={pais}
                    placeholder='País'
                    onChange={onChangePais}
                    required
                />

                <button onClick={submitForm}>Enviar</button>
            </form>

        </div>

    )

}