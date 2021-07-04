import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
//import { ListTrip } from '../css/GlobalStyled.js'

export const ListTripsPage = () => {

    const history = useHistory();
    const [lista, setLista] = useState([]);

    useEffect(() => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/juliana-moraes/trips`)
            .then((resp) => {
                setLista(resp.data.trips);
                const lista = (resp.data.trips);
                console.log(lista)
            }).catch((erro) => {
                console.log(erro.resp)
            })
    }, []);

    const subscription = (id) => {
        history.push(`/trips/application/${id}`)
    }

    return (

        // <ListTrip>
        <div>
            {lista.map((lista) => {
                return (
                    <div key={lista.id}>
                        <li>{lista.name}</li>
                        <li>{lista.description}</li>
                        <li>Duração: {lista.durationInDays}</li>
                        <button onClick={() => subscription(lista.id)}>Inscrever</button>
                    </div>)
            })}

            <p>Lista viagens</p>

        </div>

        //</ListTrip>

    )

}