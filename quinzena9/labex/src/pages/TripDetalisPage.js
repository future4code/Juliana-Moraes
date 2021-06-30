import axios from 'axios'
import React, { useEffect } from 'react'

export const TripDetalisPage = () => {

    useEffect((id) => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/juliana-moraes/trip/$id`)

    }, [])


    return(
        <div>
           Detalhes do pacote de viagem
        </div>
    )
   
}