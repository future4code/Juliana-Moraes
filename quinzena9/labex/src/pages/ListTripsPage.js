import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ListTrip } from '../css/GlobalStyled.js'

export const ListTripsPage = () => {

    const [lista, setLista] = useState ([]);
    
    useEffect(()=> {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/juliana-moraes/trips`)
            .then((resp) => {
                setLista(resp.data.trips);
               // const lista = (resp.data.trips);
                console.log(lista)
            });
    },[]);
    
    
    return (

        <ListTrip>
            
                {lista.map((lista) => {
                    return <li>{lista.name}</li>;
                })}

                <p>Lista viagens</p>

        
        </ListTrip>

    )

}