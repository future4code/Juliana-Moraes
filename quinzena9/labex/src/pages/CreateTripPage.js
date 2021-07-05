import React from 'react'
import useForm from '../hooks/useForm'
import axios from 'axios'

export const CreateTripPage = () => {

    const { form, onChange, cleanFields } = useForm({ name: '', planet: '', date: '', description: '', durationInDays: '' })


    const submitCreatForm = (event) => {
        event.preventDefault()
        console.log(form)
        
        const body = {...form, durationInDays: Number(form.durationInDays)}
        console.log(body)

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/juliana-moraes/trips', body)
            
            .then((response) => {
                window.alert('Viagem Criada')
                
            }).catch((erro) => {
                window.alert('Erro ao criar viagem')
            })

        cleanFields();
    }


    return (
        <div>
            Criar nova viagem
            <form onSubmit={submitCreatForm}>
                <input
                    name='name'
                    value={form.name}
                    placeholder={'Nome'}
                    onChange={onChange}
                    required
                />

                <input
                    name='planet'
                    value={form.planet}
                    placeholder={'Planet'}
                    onChange={onChange}
                    required
                />

                <input
                    name='date'
                    value={form.date}
                    placeholder={'Data'}
                    onChange={onChange}
                    required
                />

                 <input
                    name='description'
                    value={form.description}
                    placeholder={'Descrição'}
                    onChange={onChange}
                    required
                />

                 <input
                    name='durationInDays'
                    value={form.durationInDays}
                    placeholder={'Duração da viagem'}
                    onChange={onChange}
                    required
                />


            </form>
        </div>
    )

}