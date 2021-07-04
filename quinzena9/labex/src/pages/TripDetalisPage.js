import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useProtectPage } from '../hooks/useProtectPage.js';



export const TripDetalisPage = () => {

    useProtectPage();

    const pathParams = useParams();
    
    const [detalhe, setDetalhe] = useState({});

    useEffect(() => {

        const token = localStorage.getItem('token');

        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/juliana-moraes/trip/NoIFVcOiSgTKTIPVZwXS`, {
            headers: {
                auth: token
            }
        }) //a ultima parte é o {:id} da viagem que vai vir do paht do router, quando o usuário escolhe a viagem

            .then((response) => {
                console.log('deu certo', response)
                setDetalhe(response.data.trip.candidates)
                const detalhe = (response.data.trip.candidates)
                console.log('detalhe', detalhe)
            }).catch((erro) => {
                console.log('deu erro', erro.response)
            })

    }, [])


    return (
        <div>
            <p>Detalhes da viagem</p>
            
            {detalhe.map((detalhe) => {
                return ( <div key={detalhe.id}> <li>Nome: {detalhe.name}</li>
                    <li>Descrição: {detalhe.description}</li>
                    <li>Paneta: {detalhe.planet}</li>
                    <li>Duarção da viagem: {detalhe.durationInDays} dias</li>
                    <li>Data: {detalhe.date}</li>
                    </div> 
                )
            })}
            
        </div>
    )

}