import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import useForm from '../hooks/useForm';


export const ApplicationFormPage = () => {

    const { form, onChange, cleanFields } = useForm({ name: '', age: '', applicationText: '', profission: '', country: '' })
    const pathParams = useParams();
    
    const submitForm = (event) => {
        event.preventDefault()
        console.log(form)
        
        const body = {...form, age: Number(form.age)}
        console.log(body)

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/juliana-moraes/trips/${pathParams.id}/apply`, body)
            
            .then((response) => {
                window.alert('Formulario Enviado')
                
            }).catch((erro) => {
                window.alert('Erro no envio')
            })
        cleanFields();
    }


    return (

        <div>
            <a href='/'>Home</a>
            <p>Formulário de Inscrição</p>
            
            <form onSubmit={submitForm}>
                <input
                    name='name'
                    value={form.name}
                    placeholder={'Nome'}
                    onChange={onChange}
                    required
                />
                <input
                    name='age'
                    value={form.age}
                    placeholder='Idade'
                    onChange={onChange}
                    required
                    type='number'
                />
                <input
                    name='applicationText'
                    value={form.applicationText}
                    placeholder='Motivo'
                    onChange={onChange}
                    required
                />
                <input
                    name='profission'
                    value={form.profission}
                    placeholder='Profissão'
                    onChange={onChange}
                    required
                />
                <input
                    name='country'
                    value={form.country}
                    placeholder='País'
                    onChange={onChange}
                    required
                />

                <button>Enviar</button>
            </form>
            
        </div>

    )

}