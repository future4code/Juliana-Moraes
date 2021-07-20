import React from 'react'
import { useHistory } from 'react-router';
import { useProtectPage } from '../hooks/useProtectPage.js';

export const AdminHomePage = () => {

    useProtectPage();
    const history = useHistory();

    const irParaTripDetalis = () => {
        return history.push('/admin/trips/:id')
    }

    const irParaCreateTrip = () => {
        return history.push('/admin/trips/createtrip')
    }

    return(
        <div>
           <div>
           <button onClick={irParaCreateTrip}>Nova Viagem</button>
           </div>
           
           <button onClick={irParaTripDetalis}>Ir para detalhe da viagem</button>
        </div>
    )
   
}